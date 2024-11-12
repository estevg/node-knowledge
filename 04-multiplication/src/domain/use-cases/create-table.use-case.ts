export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor /* ------------------------------------ */ /* DI - Dependency Injection */ /* ------------------------------------ */() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";
    for (let index = 1; index < limit + 1; index++) {
      outputMessage += `${base} x ${index} = ${base * index} \n`;
    }
    return outputMessage;
  }
}
