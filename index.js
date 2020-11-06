const brain = require("brain.js");
const fs = require("fs");
const model = JSON.parse(fs.readFileSync("./model.json", "utf8")); // Import the model
const test = require("./test.json");

const net = new brain.recurrent.LSTM();
net.fromJSON(model); // Include the model
let unCaught = 0;

test.forEach(({input}) => {

    const output = net.run(input); // Run

    console.log("küfür: ", input, " - sonuç: ", output);
    if (output <= 0.3) unCaught++;
});

const totalSuccessPercentage = ((test.length - unCaught) * 100) / test.length;

console.log(unCaught, " adet küfür algılanamadı!!");
console.log(totalSuccessPercentage, "% oranında başarı sağlandı!");
