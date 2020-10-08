const brain = require("brain.js");
const fs = require("fs");
const model = JSON.parse(fs.readFileSync("./model.json", "utf8")); // Import the model
const kufur = require("./kufur.json");

const net = new brain.recurrent.LSTM();
net.fromJSON(model); // Include the model
let unCaught = 0;

kufur.forEach(({input}) => {

    const output = net.run(input); // Run

    console.log("kufur: ", input, " - sonuc: ", output);
    if (output == 0) unCaught++;
});

const totalSuccessPercentage = ((kufur.length - unCaught) * 100) / kufur.length;

console.log(unCaught, " adet kufur algilanamadi");
console.log(totalSuccessPercentage, "% oraninda basari saglandi");