const crypto = require('crypto');
const fs = require('fs');


let algorithm = 'aes-256-cbc';
let key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);


// encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypt = cipher.update('Good Morning', 'utf-8', 'hex');
encrypt += cipher.final('hex');

console.log(encrypt)


// decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let data = decipher.update(encrypt, 'hex', 'utf-8');
data += decipher.final('utf-8');

console.log(data)

console.log(crypto.randomUUID())



console.time('Stream read time')
let stream = fs.createReadStream('large.txt', 'utf-8');

stream.on('data', (chank)=>{
    // console.log(chank)
})
stream.on('end', ()=>{
    console.log('Complete')
    console.timeEnd('Stream read time')
})

console.time('Normal read time')
let readData = fs.readFileSync('large.txt', 'utf-8');
console.timeEnd('Normal read time')
