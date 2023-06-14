import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import { commands } from '../common/interface';
import { Main } from '../common/main';

import type { Arguments, CommandBuilder } from 'yargs';
type Options = {
  action: string;
};
export const command: string = 'run <action>';
export const desc: string = 'Run <action>';
let availableActions = 'Available actions:'

commands.sort().forEach((action) => {
  availableActions += ` ${action}`
}) 

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      cluster: {type: 'string', desc: 'Name of cluster'},
      namespace: {type: 'string', desc: 'Name of namespace'},
      config: {type: 'string', desc: 'Name of kubeconfig'},
      region: {type: 'string', desc: 'Region to deploy to'},
      project: {type: 'string', desc: 'Project name'}
    })
    .positional('action', {
      type: 'string', 
      demandOption: true,
      desc: availableActions
    });

export const handler = (argv: Arguments<Options>): void => {
  clear();
  console.log(
    chalk.greenBright(
      figlet.textSync('skucli', { horizontalLayout: 'full' })
    )
  );
  const { action, cluster, namespace, config, region, project } = argv;
  const skucli = new Main(cluster, namespace, config, region, project);
  skucli.inititialise();
  console.log('action: ', action)
  if(skucli[action]) {
    skucli[action]()
    .subscribe({
      next: (msg: string) => {
        if(msg) {
          console.log(msg)
        }  
      },
      complete: () => {
        console.log('process completed.');
        process.exit(0)          
      }
    })      
  } else {
    console.log(`${action} doesn't exist.  skucli run -h for help`)
  }
}