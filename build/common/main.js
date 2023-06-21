"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const utils_1 = require("./utils");
class Main {
    constructor(cluster, namespace, config, region, project, image, name, port, replica, type) {
        this.cluster = cluster;
        this.namespace = namespace;
        this.config = config;
        this.region = region || 'us-south';
        this.project = project || 'ieam';
        this.image = image;
        this.name = name;
        this.port = port;
        this.replica = replica || 0;
        this.type = type || 'ClusterIP';
        this.inititialise();
    }
    inititialise() {
        this.utils = new utils_1.Utils();
    }
    ibmSwitchRegion() {
        return this.utils.ibmSwitchRegion(this.region);
    }
    ibmLogin() {
        return this.utils.ibmLogin();
    }
    ibmListCluster() {
        return this.utils.ibmListCluster();
    }
    ibmConfigCluster() {
        return this.utils.ibmConfigCluster(this.cluster);
    }
    setKubeConfig() {
        return this.utils.setKubeConfig(this.config);
    }
    createNamespace() {
        return this.utils.createNamespace(this.namespace);
    }
    setCurrentNamespace() {
        return this.utils.setCurrentNamespace(this.namespace);
    }
    installRouteInNamespace() {
        return this.utils.installRouteInNamespace();
    }
    createLink() {
        return this.utils.createLink(this.namespace);
    }
    createToken() {
        return this.utils.createToken(this.namespace);
    }
    setup() {
        return this.utils.setup();
    }
    status() {
        return this.utils.status();
    }
    initWithoutIngress() {
        return this.utils.initWithoutIngress();
    }
    retrievePassword() {
        return this.utils.retrievePassword();
    }
    deployFrontend() {
        return this.utils.deployFrontend(this.image);
    }
    deployBackend() {
        return this.utils.deployBackend(this.image);
    }
    deployService() {
        return this.utils.deployService(this.name, this.image, this.replica);
    }
    exposeService() {
        return this.utils.exposeService(this.name, this.port, this.type);
    }
    showService() {
        return this.utils.showService(this.name);
    }
    deleteService() {
        return this.utils.deleteService(this.name);
    }
}
exports.Main = Main;
//# sourceMappingURL=main.js.map