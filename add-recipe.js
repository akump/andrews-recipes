import { readFile, writeFileSync } from "fs";
import readline from "readline";

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question("URL:", (url) => {
  readlineInterface.question("Display name:", (displayName) => {
    readFile("./src/recipes.json", function (err, data) {
      const json = JSON.parse(data);
      json.data.push({
        url,
        displayName,
      });

      writeFileSync("./src/recipes.json", JSON.stringify(json));
    });
    readlineInterface.close();
  });
});
