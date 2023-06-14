import { Utils } from './utils';

export class Main {
  cluster;
  namespace;
  config;
  region;
  project;
  utils: Utils;
  constructor(
    cluster,
    namespace,
    config,
    region,
    project
  ) {
    this.cluster = cluster;
    this.namespace = namespace;
    this.config = config;
    this.region = region || 'us-south';
    this.project = project || 'ieam';
    this.inititialise();
  }

  inititialise() {
    this.utils = new Utils();
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