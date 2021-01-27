import * as chalk from "chalk";

export const errorWriter = (message: string) => {
  return chalk.red("Error: ") + message;
};

export const infoWriter = (message: string) => {
  return chalk.yellow("Error: ") + message;
};

export const successWriter = (message: string) => {
  return chalk.green("Error: ") + message;
};
