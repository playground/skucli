import { exec } from 'child_process';
import os from 'os';
import { resolve } from 'path';
import { Observable } from 'rxjs';

const installTar = {
  "x86_64": "horizon-agent-linux-deb-amd64.tar.gz",
  "x64": "horizon-agent-linux-deb-amd64.tar.gz",
  "darwin": "horizon-agent-macos-pkg-x86_64.tar.gz",
  "arrch64": "horizon-agent-linux-deb-arm64.tar.gz",
  "arm64": "horizon-agent-linux-deb-arm64.tar.gz",
  "armv7l": "horizon-agent-linux-deb-armhf.tar.gz",
  "arm": "horizon-agent-linux-deb-armhf.tar.gz"
}
const cr = {
  'ap-north':   {public: 'jp.icr.io', private: 'private.jp.icr.io'},
  'ap-south':   {public: 'au.icr.io', private: 'private.au.icr.io'},
  'br-sao':     {public: 'br.icr.io', private: 'private.br.icr.io'},
  'ca-tor':     {public: 'ca.icr.io', private: 'private.ca.icr.io'},
  'eu-central': {public: 'de.icr.io', private: 'private.de.icr.io'},
  'jp-osa':     {public: 'jp2.icr.io', private: 'private.jp2.icr.io'},
  'uk-south':   {public: 'uk.icr.io', private: 'private.uk.icr.io'},
  'us-south':   {public: 'us.icr.io', private: 'private.us.icr.io'},
  'global':     {public: 'icr.io', private: 'private.icr.io'}
}
const arch = {
  amd64: 'linux/amd64',
  arm64: 'linux/arm64'
}

export class Utils {
  globalPath;
  skucliPath;
  homePath;
  cwd;
  constructor() {  
    this.initialise();  
  }

