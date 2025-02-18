const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Base paths (constant naming convention)
const INPUT_FOLDER = path.join(__dirname, 'images');
const OUTPUT_FOLDER = path.join(__dirname, 'output');

/**
 * Processes images recursively, compressing and converting them to WebP.
 * @param {string} inputDir - Source directory
 * @param {string} outputDir - Destination directory
 */
const processImagesRecursively = async (inputDir, outputDir) => {
    try {
        const files = await fs.readdir(inputDir, { withFileTypes: true });

        for (const file of files) {
            const currentPath = path.join(inputDir, file.name);
            const outputPath = path.join(outputDir, file.name);

            if (file.isDirectory()) {
                await fs.mkdir(outputPath, { recursive: true });
                await processImagesRecursively(currentPath, outputPath);
            } else {
                const fileExt = path.extname(file.name).toLowerCase();
                const outputWebPPath = path.join(outputDir, path.basename(file.name, fileExt) + '.webp');

                try {
                    await sharp(currentPath)
                        // .resize(50, 50) // Resize to 50x50px
                        .webp({ quality: 60 }) // Compress & convert to WebP
                        .toFile(outputWebPPath);

                    console.log(`Processed: ${currentPath} -> ${outputWebPPath}`);
                } catch (err) {
                    console.error(`Error processing image: ${currentPath} -> ${err.message}`);
                }
            }
        }
    } catch (err) {
        console.error(`Error reading directory: ${inputDir} -> ${err.message}`);
    }
};

/**
 * Main function to start image processing.
 */
const main = async () => {
    console.log('Starting image processing...');

    await fs.mkdir(OUTPUT_FOLDER, { recursive: true });
    await processImagesRecursively(INPUT_FOLDER, OUTPUT_FOLDER);

    console.log('Image processing completed.');
};

main();
