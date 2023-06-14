"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const child_process_1 = require("child_process");
const os_1 = __importDefault(require("os"));
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const installTar = {
    "x86_64": "horizon-agent-linux-deb-amd64.tar.gz",
    "x64": "horizon-agent-linux-deb-amd64.tar.gz",
    "darwin": "horizon-agent-macos-pkg-x86_64.tar.gz",
    "arrch64": "horizon-agent-linux-deb-arm64.tar.gz",
    "arm64": "horizon-agent-linux-deb-arm64.tar.gz",
    "armv7l": "horizon-agent-linux-deb-armhf.tar.gz",
    "arm": "horizon-agent-linux-deb-armhf.tar.gz"
};
const cr = {
    'ap-north': { public: 'jp.icr.io', private: 'private.jp.icr.io' },
    'ap-south': { public: 'au.icr.io', private: 'private.au.icr.io' },
    'br-sao': { public: 'br.icr.io', private: 'private.br.icr.io' },
    'ca-tor': { public: 'ca.icr.io', private: 'private.ca.icr.io' },
    'eu-central': { public: 'de.icr.io', private: 'private.de.icr.io' },
    'jp-osa': { public: 'jp2.icr.io', private: 'private.jp2.icr.io' },
    'uk-south': { public: 'uk.icr.io', private: 'private.uk.icr.io' },
    'us-south': { public: 'us.icr.io', private: 'private.us.icr.io' },
    'global': { public: 'icr.io', private: 'private.icr.io' }
};
const arch = {
    amd64: 'linux/amd64',
    arm64: 'linux/arm64'
};
class Utils {
    constructor() {
        this.initialise();
    }
    initialise() {
        this.cwd = process.cwd();
        this.homePath = os_1.default.homedir();
        this.globalPath = (0, path_1.resolve)(process.execPath, '../../lib/node_modules');
        this.skucliPath = `${this.globalPath}/skucli`;
    }
    setup() {
        return new rxjs_1.Observable((observer) => {
            console.log(this.cwd, this.homePath, this.globalPath);
            observer.next();
            observer.complete();
        });
    }
    ibmLogin() {
        return new rxjs_1.Observable((observer) => {
            process.chdir(this.skucliPath);
            let arg = `npm run ibm-login </dev/tty`;
            this.shell(arg, `done login`, `failed to login`)
                .subscribe(() => {
                observer.next();
                observer.complete();
            });
        });
    }
    ibmListCluster() {
        return new rxjs_1.Observable((observer) => {
            let arg = `ibmcloud ks cluster ls`;
            this.shell(arg, `done listing cluster`, `failed to list cluster`)
                .subscribe(() => {
                observer.next();
                observer.complete();
            });
        });
    }
    ibmConfigCluster(cluster) {
        return new rxjs_1.Observable((observer) => {
            if (!cluster || cluster.length == 0) {
                observer.next('Please provide cluster name');
                observer.complete();
            }
            else {
                let arg = `ibmcloud ks cluster config --cluster ${cluster}`;
                this.shell(arg, `done config ${cluster} cluster`, `failed to config ${cluster} cluster`)
                    .subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            }
        });
    }
    ibmSwitchRegion(region) {
        return new rxjs_1.Observable((observer) => {
            if (region && cr[region]) {
                let arg = `ibmcloud cr region-set ${region} && ibmcloud cr login`;
                this.shell(arg, `done switching to ${region}`, `failed to switch to ${region}`, false)
                    .subscribe({
                    complete: () => observer.complete(),
                    error: (err) => {
                        process.exit(0);
                    }
                });
            }
            else {
                console.log('Please specify a valid region.');
                process.exit(0);
            }
        });
    }
    setKubeConfig(config) {
        return new rxjs_1.Observable((observer) => {
            if (!config || config.length == 0) {
                observer.next('Please provide kubeconfig name');
                observer.complete();
            }
            else {
                let arg = `export KUBECONFIG=$HOME/.kube/${config}`;
                this.shell(arg, `done config ${config} environment`, `failed to config ${config} environment`)
                    .subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            }
        });
    }
    createNamespace(namespace) {
        return new rxjs_1.Observable((observer) => {
            if (!namespace || namespace.length == 0) {
                observer.next('Please provide kube namespace name');
                observer.complete();
            }
            else {
                let arg = `kubectl create namespace ${namespace}`;
                this.shell(arg, `done creating ${namespace} namespace`, `failed to create ${namespace} namespace`)
                    .subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            }
        });
    }
    setCurrentNamespace(namespace) {
        return new rxjs_1.Observable((observer) => {
            if (!namespace || namespace.length == 0) {
                observer.next('Please provide kube namespace name');
                observer.complete();
            }
            else {
                let arg = `kubectl config set-context --current --namespace ${namespace}`;
                this.shell(arg, `done setting ${namespace} namespace`, `failed to set ${namespace} namespace`)
                    .subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            }
        });
    }
    installRouteInNamespace() {
        return new rxjs_1.Observable((observer) => {
            let arg = `skupper init --enable-console --enable-flow-collector`;
            this.shell(arg, `done initing route for namespace`, `failed to init route for namespace`)
                .subscribe(() => {
                observer.next();
                observer.complete();
            });
        });
    }
    createToken(namespace) {
        return new rxjs_1.Observable((observer) => {
            if (!namespace || namespace.length == 0) {
                observer.next('Please provide kube namespace name');
                observer.complete();
            }
            else {
                let arg = `skupper token create ~/${namespace}.token`;
                this.shell(arg, `done creating ${namespace} token`, `failed to create ${namespace} token`)
                    .subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            }
        });
    }
    createLink(namespace) {
        return new rxjs_1.Observable((observer) => {
            if (!namespace || namespace.length == 0) {
                observer.next('Please provide kube namespace name');
                observer.complete();
            }
            else {
                let arg = `skupper link create ~/${namespace}.token`;
                this.shell(arg, `done linking ${namespace} token`, `failed to link ${namespace} token`)
                    .subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            }
        });
    }
    replaceToken(template, obj) {
        Object.keys(obj).forEach((key) => {
            let regex = new RegExp(`\\\${${key}}`, 'g');
            template = template.replace(regex, obj[key]);
        });
        return template;
    }
    tokenReplace(template, obj) {
        //  template = 'Where is ${movie} playing?',
        //  tokenReplace(template, {movie: movie});
        console.log(obj);
        return template.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, (match, key) => {
            console.log('match: ', key, obj[key]);
            return obj[key];
        });
    }
    shell(arg, success = 'command executed successfully', error = 'command failed', prnStdout = true, options = { maxBuffer: 1024 * 2000 }) {
        return new rxjs_1.Observable((observer) => {
            console.log(arg);
            let child = (0, child_process_1.exec)(arg, options, (err, stdout, stderr) => {
                if (!err) {
                    // console.log(stdout);
                    console.log(success);
                    observer.next(prnStdout ? stdout : '');
                    observer.complete();
                }
                else {
                    console.log(`${error}: ${err}`);
                    observer.error(err);
                }
            });
            child.stdout.pipe(process.stdout);
            child.on('data', (data) => {
                console.log('data: ', data);
            });
        });
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map