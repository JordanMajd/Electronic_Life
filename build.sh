#!/bin/bash
echo "building app.js..."
browserify src/app.js -o dist/elife.js
echo "done."
