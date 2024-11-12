interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

class ServerApp {
  static run(options: RunOptions) {
    console.log("Hola");
  }
}
