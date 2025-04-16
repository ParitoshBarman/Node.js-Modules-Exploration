const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { v4: uuidv4 } = require('uuid');

let algorithm = 'aes-256-cbc';
let key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);

// Get CLI args
const operation = process.argv[2];

switch (operation) {
  case 'encrypt':
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypt = cipher.update('Hello, Good Morning', 'utf-8', 'hex');
    encrypt += cipher.final('hex');
    console.log(`Encrypted string: ${encrypt}`);
    break;

  case 'uuid':
    const id = uuidv4();
    console.log(`Generated UUID: ${id}`);
    break;

  case 'read-stream':
    const streamFilePath = path.join(__dirname, 'large.txt');
    console.time("Stream Read Time");

    const stream = fs.createReadStream(streamFilePath, 'utf-8');
    stream.on('data', (chunk) => {});
    stream.on('end', () => {
      console.timeEnd("Stream Read Time");
    });
    break;

  case 'read-fs':
    const fsFilePath = path.join(__dirname, 'large.txt');
    console.time("FS Read Time");

    const data = fs.readFileSync(fsFilePath, 'utf-8');

    console.timeEnd("FS Read Time");
    break;

  case 'os':
    console.log("System Info:");
    console.log(`OS Type: ${os.type()}`);
    console.log(`Platform: ${os.platform()}`);
    console.log(`CPU Architecture: ${os.arch()}`);
    console.log(`CPU Info:`, os.cpus());
    console.log(`Free Memory: ${os.freemem()} bytes`);
    console.log(`Total Memory: ${os.totalmem()} bytes`);
    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`Uptime: ${os.uptime()} seconds`);
    break;

  default:
    console.log("Invalid operation. Try: encrypt | uuid | read-stream | read-fs | os");
}
