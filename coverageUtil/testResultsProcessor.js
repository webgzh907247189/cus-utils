const fs = require('fs');
const path = require('path');
const Duplex = require('stream').Duplex;
const report = path.resolve(__dirname, 'report.json');

function bufferToStream(buffer) {
    let stream = new Duplex();
    stream.push(buffer);
    stream.push(null);
    return stream;
}

function test(result) {
    bufferToStream(Buffer.from(JSON.stringify(result))).pipe(fs.createWriteStream(report));
    return result;
}

module.exports = test;