  initialise() {
    this.cwd = process.cwd();
    this.homePath = os.homedir();
    this.globalPath = resolve(process.execPath, '../../lib/node_modules')
    this.skucliPath = `${this.globalPath}/skucli`;
  }
  status() {
    return new Observable((observer) => {
      let arg = `skupper status`
      this.shell(arg,`done checking status`, `failed to check status`)
      .subscribe(() => {
        observer.next();
        observer.complete();
      })
    })
  }
  setup() {
    return new Observable((observer) => {
      //console.log(this.cwd, this.homePath, this.globalPath)
      console.log('Step 1:')
      console.log('Skupper is designed for use with multiple namespaces, typically on different clusters. The skupper command uses your kubeconfig and current context to select the namespace where it operates.')
      console.log('A single kubeconfig supports only one active context per user.  We will be creating two contexts in this exercise.')
      console.log('In a separate console, run this command in each console to start a console session\n')
      console.log('In console #1 (west), run "export KUBECONFIG=$HOME/.kube/config-west"')
      console.log('In console #2 (east), run "export KUBECONFIG=$HOME/.kube/config-east"\n')
      console.log('Step 2:')
      console.log('Configure cluster access')
      console.log('In this exercise, we will be using IBM Kubernetes Service.  For other providers, please refer to https://skupper.io/start/index.html')
      console.log('If you have not already set up your IBM Cloud account & environment, please go here https://skupper.io/start/ibmks.html#cluster-access\n')
      console.log('If you have not logged into your IBM account, you can run "skucli run ibmLogin')
      console.log('To use kubectl with a cluster, you must configure your local kubeconfig.')
      console.log('Run "skucli run ibmListCluster to list the available clusters.  With IBM free account, you should see mycluster-free')
      console.log('Run "skucli run ibmConfigCluster --cluster mycluster-free" to configure the specified cluster\n')
      console.log('Step 3:')
      console.log('Create namespaces')
      console.log('Run the following commands to create and configure namespace for each session')
      console.log('In console #1')
      console.log('run "skucli run createNamespace --namespace west"')
      console.log('run "skucli run setCurrentNamespace --namespace west"\n')
      console.log('In console #2')
      console.log('run "skucli run createNamespace --namespace east"')
      console.log('run "skucli run setCurrentNamespace --namespace east"\n')
      console.log('Step 4:')
      console.log('Install Skupper router in each namespace')
      console.log('If you have a free tier account(which does not support load balancer), use initWithoutIngress, otherwise use installRouteInNamespace')
      console.log('In console #1')
      console.log('run "skucli run initWithoutIngress"')
      console.log('run "skucli run status"\n')
      console.log('In console #2')
      console.log('run "skucli run initWithoutIngress"')
      console.log('run "skucli run status"\n')
      console.log('Step 5:')
      console.log('Link namespaces')
      console.log('In console #1')
      console.log('run "skucli run createToken --namespace west"')
      console.log('In console #2')
      console.log('run "skucli run createLink --namespace west"\n')
      console.log('Step 6:')
      console.log('Deploy frontend and backend services')
      console.log('In console #1')
      console.log('run "skucli run deployService --name frontend --image quay.io/skupper/hello-world-frontend"')
      console.log('In console #2')
      console.log('run "skucli run deployService --name backend --image quay.io/skupper/hello-world-backend --replica 3"')
      console.log('Expose backend service from East and make it available in West')
      console.log('run "skucli run exposeService --name backend --port 8080"')
      console.log('In console #1 (west), to see if the service backend from the East is available in the West')
      console.log('run "skucli run showService --name backend"')


      observer.next()
      observer.complete()
    })  
  }
  initWithoutIngress() {
    return new Observable((observer) => {
      let arg = `skupper init --ingress none --enable-console --enable-flow-collector`
      this.shell(arg,`done init with no Ingress`, `failed to init with no Ingress`)
      .subscribe(() => {
        observer.next();
        observer.complete();
      })
    })
  }
  deployFrontend(image: string) {
    return new Observable((observer) => {
      if(!image || image.length == 0) {
        observer.next('Please provide docker --image name')
        observer.complete()
      } else {
        let arg = `kubectl create deployment frontend --image ${image}`
        this.shell(arg,`done deploying ${image}`, `failed to deploy ${image}`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  deployBackend(image: string, replicas = 3) {
    return new Observable((observer) => {
      if(!image || image.length == 0) {
        observer.next('Please provide docker --image name')
        observer.complete()
      } else {
        let arg = `kubectl create deployment backend --image ${image} --replicas ${replicas}`
        this.shell(arg,`done deploying ${image}`, `failed to deploy ${image}`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  deployService(name: string, image: string, replica = 0) {
    return new Observable((observer) => {
      if(!image || image.length == 0 || !name || name.length == 0) {
        observer.next('Please provide docker --image and --name')
        observer.complete()
      } else {
        const replicas = replica > 0 ? `--replacas ${replica}` : ''
        let arg = `kubectl create deployment ${name} --image ${image} ${replicas}`
        this.shell(arg,`done deploying ${image}`, `failed to deploy ${image}`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  exposeService(service: string, port: string, type: string) {
    return new Observable((observer) => {
      if(!service || service.length == 0 || !port || port.length == 0) {
        observer.next('Please provide service --name and --port')
        observer.complete()
      } else {
        let arg = `skupper expose deployment/${service} --port ${port} --type ${type}`
        this.shell(arg,`done exposing ${service} at port ${port}`, `failed to expose ${service}`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  showService(service: string) {
    return new Observable((observer) => {
      if(!service || service.length == 0) {
        observer.next('Please provide service --name')
        observer.complete()
      } else {
        let arg = `kubectl get service/${service}`
        this.shell(arg,`done getting ${service} service`, `failed to get ${service} service`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  deleteService(service: string) {
    return new Observable((observer) => {
      if(!service || service.length == 0) {
        observer.next('Please provide service --name')
        observer.complete()
      } else {
        let arg = `kubectl delete service/${service}`
        this.shell(arg,`done deleting ${service} service`, `failed to delete ${service} service`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })    
  }
  retrievePassword() {
    return new Observable((observer) => {
      let arg = `kubectl get secret skupper-console-users -o jsonpath={.data.admin} | base64 -d`
      this.shell(arg,`done retrieving password`, `failed to retrieve password`)
      .subscribe(() => {
        observer.next();
        observer.complete();
      })
    })
  }
  ibmLogin() {
    return new Observable((observer) => {
      process.chdir(this.skucliPath);
      let arg = `npm run ibm-login </dev/tty`
      this.shell(arg,`done login`, `failed to login`)
      .subscribe(() => {
        observer.next();
        observer.complete();
      })
    })
  }
  ibmListCluster() {
    return new Observable((observer) => {
      let arg = `ibmcloud ks cluster ls`
      this.shell(arg,`done listing cluster`, `failed to list cluster`)
      .subscribe(() => {
        observer.next();
        observer.complete();
      })
    })
  }
  ibmConfigCluster(cluster: string) {
    return new Observable((observer) => {
      if(!cluster || cluster.length == 0) {
        observer.next('Please provide cluster name')
        observer.complete()
      } else {
        let arg = `ibmcloud ks cluster config --cluster ${cluster}`
        this.shell(arg,`done config ${cluster} cluster`, `failed to config ${cluster} cluster`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  ibmSwitchRegion(region: string) {
    return new Observable((observer) => {
      if(region && cr[region]) {
        let arg = `ibmcloud cr region-set ${region} && ibmcloud cr login`
        this.shell(arg,`done switching to ${region}`, `failed to switch to ${region}`, false)
        .subscribe({
          complete: () => observer.complete(),
          error: (err) => {
            process.exit(0)
          }
        })
      } else {
        console.log('Please specify a valid region.')
        process.exit(0);
      }
    })    
  }
  setKubeConfig(config: string) {
    return new Observable((observer) => {
      if(!config || config.length == 0) {
        observer.next('Please provide kubeconfig name')
        observer.complete()
      } else {
        let arg = `export KUBECONFIG=$HOME/.kube/${config}`
        this.shell(arg,`done config ${config} environment`, `failed to config ${config} environment`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  createNamespace(namespace: string) {
    return new Observable((observer) => {
      if(!namespace || namespace.length == 0) {
        observer.next('Please provide kube namespace name')
        observer.complete()
      } else {
        let arg = `kubectl create namespace ${namespace}`
        this.shell(arg,`done creating ${namespace} namespace`, `failed to create ${namespace} namespace`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  setCurrentNamespace(namespace: string) {
    return new Observable((observer) => {
      if(!namespace || namespace.length == 0) {
        observer.next('Please provide kube namespace name')
        observer.complete()
      } else {
        let arg = `kubectl config set-context --current --namespace ${namespace}`
        this.shell(arg,`done setting ${namespace} namespace`, `failed to set ${namespace} namespace`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  installRouteInNamespace() {
    return new Observable((observer) => {
      let arg = `skupper init --enable-console --enable-flow-collector`
      this.shell(arg,`done initing route for namespace`, `failed to init route for namespace`)
      .subscribe(() => {
        observer.next();
        observer.complete();
      })  
    })
  }
  createToken(namespace: string) {
    return new Observable((observer) => {
      if(!namespace || namespace.length == 0) {
        observer.next('Please provide kube namespace name')
        observer.complete()
      } else {
        let arg = `skupper token create ~/${namespace}.token`
        this.shell(arg,`done creating ${namespace} token`, `failed to create ${namespace} token`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  createLink(namespace: string) {
    return new Observable((observer) => {
      if(!namespace || namespace.length == 0) {
        observer.next('Please provide kube namespace name')
        observer.complete()
      } else {
        let arg = `skupper link create ~/${namespace}.token`
        this.shell(arg,`done linking ${namespace} token`, `failed to link ${namespace} token`)
        .subscribe(() => {
          observer.next();
          observer.complete();
        })  
      }
    })
  }
  replaceToken(template, obj) {
    Object.keys(obj).forEach((key) => {
      let regex = new RegExp(`\\\${${key}}`, 'g');
      template = template.replace(regex, obj[key]); 
    })
    return template;
  }
  tokenReplace(template, obj) {
    //  template = 'Where is ${movie} playing?',
    //  tokenReplace(template, {movie: movie});
    console.log(obj)
    return template.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, (match, key) => {
      console.log('match: ', key, obj[key])
      return obj[key];
    });
  }
  shell(arg, success='command executed successfully', error='command failed', prnStdout=true, options={maxBuffer: 1024 * 2000}) {
    return new Observable((observer) => {
      console.log(arg);
      let child = exec(arg, options, (err, stdout, stderr) => {
        if(!err) {
          // console.log(stdout);
          console.log(success);
          observer.next(prnStdout ? stdout : '');
          observer.complete();
        } else {
          console.log(`${error}: ${err}`);
          observer.error(err);
        }
      });
      child.stdout.pipe(process.stdout);
      child.on('data', (data) => {
        console.log('data: ', data)
      })  
    });  
  }
}