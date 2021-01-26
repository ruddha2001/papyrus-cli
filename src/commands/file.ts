import Command from "@oclif/command";
import { uploadHandler } from "../handlers/fileHandler";

export default class File extends Command {
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
        if (!args.file) {
          this.log(
            "You need to enter a valid fully qualified file path for upload to work."
          );
          break;
        }
        await uploadHandler(args.file);
        break;
      case "download":
        if (!args.file) {
          this.log("You need to enter a valid key of the file to download.");
          break;
        }
        this.log("Download Operation");
        break;
      default:
        this.log(
          "Unknown operation mentioned. Please use `papyrus file --help` to know the commands."
        );
    }
  }
}
