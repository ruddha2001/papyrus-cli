import Command from "@oclif/command";
import inquirer = require("inquirer");
import { downloadHandler, uploadHandler } from "../handlers/fileHandler";
import { errorWriter, successWriter } from "../utilities/customLogger";

export default class File extends Command {
  static description = "transfer a file";

  static examples = [
    `$ papyrus file upload pathToFile.extension`,
    `$ papyrus file download title`,
  ];
  static args = [
    {
      name: "operation",
      required: true,
      description:
        "Upload or download operation. Enter either 'upload' or 'download'.",
    },
    {
      name: "file",
      required: true,
      description:
        "The path of the file to be uploaded or the title of the file to be downloaded.",
    },
  ];
  async run() {
    const { args } = this.parse(File);
    switch (args.operation) {
      case "upload":
        inquirer
          .prompt([
            {
              name: "title",
              type: "input",
              message: "What will the title for this file?",
            },
          ])
          .then(async (answers) => {
            await uploadHandler(answers.title, process.cwd(), args.file);
            this.log(
              successWriter(
                `Your have has been upload with the title/key: ${answers.title}`
              )
            );
          })
          .catch((error) => {
            this.log(errorWriter(error.message));
          });
        break;
      case "download":
        this.log(await downloadHandler(args.file));
        break;
      default:
        this.log(
          errorWriter(
            "Unknown operation mentioned. Please use `papyrus file --help` to get a list of valid commands."
          )
        );
    }
  }
}
