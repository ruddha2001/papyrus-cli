import cli from "cli-ux";

export const handleBrowserLogin = async () => {
  cli.action.start("Openning browser");
  await cli.open("https://www.aniruddha.net");
  cli.action.stop();
  cli.action.start("Waiting for response from server");
  await cli.wait(5000);
  cli.action.stop();
};
