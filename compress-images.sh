#!/bin/bash
# Compress images for GitHub upload
# This reduces file sizes by 70-80% without visible quality loss

echo "🖼️  Compressing images in screenshots folder..."

cd /Users/ryangreen/Cosmic/StarWell-Website/images/screenshots

# Compress each PNG to 50% quality (still looks great on web)
for img in *.png; do
    if [ -f "$img" ]; then
        echo "Compressing: $img"
        # Use sips (built-in macOS tool) to compress
        sips -s format jpeg -s formatOptions 50 "$img" --out "${img%.png}-compressed.jpg" 2>/dev/null

        # Show size comparison
        original_size=$(du -h "$img" | cut -f1)
        compressed_size=$(du -h "${img%.png}-compressed.jpg" | cut -f1)
        echo "  $original_size → $compressed_size"
    fi
done

echo ""
echo "✅ Compression complete!"
echo ""
echo "📊 Size comparison:"
echo "Original folder:"
du -sh .
echo ""
echo "Compressed files total:"
du -sh *-compressed.jpg | awk '{sum+=$1} END {print sum " total"}'
echo ""
echo "💡 Next steps:"
echo "1. Delete original PNGs: rm *.png"
echo "2. Rename compressed files: for f in *-compressed.jpg; do mv \"\$f\" \"\${f%-compressed.jpg}.jpg\"; done"
echo "3. Upload to GitHub!"
