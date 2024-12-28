import { envs } from "../config/plugins/env.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entities";
import { CheckService } from "../domain/use-case/check/check-service";
import { SendEmailLog } from "../domain/use-case/email/send-email.log";
import { FileSystemDataSource } from "../infrastructure/datasource/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasource/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronServices } from "./cron/cron.services";
import { EmailService } from "./email/email.services";

const logRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
  // new MongoLogDataSource()
);

const emailService = new EmailService();

export class Server {
  public static async start() {
    console.log("Server Started......", envs.MAILER_SECRET_EMAIL);

    // new SendEmailLog(emailService, logRepository).execute([
    //   "",
    // ]);

    CronServices.createJob("*/5 * * * * *", () => {
      new CheckService(
        logRepository,
        () => console.log("sucesss"),
        (error) => console.log(error)
      ).execute("https://google.com/");
    });
  }
}
