#!/bin/bash
GEMINI_API_KEY="AIzaSyB9QY2MkY8cGL1PM6ZOUSJWysSQGB8x5X8"

curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GEMINI_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "contents": [{
      "parts": [{
        "text": "Generate an image: Logical problem-solving aesthetic. Two puzzle pieces fitting together, or two thought bubbles merging into one solution. Clean, structured, clinical but warm. Muted blues and greens, architectural precision. Evokes collaboration, finding common ground, structured thinking. Modern minimalist illustration style. Vertical 3:4 aspect ratio."
      }]
    }],
    "generationConfig": {
      "responseModalities": ["TEXT", "IMAGE"]
    }
  }' > greene-response.json

jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data' greene-response.json | base64 -d > greene-plan-b.png

echo "Generated: greene-plan-b.png"
ls -la greene-plan-b.png
