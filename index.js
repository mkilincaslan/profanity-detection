const brain = require('brain.js');
const fs = require('fs');
const model = JSON.parse(fs.readFileSync('./model.json', 'utf8')); // Import the model

const net = new brain.recurrent.LSTM();
net.fromJSON(model); // Include the model

const output = net.run('profanity'); // Run

console.log(output);
