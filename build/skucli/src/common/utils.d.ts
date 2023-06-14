import { Observable } from 'rxjs';
export declare class Utils {
    globalPath: any;
    skucliPath: any;
    homePath: any;
    cwd: any;
    constructor();
    initialise(): void;
    setup(): Observable<unknown>;
    ibmLogin(): Observable<unknown>;
    ibmListCluster(): Observable<unknown>;
    ibmConfigCluster(cluster: string): Observable<unknown>;
    ibmSwitchRegion(region: string): Observable<unknown>;
    setKubeConfig(config: string): Observable<unknown>;
    createNamespace(namespace: string): Observable<unknown>;
    setCurrentNamespace(namespace: string): Observable<unknown>;
    installRouteInNamespace(): Observable<unknown>;
    createToken(namespace: string): Observable<unknown>;
    createLink(namespace: string): Observable<unknown>;
    replaceToken(template: any, obj: any): any;
    tokenReplace(template: any, obj: any): any;
    shell(arg: any, success?: string, error?: string, prnStdout?: boolean, options?: {
        maxBuffer: number;
    }): Observable<unknown>;
}
