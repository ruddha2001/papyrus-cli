import { Hook } from "@oclif/config";
import axios from "axios";
import * as chalk from "chalk";
import { constants } from "../../constants";
import { errorWriter } from "../../utilities/customLogger";

const hook: Hook<"prerun"> = async function (opts) {
  // TO DO: fetch latest version from the server
  try {
    const { data } = await axios.get(constants.SERVER_URL + "/utility/version");
    const latestVersion = data.version;
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
  } catch (error) {
    this.error(error);
    this.log(errorWriter("Could not get latest CLI version from server"));
  }
};

export default hook;
