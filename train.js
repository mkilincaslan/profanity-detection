const brain = require('brain.js');
const fs = require('fs');
const data = require('./data.json');

const net = new brain.recurrent.LSTM();

/**
 * Train the model with local data
 */

const TRAINING_DATA = data.map(item => ({
    input: item.input,
    output: item.output,
}));

// const TRAINING_DATA = [...nonProfanityData, ...profanityData]; // Merge profanity and non-profanity data

// Training options, more options be able to added
const options = {
    iterations: 5000,
};

net.train(TRAINING_DATA, options); // Training
const model = net.toJSON(); // Create a model


fs.writeFile('./model.json', JSON.stringify(model), 'utf8', () => console.log('model has been written')); // Export the model