const brain = require('brain.js');
const fs = require('fs');
const data = require('./data.json');

const net = new brain.recurrent.LSTM();

/**
 * Train the model with local data
 */

const TRAINING_DATA = data.map(({input, output}) => ({
    input,
    output,
}));

// Training options, more options be able to added
const options = {
    iterations: 24000,
};

console.log("Training started...");
net.train(TRAINING_DATA, options); // Training
const model = net.toJSON(); // Create a model


fs.writeFile('./model.json', JSON.stringify(model), 'utf8', () => console.log("Model has been written \n Training ended...")); // Export the model