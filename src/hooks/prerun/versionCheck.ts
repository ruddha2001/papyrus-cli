import { Hook } from "@oclif/config";
import * as chalk from "chalk";

const hook: Hook<"prerun"> = async function (opts) {
  // TO DO: fetch latest version from the server
  const latestVersion = "0.0.0-alpha.0";
  if (opts.config.version !== latestVersion)
    process.stdout.write(
      `You are running Papyrus CLI version ` +
        chalk.yellow(`${opts.config.version}`) +
        `\nThe latest version is ` +
        chalk.green(`${latestVersion}`) +
        `\n` +
        chalk.blue(
          `Please download the latest version of Papyrus CLI from https://papyrus.aniruddha.net`
        ) +
        `\n\n`
    );
};

export default hook;
