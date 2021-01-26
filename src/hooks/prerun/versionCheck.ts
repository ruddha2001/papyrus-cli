import { Hook } from "@oclif/config";

const hook: Hook<"prerun"> = async function (opts) {
  const latestVersion = "0.0.0-alpha.1";
  if (opts.config.version !== latestVersion)
    process.stdout.write(
      `You are running Papyrus CLI version ${opts.config.version}\nThe latest version is ${latestVersion}\n\n`
    );
};

export default hook;
