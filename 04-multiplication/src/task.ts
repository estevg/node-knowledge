import fs from "fs";

const folderName = "output";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync("output");
} else {
  let text = `
============ ============ ============
            Tabla del 5
============ ============ ============\n
`;
  for (let index = 1; index < 11; index++) {
    text += `${5} x ${index} = ${5 * index} \n`;
  }

  fs.writeFileSync("output/tabla-5.txt", text);
}
