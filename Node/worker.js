const { parentPort } = require("worker_threads");

console.log("Worker thread started");

let sum = 0;

for (let i = 1; i <= 1000000; i++) {
  sum += i;
}

parentPort.postMessage(`Calculation complete. Sum = ${sum}`);