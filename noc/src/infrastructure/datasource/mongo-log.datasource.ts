import { LogModel } from "../../data";
import { LogDataSource } from "../../domain/datasources/log.datasources";
import {
  LogEntity,
  LogSeverityLevel,
} from "../../domain/entities/log.entities";

export class MongoLogDataSource implements LogDataSource {
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await LogModel.create(log);
    console.log("New log saved: ", newLog.id);
  }

  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({ level: severityLevel });

    return logs.map(LogEntity.fromObject);
  }
}
