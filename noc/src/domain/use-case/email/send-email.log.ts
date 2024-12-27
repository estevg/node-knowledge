import { EmailService } from "../../../presentation/email/email.services";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entities";
import { LogRepository } from "../../repository/log.repository";

interface SendEmailLogUseCase {
  execute: (to: string | string[]) => Promise<boolean>;
}

export class SendEmailLog implements SendEmailLogUseCase {
  constructor(
    private readonly emailService: EmailService,
    private readonly logger: LogRepository
  ) {}

  async execute(to: string | string[]): Promise<boolean> {
    try {
      const emailSent = await this.emailService.sendEmailWithFileSystemLogs(to);

      if (!emailSent) {
        throw new Error("Error sending email");
      }

      const log = new LogEntity({
        message: `Email sent`,
        level: LogSeverityLevel.low,
        origin: "send-email.logs.ts",
      });

      this.logger.saveLog(log);

      return emailSent;
    } catch (error) {
      const log = new LogEntity({
        message: `Email sent`,
        level: LogSeverityLevel.high,
        origin: "send-email.logs.ts",
      });

      this.logger.saveLog(log);

      return false;
    }
  }
}
