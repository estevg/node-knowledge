import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

export class ServerApp {
  static run({ base, limit, showTable }: RunOptions) {
    console.log("Server running....");
    const table = new CreateTable().execute({ base, limit });

    const wasTable = new SaveFile().execute({
      fileContent: table,
      fileDestination: `outputs/table-${base}`,
    });

    showTable && console.log(table);
    wasTable
      ? console.log("File created!!")
      : console.log("File not created!!");
  }
}
