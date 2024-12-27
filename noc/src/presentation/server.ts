import { envs } from "../config/plugins/env.plugin";
import { CheckService } from "../domain/use-case/check/check-service";
import { SendEmailLog } from "../domain/use-case/email/send-email.log";
import { FileSystemDataSource } from "../infrastructure/datasource/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronServices } from "./cron/cron.services";
import { EmailService } from "./email/email.services";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server Started......", envs.MAILER_SECRET_EMAIL);

    // new SendEmailLog(emailService, fileSystemLogRepository).execute([
    //   "",
    // ]);

    CronServices.createJob("*/5 * * * * *", () => {
      new CheckService(
        fileSystemLogRepository,
        () => console.log("sucesss"),
        (error) => console.log(error)
      ).execute("https://localhost:3000/");
    });
  }
}
