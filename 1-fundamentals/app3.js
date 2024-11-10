// FileSystem
const fs = require("fs");
const content = fs.readFileSync("README.md", "utf8");

const wordCount = content.split(" ");
const reactWordCount = content.match(/react/gi).length;

console.log({ reactWordCount: reactWordCount }, "app3.js line 7");
