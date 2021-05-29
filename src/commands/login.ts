import Command, { flags } from "@oclif/command";
import cli from "cli-ux";
import inquirer = require("inquirer");
import { errorWriter, infoWriter } from "../utilities/customLogger";

export default class Login extends Command {
  static description = "Login to Papyrus";

  static args = [
    {
      name: "tempToken",
      required: false,
      description: "The temporary token generated after the browser login",
    },
  ];

  static flags = {
    interactive: flags.boolean({
      char: "i",
      default: false,
      description: "Open an iteractive login session in browser",
    }),
    tempToken: flags.boolean({
      char: "t",
      default: false,
      description: "Use a temporary token to login",
    }),
  };

  async run() {
    const { args, flags } = this.parse(Login);
    if (flags.interactive) {
      this.log(infoWriter("Opening Browser..."));
      await cli.open("https://aniruddha.net");
    } else if (flags.tempToken) {
      // TO DO: Use temporary token to login
      this.log(args.tempToken);
    } else {
      inquirer
        .prompt([
          {
            name: "email",
            type: "input",
            message: "Please enter your email: ",
          },
          {
            name: "password",
            type: "password",
            message: "Please enter your password: ",
          },
        ])
        .then((answers) => {
          //TO DO: Send login request to server
        })
        .catch((error) => {
          this.log(errorWriter(error.message));
        });
    }
  }
}
