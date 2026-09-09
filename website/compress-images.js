const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'C:/Users/SURFACE/Asia Group/catalogue-products-images';

async function compressImages() {
    const files = fs.readdirSync(dir);
    let totalSaved = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            const filePath = path.join(dir, file);
            const originalSize = fs.statSync(filePath).size;

            try {
                const buffer = fs.readFileSync(filePath);
                let processed = sharp(buffer)
                    .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true });

                if (ext === '.jpg' || ext === '.jpeg') {
                    processed = processed.jpeg({ quality: 75, mozjpeg: true });
                } else if (ext === '.png') {
                    // PNG compression with paletted colors (quantization) for massive size drop
                    processed = processed.png({ quality: 75, palette: true });
                }

                const outputBuffer = await processed.toBuffer();
                
                if (outputBuffer.length < originalSize) {
                    fs.writeFileSync(filePath, outputBuffer);
                    const saved = originalSize - outputBuffer.length;
                    totalSaved += saved;
                    console.log(`Compressed ${file}: Saved ${(saved / 1024).toFixed(2)} KB`);
                } else {
                    console.log(`Skipped ${file}: Output size is larger or same`);
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }
    }

    console.log(`\nCompression Complete! Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

compressImages();
