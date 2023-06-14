"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const utils_1 = require("./utils");
class Main {
    constructor(cluster, namespace, config, region, project) {
        this.cluster = cluster;
        this.namespace = namespace;
        this.config = config;
        this.region = region || 'us-south';
        this.project = project || 'ieam';
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
}
exports.Main = Main;
//# sourceMappingURL=main.js.map