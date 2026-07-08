#!/bin/bash
# Renders the brand SVGs + og-image.html into the PNG set under ../public
# using headless Chrome. Run from this directory: bash generate.sh
set -e
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
BRAND_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$BRAND_DIR/../public"
TMP_DIR="$(mktemp -d)"

render_icon() { # svg, size, out
  cat > "$TMP_DIR/wrap.html" <<EOF
<!doctype html><html><head><style>*{margin:0}body{width:${2}px;height:${2}px}img{width:100%;height:100%;display:block}</style></head>
<body><img src="file://$BRAND_DIR/$1"></body></html>
EOF
  "$CHROME" --headless=new --disable-gpu --default-background-color=00000000 \
    --window-size="$2,$2" --screenshot="$PUBLIC_DIR/$3" "file://$TMP_DIR/wrap.html" 2>/dev/null
  echo "✓ $3 (${2}x${2})"
}

render_icon icon.svg 16 favicon-16x16.png
render_icon icon.svg 32 favicon-32x32.png
render_icon icon.svg 48 favicon-48x48.png
render_icon icon.svg 192 icon-192.png
render_icon icon.svg 512 icon-512.png
render_icon icon-apple.svg 180 apple-touch-icon.png
render_icon icon-maskable.svg 512 icon-maskable-512.png

"$CHROME" --headless=new --disable-gpu --window-size=1200,630 \
  --virtual-time-budget=10000 --screenshot="$PUBLIC_DIR/og-image.png" \
  "file://$BRAND_DIR/og-image.html" 2>/dev/null
echo "✓ og-image.png (1200x630)"

cp "$BRAND_DIR/icon.svg" "$PUBLIC_DIR/favicon.svg"
echo "✓ favicon.svg"
rm -rf "$TMP_DIR"
