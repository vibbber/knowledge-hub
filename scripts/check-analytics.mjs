#!/usr/bin/env node
/**
 * Check Google Analytics data for kungfu.family
 * Usage: node scripts/check-analytics.mjs [days]
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
const PROPERTY_ID = env.KUNGFU_GA_PROPERTY_ID;
const days = parseInt(process.argv[2] || '7');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: env.KUNGFU_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: env.KUNGFU_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

const analyticsData = google.analyticsdata({ version: 'v1beta', auth });

async function main() {
  console.log(`\n📊 kungfu.family Analytics Report (last ${days} days)`);
  console.log('='.repeat(55));

  // Overview metrics
  try {
    const overview = await analyticsData.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'averageSessionDuration' },
          { name: 'bounceRate' },
        ],
      },
    });

    const row = overview.data.rows?.[0]?.metricValues;
    if (row) {
      console.log(`\n📈 Overview:`);
      console.log(`  Users:            ${row[0].value}`);
      console.log(`  Sessions:         ${row[1].value}`);
      console.log(`  Page Views:       ${row[2].value}`);
      console.log(`  Avg Duration:     ${Math.round(parseFloat(row[3].value))}s`);
      console.log(`  Bounce Rate:      ${(parseFloat(row[4].value) * 100).toFixed(1)}%`);
    } else {
      console.log('\n  No data yet (tracking just started)');
    }
  } catch (err) {
    console.error('Overview error:', err.message);
  }

  // Top pages
  try {
    const pages = await analyticsData.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' },
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10,
      },
    });

    const rows = pages.data.rows;
    if (rows?.length) {
      console.log(`\n📄 Top Pages:`);
      for (const r of rows) {
        const path = r.dimensionValues[0].value;
        const views = r.metricValues[0].value;
        const users = r.metricValues[1].value;
        console.log(`  ${views.padStart(4)} views | ${users.padStart(3)} users | ${path}`);
      }
    }
  } catch (err) {
    console.error('Pages error:', err.message);
  }

  // Traffic sources
  try {
    const sources = await analyticsData.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'sessionSource' }],
        metrics: [
          { name: 'sessions' },
          { name: 'activeUsers' },
        ],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10,
      },
    });

    const rows = sources.data.rows;
    if (rows?.length) {
      console.log(`\n🔗 Traffic Sources:`);
      for (const r of rows) {
        const source = r.dimensionValues[0].value;
        const sessions = r.metricValues[0].value;
        const users = r.metricValues[1].value;
        console.log(`  ${sessions.padStart(4)} sessions | ${users.padStart(3)} users | ${source}`);
      }
    }
  } catch (err) {
    console.error('Sources error:', err.message);
  }

  // Country breakdown
  try {
    const geo = await analyticsData.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'country' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 10,
      },
    });

    const rows = geo.data.rows;
    if (rows?.length) {
      console.log(`\n🌍 Countries:`);
      for (const r of rows) {
        console.log(`  ${r.metricValues[0].value.padStart(4)} users | ${r.dimensionValues[0].value}`);
      }
    }
  } catch (err) {
    console.error('Geo error:', err.message);
  }

  console.log('\n' + '='.repeat(55));
  console.log(`Property ID: ${PROPERTY_ID} | Measurement ID: ${env.KUNGFU_GA_MEASUREMENT_ID}`);
}

main();
