const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'assets', 'Ammar-P.P1x1-B.jpeg');
const publicDir = path.join(__dirname, 'public');
const appDir = path.join(__dirname, 'src', 'app');

async function processImages() {
    try {
        console.log('Processing images...');

        // 1. Create Circular Icon for browser favicon/icon
        // Note: Actual favicons are usually square files that the browser masks, 
        // but to "force" a round look in contexts that support transparency (like tabs), 
        // we make a PNG with transparent corners.
        const circleBuffer = await sharp(inputPath)
            .resize(256, 256)
            .composite([{
                input: Buffer.from(
                    `<svg><circle cx="128" cy="128" r="128" fill="black"/></svg>`
                ),
                blend: 'dest-in'
            }])
            .png()
            .toBuffer();

        // Save as icon.png (Next.js automatically handles this for favicons if placed in src/app)
        // We use .png to support transparency for the circular cut
        fs.writeFileSync(path.join(appDir, 'icon.png'), circleBuffer);

        // Also save to public for good measure/backwards compatibility
        fs.writeFileSync(path.join(publicDir, 'favicon.png'), circleBuffer);

        console.log('Created circular icons (icon.png, favicon.png)');

        // 2. Rectangular (Original) for OpenGraph (Social Link Preview)
        // The user effectively wants the full image "Ammar-P.P1x1-B.jpeg" for social cards.
        // It is already square (P1x1), but "rectangular" in the sense of filling the frame.
        // Next.js uses opengraph-image.jpeg|png

        const originalBuffer = await sharp(inputPath)
            .toFormat('jpeg')
            .toBuffer();

        fs.writeFileSync(path.join(appDir, 'opengraph-image.jpeg'), originalBuffer);

        // Twitter image as well
        fs.writeFileSync(path.join(appDir, 'twitter-image.jpeg'), originalBuffer);

        console.log('Created rectangular OpenGraph images (opengraph-image.jpeg, twitter-image.jpeg)');

        // 3. Apple Touch Icon (usually square, but we can make it our circular version or just the standard square)
        // iOS icons usually add their own rounded corners, so standard practice is square.
        // However, if the user explicitly wants circular *everywhere*, we can try the circle version with white background or transparency.
        // Let's stick to the generated circle png for consistency with "Show browser favicon... in round form"
        fs.writeFileSync(path.join(appDir, 'apple-icon.png'), circleBuffer);
        console.log('Created apple-icon.png');

    } catch (error) {
        console.error('Error processing images:', error);
    }
}

processImages();
