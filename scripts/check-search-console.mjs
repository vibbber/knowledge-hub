#!/usr/bin/env node
/**
 * Check Google Search Console data for kungfu.family
 * Usage: node scripts/check-search-console.mjs [days]
 * Default: 7 days
 */

import { google } from 'googleapis';
import fs from 'node:fs';
import path from 'node:path';

// Load credentials from Vibbber .env
function loadEnv() {
  const envPath = path.resolve('/Users/marcschwyn/Desktop/projects/Vibbber/.env');
  const content = fs.readFileSync(envPath, 'utf-8');
  const vars = {};
  for (const line of content.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      let val = match[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      vars[match[1].trim()] = val;
    }
  }
  return vars;
}

const env = loadEnv();
const SITE_URL = 'https://kungfu.family/';
const days = parseInt(process.argv[2] || '7');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: env.KUNGFU_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: env.KUNGFU_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

const webmasters = google.webmasters({ version: 'v3', auth });

function formatDate(d) {
  return d.toISOString().split('T')[0];
}

async function main() {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  console.log(`\n🔍 kungfu.family Search Console Report (last ${days} days)`);
  console.log('='.repeat(55));

  // Sitemaps
  try {
    const sitemaps = await webmasters.sitemaps.list({ siteUrl: SITE_URL });
    const entries = sitemaps.data.sitemap || [];
    console.log(`\n🗺️  Sitemaps: ${entries.length}`);
    for (const s of entries) {
      console.log(`  ${s.path}`);
      console.log(`    Submitted: ${s.lastSubmitted}`);
      console.log(`    Pending: ${s.isPending} | Errors: ${s.errors} | Warnings: ${s.warnings}`);
    }
  } catch (err) {
    console.log('Sitemaps error:', err.message);
  }

  // Top queries
  try {
    const queries = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ['query'],
        rowLimit: 20,
      },
    });

    const rows = queries.data.rows || [];
    if (rows.length) {
      console.log(`\n🔑 Top Search Queries:`);
      console.log('  Clicks | Impr  | CTR    | Pos  | Query');
      console.log('  ' + '-'.repeat(50));
      for (const r of rows) {
        const clicks = String(r.clicks).padStart(5);
        const impressions = String(r.impressions).padStart(5);
        const ctr = (r.ctr * 100).toFixed(1).padStart(5) + '%';
        const pos = r.position.toFixed(1).padStart(5);
        console.log(`  ${clicks} | ${impressions} | ${ctr} | ${pos} | ${r.keys[0]}`);
      }
    } else {
      console.log('\n  No search data yet (takes 2-3 days to populate for new sites)');
    }
  } catch (err) {
    console.log('Queries error:', err.message);
  }

  // Top pages
  try {
    const pages = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ['page'],
        rowLimit: 20,
      },
    });

    const rows = pages.data.rows || [];
    if (rows.length) {
      console.log(`\n📄 Top Pages in Search:`);
      console.log('  Clicks | Impr  | Page');
      console.log('  ' + '-'.repeat(50));
      for (const r of rows) {
        const clicks = String(r.clicks).padStart(5);
        const impressions = String(r.impressions).padStart(5);
        const page = r.keys[0].replace('https://kungfu.family', '');
        console.log(`  ${clicks} | ${impressions} | ${page}`);
      }
    }
  } catch (err) {
    console.log('Pages error:', err.message);
  }

  console.log('\n' + '='.repeat(55));
  console.log(`Site: ${SITE_URL}`);
}

main();
