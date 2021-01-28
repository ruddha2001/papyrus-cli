import * as chalk from "chalk";

export const errorWriter = (message: string) => {
  return chalk.red("Error: ") + message;
};

export const infoWriter = (message: string) => {
  return chalk.yellow("Info: ") + message;
};

export const successWriter = (message: string) => {
  return chalk.green("Success: ") + message;
};
