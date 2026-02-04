#!/bin/bash
GEMINI_API_KEY="AIzaSyB9QY2MkY8cGL1PM6ZOUSJWysSQGB8x5X8"

curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GEMINI_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "contents": [{
      "parts": [{
        "text": "Generate an image: Practical hands-on learning aesthetic. Small hands working with real materials - wood, clay, fabric, or kitchen items. Warm natural light, earth tones, wooden textures. Child-sized tools arranged neatly. Evokes capability, independence, focused concentration. Gentle watercolor illustration style, orderly but alive. Vertical 3:4 aspect ratio."
      }]
    }],
    "generationConfig": {
      "responseModalities": ["TEXT", "IMAGE"]
    }
  }' > montessori-response.json

jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data' montessori-response.json | base64 -d > montessori-show-method.png

echo "Generated: montessori-show-method.png"
ls -la montessori-show-method.png
