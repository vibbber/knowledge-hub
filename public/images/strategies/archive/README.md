# Archive

Rejected card options are stored here for future reference.

## Structure

When a card option is rejected during picking:
1. Image moves here: `{strategy-slug}-option-{N}.png`
2. Data saved as: `{strategy-slug}-option-{N}.json`

## Data Format

```json
{
  "strategy": "do-you-know-scale",
  "book": "secrets-happy-families-feiler",
  "option": 2,
  "title": "Stories, Not Activities",
  "subtitle": "What actually builds children's emotional health",
  "angle": "aha",
  "imageAspect": 0.699,
  "archivedAt": "2026-02-04",
  "reason": "Option 1 (evidence-led) was stronger"
}
```

This allows us to reproduce any rejected card if needed.
