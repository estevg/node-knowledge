import nodemailer from "nodemailer";
import { LogRepository } from "../../domain/repository/log.repository";
import {
  LogEntity,
  LogSeverityLevel,
} from "../../domain/entities/log.entities";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: process.env.MAILER_SERVICE,
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_SECRET_EMAIL,
    },
  });

  constructor() {}

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    try {
      const sendInformation = await this.transporter.sendMail({
        from: process.env.MAILER_EMAIL,
        to: options.to,
        subject: options.subject,
        html: options.htmlBody,
        attachments: options.attachments ?? [],
      });

      const log = new LogEntity({
        message: `Email sent to ${options.to}`,
        level: LogSeverityLevel.low,
        origin: "email.service.ts",
      });

      return true;
    } catch (error) {
      const log = new LogEntity({
        message: `Error sending email to ${options.to}`,
        level: LogSeverityLevel.high,
        origin: "email.service.ts",
      });

      console.error("Error sending email: ", error);
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = "Logs del Servidor";
    const htmlBody =
      "<h1>Logs del Servidor</h1> <p>Logs del Servidor</p> <p>Logs del Servidor</p>";
    const attachments: Attachment[] = [
      {
        filename: "logs-all.log",
        path: "./logs/logs-all.log",
      },
      {
        filename: "logs-high.log",
        path: "./logs/logs-high.log",
      },
      {
        filename: "logs-medium.log",
        path: "./logs/logs-medium.log",
      },
    ];

    return this.sendEmail({ to, subject, htmlBody, attachments });
  }
}
