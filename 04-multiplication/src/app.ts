import { yarg } from "./config/plugins/yargs.plugin";

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: showTable } = yarg;
  ServerApp.run({ base, limit, showTable });
}
