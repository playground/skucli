#! /usr/bin/env node
import cp from 'child_process';

const exec = cp.exec;

const postInstall = async () => {
  let arg = 'curl https://skupper.io/install.sh | sh'
  exec(arg, (err, stdout, stderr) => {
    if(!err) {
      console.log('done installing Skupper')
    } else {
      console.log(`Error: ${err}`);
    }
  });

}

postInstall()