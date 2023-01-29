const process = require("process");
const start = Date.now();

console.log("Hello World");

const printAnswer = () => {
  console.log("Goodbye World");
};

setTimeout(printAnswer, 10000);

const shutdown = () => {
  const end = Date.now();

  console.log(
    `Stopped by user after ${Math.floor((end - start) / 1000)} seconds`
  );
  process.exit();
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
