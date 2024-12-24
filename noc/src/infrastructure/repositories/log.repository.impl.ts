import {
  LogEntity,
  LogSeverityLevel,
} from "../../domain/entities/log.entities";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogDataSource } from "../../domain/datasources/log.datasources";

export class LogRepositoryImpl implements LogRepository {
  constructor(private readonly logDataSource: LogDataSource) {}

  async saveLog(log: LogEntity): Promise<void> {
    return this.logDataSource.saveLog(log);
  }

  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDataSource.getLogs(severityLevel);
  }
}
