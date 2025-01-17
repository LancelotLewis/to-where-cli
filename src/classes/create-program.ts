import { Command } from "commander";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {version} = require("../../package.json");
import { simpleWorker } from ".";
import { addCommand } from "../cli/add";
import { cleanCommand } from "../cli/clean";
import { listCommand } from "../cli/list";
import { removeCommand } from "../cli/rm";
import { gitCommand } from "../cli/git";

export function createProgram() {
  // @see: https://www.npmjs.com/package/commander
  const program = new Command();

  program
    .name("tw")
    .version(version)
    .argument("[alias]", "Give your address an alias")
    .action(async (alias: string) => {
      if (alias) {
        await simpleWorker.open(alias);
        return process.exit(0);
      }

      program.help();
    });

  program.addCommand(addCommand);
  program.addCommand(removeCommand);
  program.addCommand(listCommand);
  program.addCommand(cleanCommand);
  program.addCommand(gitCommand);

  return program;
}
