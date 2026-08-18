const { Worker } = require("worker_threads");

console.log("Main thread started");

const worker = new Worker("./worker.js");

worker.on("message", (message) => {
  console.log("Worker says:", message);
});

worker.on("error", (error) => {
  console.error("Worker error:", error);
});

worker.on("exit", (code) => {
  console.log("Worker finished with code:", code);
});