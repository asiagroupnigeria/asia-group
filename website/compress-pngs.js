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

async function compressPNGs() {
    for await (const filePath of walk(publicDir)) {
        const ext = path.extname(filePath).toLowerCase();
        
        if (ext === '.png') {
            const originalSize = fs.statSync(filePath).size;
            try {
                const buffer = fs.readFileSync(filePath);
                
                let processed = sharp(buffer)
                    .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
                    .png({ quality: 78, compressionLevel: 9, palette: true });

                const outputBuffer = await processed.toBuffer();
                
                if (outputBuffer.length < originalSize) {
                    fs.writeFileSync(filePath, outputBuffer);
                    console.log(`✅ Compressed ${path.basename(filePath)}`);
                }
            } catch (err) {
                console.error(`❌ Error ${path.basename(filePath)}:`, err.message);
            }
        }
    }
    console.log(`🎉 PNG Compression Complete!`);
}

compressPNGs();
