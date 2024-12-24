export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

interface LogEntityOptions {
  level: LogSeverityLevel;
  message: string;
  createdAt?: Date;
  origin: string;
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { createdAt = new Date(), level, message, origin } = options;
    this.createdAt = createdAt;
    this.level = level;
    this.message = message;
    this.origin = origin;
  }

  static fromJson = (json: string): LogEntity => {
    const { message, level, createdAt, origin } = JSON.parse(json);
    const log = new LogEntity({
      level,
      origin,
      message,
      createdAt,
    });
    log.createdAt = new Date(createdAt);
    return log;
  };
}
