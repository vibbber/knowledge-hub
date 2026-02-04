#!/bin/bash
GEMINI_API_KEY="AIzaSyB9QY2MkY8cGL1PM6ZOUSJWysSQGB8x5X8"

curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GEMINI_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "contents": [{
      "parts": [{
        "text": "Generate an image: Warm Arctic scene showing calm parent-child connection, Inuit-inspired aesthetic. A parent and child in soft natural light, peaceful presence not words. Soft earth tones, natural materials, warmth of human connection. Evokes discipline through calm and touch rather than voice. Painterly style, warm and grounded. Vertical 3:4 aspect ratio."
      }]
    }],
    "generationConfig": {
      "responseModalities": ["TEXT", "IMAGE"]
    }
  }' > response.json

# Extract the base64 image data and save as PNG
jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data' response.json | base64 -d > inuit-play-discipline.png

echo "Generated: inuit-play-discipline.png"
ls -la inuit-play-discipline.png
