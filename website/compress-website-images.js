const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function *walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else yield entry;
    }
}

async function compressWebsiteImages() {
    let totalSaved = 0;
    let count = 0;

    for await (const filePath of walk(publicDir)) {
        const ext = path.extname(filePath).toLowerCase();
        
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            const originalSize = fs.statSync(filePath).size;

            try {
                const buffer = fs.readFileSync(filePath);
                
                // Aggressive resize: max 1920x1920 (perfect for 1080p displays)
                let processed = sharp(buffer)
                    .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true });

                // Aggressive compression without visible quality loss
                if (ext === '.jpg' || ext === '.jpeg') {
                    processed = processed.jpeg({ quality: 78, mozjpeg: true });
                } else if (ext === '.png') {
                    processed = processed.png({ quality: 78, compressionLevel: 9, palette: true });
                } else if (ext === '.webp') {
                    processed = processed.webp({ quality: 78, effort: 6 });
                }

                const outputBuffer = await processed.toBuffer();
                
                // Only overwrite if the new file is actually smaller
                if (outputBuffer.length < originalSize) {
                    fs.writeFileSync(filePath, outputBuffer);
                    const saved = originalSize - outputBuffer.length;
                    totalSaved += saved;
                    count++;
                    console.log(`✅ Compressed ${path.basename(filePath)}: Saved ${(saved / 1024).toFixed(2)} KB`);
                } else {
                    console.log(`⏩ Skipped ${path.basename(filePath)}: Already optimized`);
                }
            } catch (err) {
                console.error(`❌ Error processing ${path.basename(filePath)}:`, err.message);
            }
        }
    }

    console.log(`\n🎉 Compression Complete!`);
    console.log(`Processed ${count} images.`);
    console.log(`Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

compressWebsiteImages();
