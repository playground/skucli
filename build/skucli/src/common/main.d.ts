import { Utils } from './utils';
export declare class Main {
    cluster: any;
    namespace: any;
    config: any;
    region: any;
    project: any;
    utils: Utils;
    constructor(cluster: any, namespace: any, config: any, region: any, project: any);
    inititialise(): void;
    ibmSwitchRegion(): import("rxjs").Observable<unknown>;
    ibmLogin(): import("rxjs").Observable<unknown>;
    ibmListCluster(): import("rxjs").Observable<unknown>;
    ibmConfigCluster(): import("rxjs").Observable<unknown>;
    setKubeConfig(): import("rxjs").Observable<unknown>;
    createNamespace(): import("rxjs").Observable<unknown>;
    setCurrentNamespace(): import("rxjs").Observable<unknown>;
    installRouteInNamespace(): import("rxjs").Observable<unknown>;
    createLink(): import("rxjs").Observable<unknown>;
    createToken(): import("rxjs").Observable<unknown>;
    setup(): import("rxjs").Observable<unknown>;
}
