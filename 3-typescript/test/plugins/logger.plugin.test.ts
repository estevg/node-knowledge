import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/plugins/logger.plugin";

describe("plugins/buildLogger", () => {
  test("buildLogger should return a function logger", () => {
    const wistonLogger = buildLogger("test");

    expect(typeof wistonLogger.log).toBe("function");
    expect(typeof wistonLogger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message: "test message",
        service: "test service",
      })
    );
  });

  test("logger.error should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "error");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        message: "test message",
        service: "test service",
      })
    );
  });
});
