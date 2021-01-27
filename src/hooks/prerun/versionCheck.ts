import { Hook } from "@oclif/config";
import chalk = require("chalk");

const hook: Hook<"prerun"> = async function (opts) {
  const latestVersion = "0.0.0-alpha.1";
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
