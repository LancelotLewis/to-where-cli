import { Command } from "commander";
import { logger } from "../utils/logger";

const addCommand = new Command();

addCommand.name('add')
  .description('Adds the current working directory to your warp points')
  .argument('<point>', 'TODO')
  .action((str, options) => {
      logger.log({ str, options });
  });

export {
  addCommand
}
