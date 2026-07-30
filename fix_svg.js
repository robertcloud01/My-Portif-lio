const fs = require('fs');
const path = require('path');

const targetPath = 'src/components/ui/mjolnir/MjolnirSVG.tsx';
const svgPath = 'mijolnir/mjolnir_separated.svg';

try {
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const runesMatch = svgContent.match(/<g id="runes"[^>]*>([\s\S]*?)<\/g>/);
    const runesContent = runesMatch ? runesMatch[1].trim().replace(/stroke-width/g, 'strokeWidth') : '';

    if (!runesContent) {
        console.error('Error: Could not find or extract runes from SVG');
        process.exit(1);
    }

    let tsxContent = fs.readFileSync(targetPath, 'utf8');
    const marker = '{/* Runes will be inserted here */}';

    if (!tsxContent.includes(marker)) {
        console.error('Error: Marker not found in TSX file');
        process.exit(1);
    }

    tsxContent = tsxContent.replace(marker, runesContent);

    fs.writeFileSync(targetPath, tsxContent);
    console.log('Restored runes successfully');
} catch (err) {
    console.error('Runtime error:', err.message);
    process.exit(1);
}
