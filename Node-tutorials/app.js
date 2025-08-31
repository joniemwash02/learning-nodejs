console.log(__dirname);
console.log(__filename);

let number = 1;

const intervalId = setInterval(() => {
  console.log(number++);
}, 1000);

// Stop after 10 seconds (10000 ms)
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Counter stopped");
}, 10000);
