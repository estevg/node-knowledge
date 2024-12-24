import { CheckService } from "../domain/use-case/check/check-service";
import { FileSystemDataSource } from "../infrastructure/datasource/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronServices } from "./cron.services";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
);

export class Server {
  public static start() {
    console.log("Server Started......");
    CronServices.createJob("*/5 * * * * *", () => {
      new CheckService(
        fileSystemLogRepository,
        () => console.log("sucesss"),
        (error) => console.log(error)
      ).execute("https://localhost:3000/");
    });
  }
}
