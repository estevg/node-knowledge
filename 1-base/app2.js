// FileSystem
const fs = require("fs");
const data = fs.readFileSync("README.md", "utf8");

// Replace data
const newData = data.replace(/React/gi, "Esteban");

// Create new File
fs.writeFileSync("Readme-esteban.md", newData);
