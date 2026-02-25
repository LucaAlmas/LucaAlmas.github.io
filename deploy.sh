#!/bin/bash
echo "Message:"
read message
npm run build
npx gh-pages -d dist -m "$message"