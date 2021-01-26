import Command from "@oclif/command";

export default class File extends Command {
  static args = [
    {
      name: "operation",
      required: true,
      description:
        "Upload or download operation. Enter either 'upload' or 'download'.",
    },
    {
      name: "filePath",
      required: false,
      description: "The file path of the file to be uploaded.",
    },
  ];
  async run() {
    const { args } = this.parse(File);
    switch (args.operation) {
      case "upload":
        if (!args.filePath) {
          this.log("You need to enter a valid file path for upload to work.");
          break;
        }
        this.log(`Upload operation on ${args.filePath}`);
        break;
      case "download":
        this.log("Download Operation");
        break;
      default:
        this.log(
          "Unknown operation mentioned. Please use `papyrus file --help` to know the commands."
        );
    }
  }
}
