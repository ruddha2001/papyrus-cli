import Command from "@oclif/command";
import inquirer = require("inquirer");
import { title } from "process";
import { uploadHandler } from "../handlers/fileHandler";
import { errorWriter, successWriter } from "../utilities/customLogger";

export default class File extends Command {
  static description = "transfer a file";

  static examples = [
    `$ papyrus file upload pathToFile.extension
Upload Operation
`,
    `$ papyrus file download fileKey
Download Operation
`,
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
        "The fully qualified file path of the file to be uploaded or the key of the file to be downloaded.",
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
              message:
                "What will the title for this file? (This will also be your key to download the file)",
            },
          ])
          .then(async (answers) => {
            await uploadHandler(answers.title, args.file);
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
        this.log("Download Operation");
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
