const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/second.txt", "utf8", (err, results) => {
  if (err) {
    console.log(err);
    return;
  }
  const results1=results

  readFile("./content/first.txt", (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
      const results2 = results
      console.log(`${results1} and ${results2}`)
      writeFile('./content/itesm.txt', `here is  the results ${results1} + ${results2}`, (error, results) => {
          if (error) {
              return
          }
          console.log(results)
      })
  });
    
});
