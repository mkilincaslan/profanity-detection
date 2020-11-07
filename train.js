const brain = require('brain.js');
const fs = require('fs');
const data = require('./data.json');

/**
 * * Create the train brain action with params which are these below
 * * This params are best at the moment to training a profanity model but then we need a big data for training
 * @param activation Uses activation function for the scale results between 0 - 1
 * @param hiddenLayers Uses intermediate layers for the training better the model
 * TODO: Learn more about the activation functions: relu, leaky-relu, softmax, sigmoid, tanh
 * TODO: Learn more about the hiddenLayer relation with the iterations and data size 
*/

const net = new brain.recurrent.LSTM(
    {
        activation: 'sigmoid',
        hiddenLayers: [90, 90, 90]
    }
);

/**
 * * Train the model with local data
*/

const TRAINING_DATA = data.map(({input, output}) => ({
    input,
    output,
}));

// Training options, more options be able to added
// Best options weightiness, momentum and iterations for training to profanity model. It achieves 85% success rate with good data.
const options = {
    iterations: 900, // Times to iterate
    // errorThresh: 0.02, // The acceptable error percentage from training data
    log: true, // console.log
    learningRate: 0.01, // Scales with delta to effect training rate --> number between 0 and 1, lambda, it must be lower for better training
    momentum: 0.95, // scales with next layer's change value --> number between 0 and 1, momentum, it must be upper for better training
};

let d = new Date(); // Start time
console.log("Training started...", d.toLocaleTimeString());
net.train(TRAINING_DATA, options); // Training
const model = net.toJSON(); // Create a model
d = new Date(); // End time

fs.writeFile(`./model-${d.getHours()}.json`, JSON.stringify(model), 'utf8', () => console.log(`Model has been written \n Training ended... ${d.toLocaleTimeString()}`)); // Export the model