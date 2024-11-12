import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const folderName = "output";

const base = yarg.b;
const limit = yarg.l;
const show = yarg.s;

if (!fs.existsSync(folderName)) {
  fs.mkdirSync("output");
} else {
  let text = `
============ ============ ============
            Tabla del ${base}
============ ============ ============\n
`;
  for (let index = 1; index < limit + 1; index++) {
    text += `${base} x ${index} = ${base * index} \n`;
  }

  fs.writeFileSync("output/tabla-5.txt", text);
  show && console.log(text);
  console.log("File Created!!");
}
