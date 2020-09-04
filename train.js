const brain = require('brain.js');
const fs = require('fs');
const profanity = require('./profanity.json');

/**
 * Train the model with local data
 */

const net = new brain.recurrent.LSTM();

const trainingData = profanity.map(item => ({
    input: item.input,
    output: item.output,
}));

// Training options, more options be able to added
const options = {
    iterations: 5000,
};

net.train(trainingData, options); // Training
const model = net.toJSON(); // Create a model


fs.writeFile('./model.json', JSON.stringify(model), 'utf8', () => console.log('model has been written')); // Export the model