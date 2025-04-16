const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'large.txt');
const content = 'This is a sample line of text to fill the file. '.repeat(1000); // Approx. 50KB per repetition
const targetSize = 10 * 1024 * 1024; // 5MB in bytes

let currentSize = 0;
const stream = fs.createWriteStream(filePath);

while (currentSize < targetSize) {
    stream.write(content);
    currentSize += Buffer.byteLength(content);
}

stream.end(() => {
    console.log('File created successfully with size > 5MB');
});