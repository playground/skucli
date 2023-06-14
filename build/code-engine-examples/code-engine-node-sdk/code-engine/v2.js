"use strict";
/**
 * (C) Copyright IBM Corp. 2023.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
/**
 * IBM OpenAPI SDK Code Generator Version: 3.64.0-959a5845-20230112-195144
 */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-await-in-loop */
const extend = __importStar(require("extend"));
const ibm_cloud_sdk_core_1 = require("ibm-cloud-sdk-core");
const common_1 = require("../lib/common");
/**
 * REST API for Code Engine
 *
 * API Version: 2.0.0
 */
class CodeEngineV2 extends ibm_cloud_sdk_core_1.BaseService {
    /*************************
     * Factory method
     ************************/
    /**
     * Constructs an instance of CodeEngineV2 with passed in options and external configuration.
     *
     * @param {UserOptions} [options] - The parameters to send to the service.
     * @param {string} [options.serviceName] - The name of the service to configure
     * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
     * @param {string} [options.serviceUrl] - The URL for the service
     * @returns {CodeEngineV2}
     */
    static newInstance(options) {
        options = options || {};
        if (!options.serviceName) {
            options.serviceName = this.DEFAULT_SERVICE_NAME;
        }
        if (!options.authenticator) {
            options.authenticator = (0, ibm_cloud_sdk_core_1.getAuthenticatorFromEnvironment)(options.serviceName);
        }
        const service = new CodeEngineV2(options);
        service.configureService(options.serviceName);
        if (options.serviceUrl) {
            service.setServiceUrl(options.serviceUrl);
        }
        return service;
    }
    /**
     * Construct a CodeEngineV2 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
     * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
     * @constructor
     * @returns {CodeEngineV2}
     */
    constructor(options) {
        options = options || {};
        super(options);
        if (options.serviceUrl) {
            this.setServiceUrl(options.serviceUrl);
        }
        else {
            this.setServiceUrl(CodeEngineV2.DEFAULT_SERVICE_URL);
        }
    }
    /*************************
     * projects
     ************************/
    /**
     * List all projects.
     *
     * List all projects in the current account.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {number} [params.limit] - Optional maximum number of projects per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. Any additional query parameters are ignored if a page token is present. If omitted, the first page of
     * results is returned. This value is obtained from the 'start' query parameter in the 'next_url' field of the
     * operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.ProjectList>>}
     */
    listProjects(params) {
        const _params = { ...params };
        const _requiredParams = [];
        const _validParams = ['limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'limit': _params.limit,
            'start': _params.start,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listProjects');
        const parameters = {
            options: {
                url: '/projects',
                method: 'GET',
                qs: query,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create a project.
     *
     * Create a Code Engine project on IBM Cloud. The project will be created in the region that corresponds to the API
     * endpoint that is being called.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - The name of the project.
     * @param {string} [params.resourceGroupId] - Optional ID of the resource group for your project deployment. If this
     * field is not defined, the default resource group of the account will be used.
     * @param {string[]} [params.tags] - Optional list of labels to assign to your project. Tags are not part of the
     * project resource that is returned by the server, but can be obtained and managed through the Global Tagging API in
     * IBM Cloud. Find more information on [Global Tagging API docs](https://cloud.ibm.com/apidocs/tagging).
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Project>>}
     */
    createProject(params) {
        const _params = { ...params };
        const _requiredParams = ['name'];
        const _validParams = ['name', 'resourceGroupId', 'tags', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'name': _params.name,
            'resource_group_id': _params.resourceGroupId,
            'tags': _params.tags,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createProject');
        const parameters = {
            options: {
                url: '/projects',
                method: 'POST',
                body,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get a project.
     *
     * Display the details of a single project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.id - The ID of the project.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Project>>}
     */
    getProject(params) {
        const _params = { ...params };
        const _requiredParams = ['id'];
        const _validParams = ['id', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'id': _params.id,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getProject');
        const parameters = {
            options: {
                url: '/projects/{id}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete a project.
     *
     * Delete a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.id - The ID of the project.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteProject(params) {
        const _params = { ...params };
        const _requiredParams = ['id'];
        const _validParams = ['id', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'id': _params.id,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteProject');
        const parameters = {
            options: {
                url: '/projects/{id}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /*************************
     * applications
     ************************/
    /**
     * List applications.
     *
     * List all applications in a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {number} [params.limit] - Optional maximum number of apps per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. If omitted, the first page of results is returned. This value is obtained from the 'start' query
     * parameter in the 'next_url' field of the operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.AppList>>}
     */
    listApps(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = ['projectId', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listApps');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create an application.
     *
     * Create an application.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.imageReference - The name of the image that is used for this job. The format is
     * `REGISTRY/NAMESPACE/REPOSITORY:TAG` where `REGISTRY` and `TAG` are optional. If `REGISTRY` is not specified, the
     * default is `docker.io`. If `TAG` is not specified, the default is `latest`. If the image reference points to a
     * registry that requires authentication, make sure to also specify the property `image_secret`.
     * @param {string} params.name - The name of the app. Use a name that is unique within the project.
     * @param {number} [params.imagePort] - Optional port the app listens on. While the app will always be exposed via
     * port `443` for end users, this port is used to connect to the port that is exposed by the container image.
     * @param {string} [params.imageSecret] - Optional name of the image registry access secret. The image registry access
     * secret is used to authenticate with a private registry when you download the container image. If the image
     * reference points to a registry that requires authentication, the app will be created but cannot reach the ready
     * status, until this property is provided, too.
     * @param {string} [params.managedDomainMappings] - Optional value controlling which of the system managed domain
     * mappings will be setup for the application. Valid values are 'local_public', 'local_private' and 'local'.
     * Visibility can only be 'local_private' if the project supports application private visibility.
     * @param {string[]} [params.runArguments] - Optional arguments for the app that are passed to start the container. If
     * not specified an empty string array will be applied and the arguments specified by the container image, will be
     * used to start the container.
     * @param {number} [params.runAsUser] - Optional user ID (UID) to run the app (e.g., `1001`).
     * @param {string[]} [params.runCommands] - Optional commands for the app that are passed to start the container. If
     * not specified an empty string array will be applied and the command specified by the container image, will be used
     * to start the container.
     * @param {EnvVarPrototype[]} [params.runEnvVariables] - Optional references to config maps, secrets or a literal
     * values that are exposed as environment variables within the running application.
     * @param {string} [params.runServiceAccount] - Optional name of the service account. For built-in service accounts,
     * you can use the shortened names `manager` , `none`, `reader`, and `writer`.
     * @param {VolumeMountPrototype[]} [params.runVolumeMounts] - Optional mounts of config maps or a secrets.
     * @param {number} [params.scaleConcurrency] - Optional maximum number of requests that can be processed concurrently
     * per instance.
     * @param {number} [params.scaleConcurrencyTarget] - Optional threshold of concurrent requests per instance at which
     * one or more additional instances are created. Use this value to scale up instances based on concurrent number of
     * requests. This option defaults to the value of the `scale_concurrency` option, if not specified.
     * @param {string} [params.scaleCpuLimit] - Optional number of CPU set for the instance of the app. For valid values
     * see [Supported memory and CPU combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo).
     * @param {string} [params.scaleEphemeralStorageLimit] - Optional amount of ephemeral storage to set for the instance
     * of the app. The amount specified as ephemeral storage, must not exceed the amount of `scale_memory_limit`. The
     * units for specifying ephemeral storage are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand
     * expressions for GB and MB. For more information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleInitialInstances] - Optional initial number of instances that are created upon app
     * creation or app update.
     * @param {number} [params.scaleMaxInstances] - Optional maximum number of instances for this app. If you set this
     * value to `0`, this property does not set a upper scaling limit. However, the app scaling is still limited by the
     * project quota for instances. See [Limits and quotas for Code
     * Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-limits).
     * @param {string} [params.scaleMemoryLimit] - Optional amount of memory set for the instance of the app. For valid
     * values see [Supported memory and CPU
     * combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo). The units for specifying
     * memory are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand expressions for GB and MB. For more
     * information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleMinInstances] - Optional minimum number of instances for this app. If you set this
     * value to `0`, the app will scale down to zero, if not hit by any request for some time.
     * @param {number} [params.scaleRequestTimeout] - Optional amount of time in seconds that is allowed for a running app
     * to respond to a request.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.App>>}
     */
    createApp(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'imageReference', 'name'];
        const _validParams = [
            'projectId',
            'imageReference',
            'name',
            'imagePort',
            'imageSecret',
            'managedDomainMappings',
            'runArguments',
            'runAsUser',
            'runCommands',
            'runEnvVariables',
            'runServiceAccount',
            'runVolumeMounts',
            'scaleConcurrency',
            'scaleConcurrencyTarget',
            'scaleCpuLimit',
            'scaleEphemeralStorageLimit',
            'scaleInitialInstances',
            'scaleMaxInstances',
            'scaleMemoryLimit',
            'scaleMinInstances',
            'scaleRequestTimeout',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'image_reference': _params.imageReference,
            'name': _params.name,
            'image_port': _params.imagePort,
            'image_secret': _params.imageSecret,
            'managed_domain_mappings': _params.managedDomainMappings,
            'run_arguments': _params.runArguments,
            'run_as_user': _params.runAsUser,
            'run_commands': _params.runCommands,
            'run_env_variables': _params.runEnvVariables,
            'run_service_account': _params.runServiceAccount,
            'run_volume_mounts': _params.runVolumeMounts,
            'scale_concurrency': _params.scaleConcurrency,
            'scale_concurrency_target': _params.scaleConcurrencyTarget,
            'scale_cpu_limit': _params.scaleCpuLimit,
            'scale_ephemeral_storage_limit': _params.scaleEphemeralStorageLimit,
            'scale_initial_instances': _params.scaleInitialInstances,
            'scale_max_instances': _params.scaleMaxInstances,
            'scale_memory_limit': _params.scaleMemoryLimit,
            'scale_min_instances': _params.scaleMinInstances,
            'scale_request_timeout': _params.scaleRequestTimeout,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createApp');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps',
                method: 'POST',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get an application.
     *
     * Display the details of an application.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your application.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.App>>}
     */
    getApp(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getApp');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete an application.
     *
     * Delete an application.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your application.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteApp(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteApp');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Update an application.
     *
     * An application contains one or more revisions. A revision represents an immutable version of the configuration
     * properties of the application. Each update of an application configuration property creates a new revision of the
     * application. [Learn more](https://cloud.ibm.com/docs/codeengine?topic=codeengine-update-app).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your application.
     * @param {string} params.ifMatch - Version of the app settings to be updated. Specify the version that you retrieved
     * as entity_tag (ETag header) when reading the app. This value helps identifying parallel usage of this API. Pass *
     * to indicate to update any version available. This might result in stale updates.
     * @param {number} [params.imagePort] - Optional port the app listens on. While the app will always be exposed via
     * port `443` for end users, this port is used to connect to the port that is exposed by the container image.
     * @param {string} [params.imageReference] - The name of the image that is used for this job. The format is
     * `REGISTRY/NAMESPACE/REPOSITORY:TAG` where `REGISTRY` and `TAG` are optional. If `REGISTRY` is not specified, the
     * default is `docker.io`. If `TAG` is not specified, the default is `latest`. If the image reference points to a
     * registry that requires authentication, make sure to also specify the property `image_secret`.
     * @param {string} [params.imageSecret] - Optional name of the image registry access secret. The image registry access
     * secret is used to authenticate with a private registry when you download the container image. If the image
     * reference points to a registry that requires authentication, the app will be created but cannot reach the ready
     * status, until this property is provided, too.
     * @param {string} [params.managedDomainMappings] - Optional value controlling which of the system managed domain
     * mappings will be setup for the application. Valid values are 'local_public', 'local_private' and 'local'.
     * Visibility can only be 'local_private' if the project supports application private visibility.
     * @param {string[]} [params.runArguments] - Optional arguments for the app that are passed to start the container. If
     * not specified an empty string array will be applied and the arguments specified by the container image, will be
     * used to start the container.
     * @param {number} [params.runAsUser] - Optional user ID (UID) to run the app (e.g., `1001`).
     * @param {string[]} [params.runCommands] - Optional commands for the app that are passed to start the container. If
     * not specified an empty string array will be applied and the command specified by the container image, will be used
     * to start the container.
     * @param {EnvVarPrototype[]} [params.runEnvVariables] - Optional references to config maps, secrets or a literal
     * values.
     * @param {string} [params.runServiceAccount] - Optional name of the service account. For built-in service accounts,
     * you can use the shortened names `manager` , `none`, `reader`, and `writer`.
     * @param {VolumeMountPrototype[]} [params.runVolumeMounts] - Optional mounts of config maps or a secrets. In case
     * this is provided, existing `run_volume_mounts` will be overwritten.
     * @param {number} [params.scaleConcurrency] - Optional maximum number of requests that can be processed concurrently
     * per instance.
     * @param {number} [params.scaleConcurrencyTarget] - Optional threshold of concurrent requests per instance at which
     * one or more additional instances are created. Use this value to scale up instances based on concurrent number of
     * requests. This option defaults to the value of the `scale_concurrency` option, if not specified.
     * @param {string} [params.scaleCpuLimit] - Optional number of CPU set for the instance of the app. For valid values
     * see [Supported memory and CPU combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo).
     * @param {string} [params.scaleEphemeralStorageLimit] - Optional amount of ephemeral storage to set for the instance
     * of the app. The amount specified as ephemeral storage, must not exceed the amount of `scale_memory_limit`. The
     * units for specifying ephemeral storage are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand
     * expressions for GB and MB. For more information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleInitialInstances] - Optional initial number of instances that are created upon app
     * creation or app update.
     * @param {number} [params.scaleMaxInstances] - Optional maximum number of instances for this app. If you set this
     * value to `0`, this property does not set a upper scaling limit. However, the app scaling is still limited by the
     * project quota for instances. See [Limits and quotas for Code
     * Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-limits).
     * @param {string} [params.scaleMemoryLimit] - Optional amount of memory set for the instance of the app. For valid
     * values see [Supported memory and CPU
     * combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo). The units for specifying
     * memory are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand expressions for GB and MB. For more
     * information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleMinInstances] - Optional minimum number of instances for this app. If you set this
     * value to `0`, the app will scale down to zero, if not hit by any request for some time.
     * @param {number} [params.scaleRequestTimeout] - Optional amount of time in seconds that is allowed for a running app
     * to respond to a request.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.App>>}
     */
    updateApp(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name', 'ifMatch'];
        const _validParams = [
            'projectId',
            'name',
            'ifMatch',
            'imagePort',
            'imageReference',
            'imageSecret',
            'managedDomainMappings',
            'runArguments',
            'runAsUser',
            'runCommands',
            'runEnvVariables',
            'runServiceAccount',
            'runVolumeMounts',
            'scaleConcurrency',
            'scaleConcurrencyTarget',
            'scaleCpuLimit',
            'scaleEphemeralStorageLimit',
            'scaleInitialInstances',
            'scaleMaxInstances',
            'scaleMemoryLimit',
            'scaleMinInstances',
            'scaleRequestTimeout',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'image_port': _params.imagePort,
            'image_reference': _params.imageReference,
            'image_secret': _params.imageSecret,
            'managed_domain_mappings': _params.managedDomainMappings,
            'run_arguments': _params.runArguments,
            'run_as_user': _params.runAsUser,
            'run_commands': _params.runCommands,
            'run_env_variables': _params.runEnvVariables,
            'run_service_account': _params.runServiceAccount,
            'run_volume_mounts': _params.runVolumeMounts,
            'scale_concurrency': _params.scaleConcurrency,
            'scale_concurrency_target': _params.scaleConcurrencyTarget,
            'scale_cpu_limit': _params.scaleCpuLimit,
            'scale_ephemeral_storage_limit': _params.scaleEphemeralStorageLimit,
            'scale_initial_instances': _params.scaleInitialInstances,
            'scale_max_instances': _params.scaleMaxInstances,
            'scale_memory_limit': _params.scaleMemoryLimit,
            'scale_min_instances': _params.scaleMinInstances,
            'scale_request_timeout': _params.scaleRequestTimeout,
        };
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'updateApp');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps/{name}',
                method: 'PATCH',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/merge-patch+json',
                    'If-Match': _params.ifMatch,
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * List application revisions.
     *
     * List all application revisions in a particular application.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.appName - The name of your application.
     * @param {number} [params.limit] - Optional maximum number of apps per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. If omitted, the first page of results is returned. This value is obtained from the 'start' query
     * parameter in the 'next_url' field of the operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.AppRevisionList>>}
     */
    listAppRevisions(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'appName'];
        const _validParams = ['projectId', 'appName', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
            'app_name': _params.appName,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listAppRevisions');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps/{app_name}/revisions',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get an application revision.
     *
     * Display the details of an application revision.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.appName - The name of your application.
     * @param {string} params.name - The name of your application revision.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.AppRevision>>}
     */
    getAppRevision(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'appName', 'name'];
        const _validParams = ['projectId', 'appName', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'app_name': _params.appName,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getAppRevision');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps/{app_name}/revisions/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete an application revision.
     *
     * Delete an application revision.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.appName - The name of your application.
     * @param {string} params.name - The name of your application revision.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteAppRevision(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'appName', 'name'];
        const _validParams = ['projectId', 'appName', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'app_name': _params.appName,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteAppRevision');
        const parameters = {
            options: {
                url: '/projects/{project_id}/apps/{app_name}/revisions/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /*************************
     * jobs
     ************************/
    /**
     * List jobs.
     *
     * List all jobs in a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {number} [params.limit] - Optional maximum number of jobs per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. If omitted, the first page of results is returned. This value is obtained from the 'start' query
     * parameter in the 'next_url' field of the operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.JobList>>}
     */
    listJobs(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = ['projectId', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listJobs');
        const parameters = {
            options: {
                url: '/projects/{project_id}/jobs',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create a job.
     *
     * Create a job.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.imageReference - The name of the image that is used for this job. The format is
     * `REGISTRY/NAMESPACE/REPOSITORY:TAG` where `REGISTRY` and `TAG` are optional. If `REGISTRY` is not specified, the
     * default is `docker.io`. If `TAG` is not specified, the default is `latest`. If the image reference points to a
     * registry that requires authentication, make sure to also specify the property `image_secret`.
     * @param {string} params.name - The name of the job. Use a name that is unique within the project.
     * @param {string} [params.imageSecret] - The name of the image registry access secret. The image registry access
     * secret is used to authenticate with a private registry when you download the container image. If the image
     * reference points to a registry that requires authentication, the job / job runs will be created but submitted job
     * runs will fail, until this property is provided, too.
     * @param {string[]} [params.runArguments] - Set arguments for the job that are passed to start job run containers. If
     * not specified an empty string array will be applied and the arguments specified by the container image, will be
     * used to start the container.
     * @param {number} [params.runAsUser] - The user ID (UID) to run the application (e.g., 1001).
     * @param {string[]} [params.runCommands] - Set commands for the job that are passed to start job run containers. If
     * not specified an empty string array will be applied and the command specified by the container image, will be used
     * to start the container.
     * @param {EnvVarPrototype[]} [params.runEnvVariables] - Optional references to config maps, secrets or a literal
     * values.
     * @param {string} [params.runMode] - The mode for runs of the job. Valid values are `task` and `daemon`. In `task`
     * mode, the `max_execution_time` and `retry_limit` options apply. In `daemon` mode, since there is no timeout and
     * failed instances are restarted indefinitely, the `max_execution_time` and `retry_limit` options are not allowed.
     * @param {string} [params.runServiceAccount] - The name of the service account. For built-in service accounts, you
     * can use the shortened names `manager`, `none`, `reader`, and `writer`.
     * @param {VolumeMountPrototype[]} [params.runVolumeMounts] - Optional mounts of config maps or a secrets.
     * @param {string} [params.scaleArraySpec] - Define a custom set of array indices as comma-separated list containing
     * single values and hyphen-separated ranges like `5,12-14,23,27`. Each instance can pick up its array index via
     * environment variable `JOB_INDEX`. The number of unique array indices specified here determines the number of job
     * instances to run.
     * @param {string} [params.scaleCpuLimit] - Optional amount of CPU set for the instance of the job. For valid values
     * see [Supported memory and CPU combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo).
     * @param {string} [params.scaleEphemeralStorageLimit] - Optional amount of ephemeral storage to set for the instance
     * of the job. The amount specified as ephemeral storage, must not exceed the amount of `scale_memory_limit`. The
     * units for specifying ephemeral storage are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand
     * expressions for GB and MB. For more information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleMaxExecutionTime] - The maximum execution time in seconds for runs of the job. This
     * option can only be specified if `mode` is `task`.
     * @param {string} [params.scaleMemoryLimit] - Optional amount of memory set for the instance of the job. For valid
     * values see [Supported memory and CPU
     * combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo). The units for specifying
     * memory are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand expressions for GB and MB. For more
     * information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleRetryLimit] - The number of times to rerun an instance of the job before the job is
     * marked as failed. This option can only be specified if `mode` is `task`.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Job>>}
     */
    createJob(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'imageReference', 'name'];
        const _validParams = [
            'projectId',
            'imageReference',
            'name',
            'imageSecret',
            'runArguments',
            'runAsUser',
            'runCommands',
            'runEnvVariables',
            'runMode',
            'runServiceAccount',
            'runVolumeMounts',
            'scaleArraySpec',
            'scaleCpuLimit',
            'scaleEphemeralStorageLimit',
            'scaleMaxExecutionTime',
            'scaleMemoryLimit',
            'scaleRetryLimit',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'image_reference': _params.imageReference,
            'name': _params.name,
            'image_secret': _params.imageSecret,
            'run_arguments': _params.runArguments,
            'run_as_user': _params.runAsUser,
            'run_commands': _params.runCommands,
            'run_env_variables': _params.runEnvVariables,
            'run_mode': _params.runMode,
            'run_service_account': _params.runServiceAccount,
            'run_volume_mounts': _params.runVolumeMounts,
            'scale_array_spec': _params.scaleArraySpec,
            'scale_cpu_limit': _params.scaleCpuLimit,
            'scale_ephemeral_storage_limit': _params.scaleEphemeralStorageLimit,
            'scale_max_execution_time': _params.scaleMaxExecutionTime,
            'scale_memory_limit': _params.scaleMemoryLimit,
            'scale_retry_limit': _params.scaleRetryLimit,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createJob');
        const parameters = {
            options: {
                url: '/projects/{project_id}/jobs',
                method: 'POST',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get a job.
     *
     * Display the details of a job.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your job.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Job>>}
     */
    getJob(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getJob');
        const parameters = {
            options: {
                url: '/projects/{project_id}/jobs/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete a job.
     *
     * Delete a job.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your job.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteJob(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteJob');
        const parameters = {
            options: {
                url: '/projects/{project_id}/jobs/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Update a job.
     *
     * Update the given job.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your job.
     * @param {string} params.ifMatch - Version of the job settings to be updated. Specify the version that you retrieved
     * as entity_tag (ETag header) when reading the job. This value helps identifying parallel usage of this API. Pass *
     * to indicate to update any version available. This might result in stale updates.
     * @param {string} [params.imageReference] - The name of the image that is used for this job. The format is
     * `REGISTRY/NAMESPACE/REPOSITORY:TAG` where `REGISTRY` and `TAG` are optional. If `REGISTRY` is not specified, the
     * default is `docker.io`. If `TAG` is not specified, the default is `latest`. If the image reference points to a
     * registry that requires authentication, make sure to also specify the property `image_secret`.
     * @param {string} [params.imageSecret] - The name of the image registry access secret. The image registry access
     * secret is used to authenticate with a private registry when you download the container image. If the image
     * reference points to a registry that requires authentication, the job / job runs will be created but submitted job
     * runs will fail, until this property is provided, too.
     * @param {string[]} [params.runArguments] - Set arguments for the job that are passed to start job run containers. If
     * not specified an empty string array will be applied and the arguments specified by the container image, will be
     * used to start the container.
     * @param {number} [params.runAsUser] - The user ID (UID) to run the application (e.g., 1001).
     * @param {string[]} [params.runCommands] - Set commands for the job that are passed to start job run containers. If
     * not specified an empty string array will be applied and the command specified by the container image, will be used
     * to start the container.
     * @param {EnvVarPrototype[]} [params.runEnvVariables] - Optional references to config maps, secrets or a literal
     * values.
     * @param {string} [params.runMode] - The mode for runs of the job. Valid values are `task` and `daemon`. In `task`
     * mode, the `max_execution_time` and `retry_limit` options apply. In `daemon` mode, since there is no timeout and
     * failed instances are restarted indefinitely, the `max_execution_time` and `retry_limit` options are not allowed.
     * @param {string} [params.runServiceAccount] - The name of the service account. For built-in service accounts, you
     * can use the shortened names `manager`, `none`, `reader`, and `writer`.
     * @param {VolumeMountPrototype[]} [params.runVolumeMounts] - Optional mounts of config maps or a secrets. In case
     * this is provided, existing `run_volume_mounts` will be overwritten.
     * @param {string} [params.scaleArraySpec] - Define a custom set of array indices as comma-separated list containing
     * single values and hyphen-separated ranges like `5,12-14,23,27`. Each instance can pick up its array index via
     * environment variable `JOB_INDEX`. The number of unique array indices specified here determines the number of job
     * instances to run.
     * @param {string} [params.scaleCpuLimit] - Optional amount of CPU set for the instance of the job. For valid values
     * see [Supported memory and CPU combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo).
     * @param {string} [params.scaleEphemeralStorageLimit] - Optional amount of ephemeral storage to set for the instance
     * of the job. The amount specified as ephemeral storage, must not exceed the amount of `scale_memory_limit`. The
     * units for specifying ephemeral storage are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand
     * expressions for GB and MB. For more information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleMaxExecutionTime] - The maximum execution time in seconds for runs of the job. This
     * option can only be specified if `mode` is `task`.
     * @param {string} [params.scaleMemoryLimit] - Optional amount of memory set for the instance of the job. For valid
     * values see [Supported memory and CPU
     * combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo). The units for specifying
     * memory are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand expressions for GB and MB. For more
     * information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleRetryLimit] - The number of times to rerun an instance of the job before the job is
     * marked as failed. This option can only be specified if `mode` is `task`.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Job>>}
     */
    updateJob(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name', 'ifMatch'];
        const _validParams = [
            'projectId',
            'name',
            'ifMatch',
            'imageReference',
            'imageSecret',
            'runArguments',
            'runAsUser',
            'runCommands',
            'runEnvVariables',
            'runMode',
            'runServiceAccount',
            'runVolumeMounts',
            'scaleArraySpec',
            'scaleCpuLimit',
            'scaleEphemeralStorageLimit',
            'scaleMaxExecutionTime',
            'scaleMemoryLimit',
            'scaleRetryLimit',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'image_reference': _params.imageReference,
            'image_secret': _params.imageSecret,
            'run_arguments': _params.runArguments,
            'run_as_user': _params.runAsUser,
            'run_commands': _params.runCommands,
            'run_env_variables': _params.runEnvVariables,
            'run_mode': _params.runMode,
            'run_service_account': _params.runServiceAccount,
            'run_volume_mounts': _params.runVolumeMounts,
            'scale_array_spec': _params.scaleArraySpec,
            'scale_cpu_limit': _params.scaleCpuLimit,
            'scale_ephemeral_storage_limit': _params.scaleEphemeralStorageLimit,
            'scale_max_execution_time': _params.scaleMaxExecutionTime,
            'scale_memory_limit': _params.scaleMemoryLimit,
            'scale_retry_limit': _params.scaleRetryLimit,
        };
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'updateJob');
        const parameters = {
            options: {
                url: '/projects/{project_id}/jobs/{name}',
                method: 'PATCH',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/merge-patch+json',
                    'If-Match': _params.ifMatch,
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * List job runs.
     *
     * List all job runs in a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} [params.jobName] - Optional name of the job that should be filtered for.
     * @param {number} [params.limit] - Optional maximum number of job runs per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. If omitted, the first page of results is returned. This value is obtained from the 'start' query
     * parameter in the 'next_url' field of the operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.JobRunList>>}
     */
    listJobRuns(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = ['projectId', 'jobName', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'job_name': _params.jobName,
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listJobRuns');
        const parameters = {
            options: {
                url: '/projects/{project_id}/job_runs',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create a job run.
     *
     * Create an job run.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} [params.imageReference] - The name of the image that is used for this job. The format is
     * `REGISTRY/NAMESPACE/REPOSITORY:TAG` where `REGISTRY` and `TAG` are optional. If `REGISTRY` is not specified, the
     * default is `docker.io`. If `TAG` is not specified, the default is `latest`. If the image reference points to a
     * registry that requires authentication, make sure to also specify the property `image_secret`.
     * @param {string} [params.imageSecret] - The name of the image registry access secret. The image registry access
     * secret is used to authenticate with a private registry when you download the container image. If the image
     * reference points to a registry that requires authentication, the job / job runs will be created but submitted job
     * runs will fail, until this property is provided, too.
     * @param {string} [params.jobName] - Optional name of the job on which this job run is based on. If specified, the
     * job run will inherit the configuration of the referenced job.
     * @param {string} [params.name] - The name of the job. Use a name that is unique within the project.
     * @param {string[]} [params.runArguments] - Set arguments for the job that are passed to start job run containers. If
     * not specified an empty string array will be applied and the arguments specified by the container image, will be
     * used to start the container.
     * @param {number} [params.runAsUser] - The user ID (UID) to run the application (e.g., 1001).
     * @param {string[]} [params.runCommands] - Set commands for the job that are passed to start job run containers. If
     * not specified an empty string array will be applied and the command specified by the container image, will be used
     * to start the container.
     * @param {EnvVarPrototype[]} [params.runEnvVariables] - Optional references to config maps, secrets or a literal
     * values.
     * @param {string} [params.runMode] - The mode for runs of the job. Valid values are `task` and `daemon`. In `task`
     * mode, the `max_execution_time` and `retry_limit` options apply. In `daemon` mode, since there is no timeout and
     * failed instances are restarted indefinitely, the `max_execution_time` and `retry_limit` options are not allowed.
     * @param {string} [params.runServiceAccount] - The name of the service account. For built-in service accounts, you
     * can use the shortened names `manager`, `none`, `reader`, and `writer`.
     * @param {VolumeMountPrototype[]} [params.runVolumeMounts] - Optional mounts of config maps or a secrets.
     * @param {string} [params.scaleArraySpec] - Define a custom set of array indices as comma-separated list containing
     * single values and hyphen-separated ranges like `5,12-14,23,27`. Each instance can pick up its array index via
     * environment variable `JOB_INDEX`. The number of unique array indices specified here determines the number of job
     * instances to run.
     * @param {string} [params.scaleCpuLimit] - Optional amount of CPU set for the instance of the job. For valid values
     * see [Supported memory and CPU combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo).
     * @param {string} [params.scaleEphemeralStorageLimit] - Optional amount of ephemeral storage to set for the instance
     * of the job. The amount specified as ephemeral storage, must not exceed the amount of `scale_memory_limit`. The
     * units for specifying ephemeral storage are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand
     * expressions for GB and MB. For more information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleMaxExecutionTime] - The maximum execution time in seconds for runs of the job. This
     * option can only be specified if `mode` is `task`.
     * @param {string} [params.scaleMemoryLimit] - Optional amount of memory set for the instance of the job. For valid
     * values see [Supported memory and CPU
     * combinations](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo). The units for specifying
     * memory are Megabyte (M) or Gigabyte (G), whereas G and M are the shorthand expressions for GB and MB. For more
     * information see [Units of
     * measurement](https://cloud.ibm.com/docs/codeengine?topic=codeengine-mem-cpu-combo#unit-measurements).
     * @param {number} [params.scaleRetryLimit] - The number of times to rerun an instance of the job before the job is
     * marked as failed. This option can only be specified if `mode` is `task`.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.JobRun>>}
     */
    createJobRun(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = [
            'projectId',
            'imageReference',
            'imageSecret',
            'jobName',
            'name',
            'runArguments',
            'runAsUser',
            'runCommands',
            'runEnvVariables',
            'runMode',
            'runServiceAccount',
            'runVolumeMounts',
            'scaleArraySpec',
            'scaleCpuLimit',
            'scaleEphemeralStorageLimit',
            'scaleMaxExecutionTime',
            'scaleMemoryLimit',
            'scaleRetryLimit',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'image_reference': _params.imageReference,
            'image_secret': _params.imageSecret,
            'job_name': _params.jobName,
            'name': _params.name,
            'run_arguments': _params.runArguments,
            'run_as_user': _params.runAsUser,
            'run_commands': _params.runCommands,
            'run_env_variables': _params.runEnvVariables,
            'run_mode': _params.runMode,
            'run_service_account': _params.runServiceAccount,
            'run_volume_mounts': _params.runVolumeMounts,
            'scale_array_spec': _params.scaleArraySpec,
            'scale_cpu_limit': _params.scaleCpuLimit,
            'scale_ephemeral_storage_limit': _params.scaleEphemeralStorageLimit,
            'scale_max_execution_time': _params.scaleMaxExecutionTime,
            'scale_memory_limit': _params.scaleMemoryLimit,
            'scale_retry_limit': _params.scaleRetryLimit,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createJobRun');
        const parameters = {
            options: {
                url: '/projects/{project_id}/job_runs',
                method: 'POST',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get a job run.
     *
     * Display the details of a job run.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your job run.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.JobRun>>}
     */
    getJobRun(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getJobRun');
        const parameters = {
            options: {
                url: '/projects/{project_id}/job_runs/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete a job run.
     *
     * Delete a job run.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your job run.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteJobRun(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteJobRun');
        const parameters = {
            options: {
                url: '/projects/{project_id}/job_runs/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /*************************
     * builds
     ************************/
    /**
     * List builds.
     *
     * List all builds in a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {number} [params.limit] - Optional maximum number of builds per page.
     * @param {string} [params.start] - The token to continue traversing paginated list of builds.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.BuildList>>}
     */
    listBuilds(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = ['projectId', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listBuilds');
        const parameters = {
            options: {
                url: '/projects/{project_id}/builds',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create a build.
     *
     * Create a build.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of the build. Use a name that is unique within the project.
     * @param {string} params.outputImage - The name of the image.
     * @param {string} params.outputSecret - The secret that is required to access the image registry. Make sure that the
     * secret is granted with push permissions towards the specified container registry namespace.
     * @param {string} params.sourceUrl - The URL of the code repository. This field is required if the `source_type` is
     * `git`. If the `source_type` value is `local`, this field must be omitted. If the repository is publicly available
     * you can provide a 'https' URL like `https://github.com/IBM/CodeEngine`. If the repository requires authentication,
     * you need to provide a 'ssh' URL like `git@github.com:IBM/CodeEngine.git` along with a `source_secret` that points
     * to a secret of format `ssh_auth`.
     * @param {string} params.strategyType - The strategy to use for building the image.
     * @param {string} [params.sourceContextDir] - Option directory in the repository that contains the buildpacks file or
     * the Dockerfile.
     * @param {string} [params.sourceRevision] - Commit, tag, or branch in the source repository to pull. This field is
     * optional if the `source_type` is `git` and uses the HEAD of default branch if not specified. If the `source_type`
     * value is `local`, this field must be omitted.
     * @param {string} [params.sourceSecret] - Name of the secret that is used access the repository source. This field is
     * optional if the `source_type` is `git`. Additionally, if the `source_url` points to a repository that requires
     * authentication, the build will be created but cannot access any source code, until this property is provided, too.
     * If the `source_type` value is `local`, this field must be omitted.
     * @param {string} [params.sourceType] - Specifies the type of source to determine if your build source is in a
     * repository or based on local source code.
     * * local - For builds from local source code.
     * * git - For builds from git version controlled source code.
     * @param {string} [params.strategySize] - Optional size for the build, which determines the amount of resources used.
     * Build sizes are `small`, `medium`, `large`, `xlarge`.
     * @param {string} [params.strategySpecFile] - Optional path to the specification file that is used for build
     * strategies for building an image.
     * @param {number} [params.timeout] - The maximum amount of time, in seconds, that can pass before the build must
     * succeed or fail.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Build>>}
     */
    createBuild(params) {
        const _params = { ...params };
        const _requiredParams = [
            'projectId',
            'name',
            'outputImage',
            'outputSecret',
            'sourceUrl',
            'strategyType',
        ];
        const _validParams = [
            'projectId',
            'name',
            'outputImage',
            'outputSecret',
            'sourceUrl',
            'strategyType',
            'sourceContextDir',
            'sourceRevision',
            'sourceSecret',
            'sourceType',
            'strategySize',
            'strategySpecFile',
            'timeout',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'name': _params.name,
            'output_image': _params.outputImage,
            'output_secret': _params.outputSecret,
            'source_url': _params.sourceUrl,
            'strategy_type': _params.strategyType,
            'source_context_dir': _params.sourceContextDir,
            'source_revision': _params.sourceRevision,
            'source_secret': _params.sourceSecret,
            'source_type': _params.sourceType,
            'strategy_size': _params.strategySize,
            'strategy_spec_file': _params.strategySpecFile,
            'timeout': _params.timeout,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createBuild');
        const parameters = {
            options: {
                url: '/projects/{project_id}/builds',
                method: 'POST',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get a build.
     *
     * Display the details of a build.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your build.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Build>>}
     */
    getBuild(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getBuild');
        const parameters = {
            options: {
                url: '/projects/{project_id}/builds/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete a build.
     *
     * Delete a build.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your build.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteBuild(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteBuild');
        const parameters = {
            options: {
                url: '/projects/{project_id}/builds/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Update a build.
     *
     * Update a build.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your build.
     * @param {string} params.ifMatch - Version of the build settings to be updated. Specify the version that you
     * retrieved as entity_tag (ETag header) when reading the build. This value helps identifying parallel usage of this
     * API. Pass * to indicate to update any version available. This might result in stale updates.
     * @param {string} [params.outputImage] - The name of the image.
     * @param {string} [params.outputSecret] - The secret that is required to access the image registry. Make sure that
     * the secret is granted with push permissions towards the specified container registry namespace.
     * @param {string} [params.sourceContextDir] - Option directory in the repository that contains the buildpacks file or
     * the Dockerfile.
     * @param {string} [params.sourceRevision] - Commit, tag, or branch in the source repository to pull. This field is
     * optional if the `source_type` is `git` and uses the HEAD of default branch if not specified. If the `source_type`
     * value is `local`, this field must be omitted.
     * @param {string} [params.sourceSecret] - Name of the secret that is used access the repository source. This field is
     * optional if the `source_type` is `git`. Additionally, if the `source_url` points to a repository that requires
     * authentication, the build will be created but cannot access any source code, until this property is provided, too.
     * If the `source_type` value is `local`, this field must be omitted.
     * @param {string} [params.sourceType] - Specifies the type of source to determine if your build source is in a
     * repository or based on local source code.
     * * local - For builds from local source code.
     * * git - For builds from git version controlled source code.
     * @param {string} [params.sourceUrl] - The URL of the code repository. This field is required if the `source_type` is
     * `git`. If the `source_type` value is `local`, this field must be omitted. If the repository is publicly available
     * you can provide a 'https' URL like `https://github.com/IBM/CodeEngine`. If the repository requires authentication,
     * you need to provide a 'ssh' URL like `git@github.com:IBM/CodeEngine.git` along with a `source_secret` that points
     * to a secret of format `ssh_auth`.
     * @param {string} [params.strategySize] - Optional size for the build, which determines the amount of resources used.
     * Build sizes are `small`, `medium`, `large`, `xlarge`.
     * @param {string} [params.strategySpecFile] - Optional path to the specification file that is used for build
     * strategies for building an image.
     * @param {string} [params.strategyType] - The strategy to use for building the image.
     * @param {number} [params.timeout] - The maximum amount of time, in seconds, that can pass before the build must
     * succeed or fail.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Build>>}
     */
    updateBuild(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name', 'ifMatch'];
        const _validParams = [
            'projectId',
            'name',
            'ifMatch',
            'outputImage',
            'outputSecret',
            'sourceContextDir',
            'sourceRevision',
            'sourceSecret',
            'sourceType',
            'sourceUrl',
            'strategySize',
            'strategySpecFile',
            'strategyType',
            'timeout',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'output_image': _params.outputImage,
            'output_secret': _params.outputSecret,
            'source_context_dir': _params.sourceContextDir,
            'source_revision': _params.sourceRevision,
            'source_secret': _params.sourceSecret,
            'source_type': _params.sourceType,
            'source_url': _params.sourceUrl,
            'strategy_size': _params.strategySize,
            'strategy_spec_file': _params.strategySpecFile,
            'strategy_type': _params.strategyType,
            'timeout': _params.timeout,
        };
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'updateBuild');
        const parameters = {
            options: {
                url: '/projects/{project_id}/builds/{name}',
                method: 'PATCH',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/merge-patch+json',
                    'If-Match': _params.ifMatch,
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * List build runs.
     *
     * List all build runs in a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} [params.buildName] - Optional name of the build that should be filtered for.
     * @param {number} [params.limit] - Optional maximum number of build runs per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. If omitted, the first page of results is returned. This value is obtained from the 'start' query
     * parameter in the 'next_url' field of the operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.BuildRunList>>}
     */
    listBuildRuns(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = ['projectId', 'buildName', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'build_name': _params.buildName,
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listBuildRuns');
        const parameters = {
            options: {
                url: '/projects/{project_id}/build_runs',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create a build run.
     *
     * Create a build run.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} [params.buildName] - Optional name of the build on which this build run is based on. If specified,
     * the build run will inherit the configuration of the referenced build. If not specified, make sure to specify at
     * least the fields `strategy_type`, `source_url`, `output_image` and `output_secret` to describe the build run.
     * @param {string} [params.name] - Name of the build run. This field is optional, if the field `build_name` is
     * specified and its value will be generated like so: `[BUILD_NAME]-run-[timestamp with format: YYMMDD-hhmmss] if not
     * set.`.
     * @param {string} [params.outputImage] - The name of the image.
     * @param {string} [params.outputSecret] - The secret that is required to access the image registry. Make sure that
     * the secret is granted with push permissions towards the specified container registry namespace.
     * @param {string} [params.serviceAccount] - Optional service account which is used for resource control.
     * @param {string} [params.sourceContextDir] - Option directory in the repository that contains the buildpacks file or
     * the Dockerfile.
     * @param {string} [params.sourceRevision] - Commit, tag, or branch in the source repository to pull. This field is
     * optional if the `source_type` is `git` and uses the HEAD of default branch if not specified. If the `source_type`
     * value is `local`, this field must be omitted.
     * @param {string} [params.sourceSecret] - Name of the secret that is used access the repository source. This field is
     * optional if the `source_type` is `git`. Additionally, if the `source_url` points to a repository that requires
     * authentication, the build will be created but cannot access any source code, until this property is provided, too.
     * If the `source_type` value is `local`, this field must be omitted.
     * @param {string} [params.sourceType] - Specifies the type of source to determine if your build source is in a
     * repository or based on local source code.
     * * local - For builds from local source code.
     * * git - For builds from git version controlled source code.
     * @param {string} [params.sourceUrl] - The URL of the code repository. This field is required if the `source_type` is
     * `git`. If the `source_type` value is `local`, this field must be omitted. If the repository is publicly available
     * you can provide a 'https' URL like `https://github.com/IBM/CodeEngine`. If the repository requires authentication,
     * you need to provide a 'ssh' URL like `git@github.com:IBM/CodeEngine.git` along with a `source_secret` that points
     * to a secret of format `ssh_auth`.
     * @param {string} [params.strategySize] - Optional size for the build, which determines the amount of resources used.
     * Build sizes are `small`, `medium`, `large`, `xlarge`.
     * @param {string} [params.strategySpecFile] - Optional path to the specification file that is used for build
     * strategies for building an image.
     * @param {string} [params.strategyType] - The strategy to use for building the image.
     * @param {number} [params.timeout] - The maximum amount of time, in seconds, that can pass before the build must
     * succeed or fail.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.BuildRun>>}
     */
    createBuildRun(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = [
            'projectId',
            'buildName',
            'name',
            'outputImage',
            'outputSecret',
            'serviceAccount',
            'sourceContextDir',
            'sourceRevision',
            'sourceSecret',
            'sourceType',
            'sourceUrl',
            'strategySize',
            'strategySpecFile',
            'strategyType',
            'timeout',
            'headers',
        ];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'build_name': _params.buildName,
            'name': _params.name,
            'output_image': _params.outputImage,
            'output_secret': _params.outputSecret,
            'service_account': _params.serviceAccount,
            'source_context_dir': _params.sourceContextDir,
            'source_revision': _params.sourceRevision,
            'source_secret': _params.sourceSecret,
            'source_type': _params.sourceType,
            'source_url': _params.sourceUrl,
            'strategy_size': _params.strategySize,
            'strategy_spec_file': _params.strategySpecFile,
            'strategy_type': _params.strategyType,
            'timeout': _params.timeout,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createBuildRun');
        const parameters = {
            options: {
                url: '/projects/{project_id}/build_runs',
                method: 'POST',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get a build run.
     *
     * Display the details of a build run.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your build run.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.BuildRun>>}
     */
    getBuildRun(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getBuildRun');
        const parameters = {
            options: {
                url: '/projects/{project_id}/build_runs/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete a build run.
     *
     * Delete a build run.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your build run.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteBuildRun(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteBuildRun');
        const parameters = {
            options: {
                url: '/projects/{project_id}/build_runs/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /*************************
     * secretsAndConfigMaps
     ************************/
    /**
     * List config maps.
     *
     * List all config maps in a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {number} [params.limit] - Optional maximum number of config maps per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. If omitted, the first page of results is returned. This value is obtained from the 'start' query
     * parameter in the 'next_url' field of the operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.ConfigMapList>>}
     */
    listConfigMaps(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = ['projectId', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listConfigMaps');
        const parameters = {
            options: {
                url: '/projects/{project_id}/config_maps',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create a config map.
     *
     * Create a config map.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of the configmap. Use a name that is unique within the project.
     * @param {JsonObject} [params.data] - The key-value pair for the config map. Values must be specified in `KEY=VALUE`
     * format. Each `KEY` field must consist of alphanumeric characters, `-`, `_` or `.` and must not be exceed a max
     * length of 253 characters. Each `VALUE` field can consists of any character and must not be exceed a max length of
     * 1048576 characters.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.ConfigMap>>}
     */
    createConfigMap(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'data', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'name': _params.name,
            'data': _params.data,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createConfigMap');
        const parameters = {
            options: {
                url: '/projects/{project_id}/config_maps',
                method: 'POST',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get a config map.
     *
     * Display the details of a config map.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your configmap.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.ConfigMap>>}
     */
    getConfigMap(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getConfigMap');
        const parameters = {
            options: {
                url: '/projects/{project_id}/config_maps/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Update a config map.
     *
     * Update a config map.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your configmap.
     * @param {string} params.ifMatch - Version of the config map settings to be updated. Specify the version that you
     * retrieved as entity_tag (ETag header) when reading the config map. This value helps identifying parallel usage of
     * this API. Pass * to indicate to update any version available. This might result in stale updates.
     * @param {JsonObject} [params.data] - The key-value pair for the config map. Values must be specified in `KEY=VALUE`
     * format. Each `KEY` field must consist of alphanumeric characters, `-`, `_` or `.` and must not be exceed a max
     * length of 253 characters. Each `VALUE` field can consists of any character and must not be exceed a max length of
     * 1048576 characters.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.ConfigMap>>}
     */
    replaceConfigMap(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name', 'ifMatch'];
        const _validParams = ['projectId', 'name', 'ifMatch', 'data', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'data': _params.data,
        };
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'replaceConfigMap');
        const parameters = {
            options: {
                url: '/projects/{project_id}/config_maps/{name}',
                method: 'PUT',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'If-Match': _params.ifMatch,
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete a config map.
     *
     * Delete a config map.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your configmap.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteConfigMap(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteConfigMap');
        const parameters = {
            options: {
                url: '/projects/{project_id}/config_maps/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * List secrets.
     *
     * List all secrets in a project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {number} [params.limit] - Optional maximum number of secrets per page.
     * @param {string} [params.start] - An optional token that indicates the beginning of the page of results to be
     * returned. If omitted, the first page of results is returned. This value is obtained from the 'start' query
     * parameter in the 'next_url' field of the operation response.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.SecretList>>}
     */
    listSecrets(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId'];
        const _validParams = ['projectId', 'limit', 'start', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const query = {
            'limit': _params.limit,
            'start': _params.start,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'listSecrets');
        const parameters = {
            options: {
                url: '/projects/{project_id}/secrets',
                method: 'GET',
                qs: query,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Create a secret.
     *
     * Create a secret.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.format - Specify the format of the secret.
     * @param {string} params.name - The name of the secret.
     * @param {JsonObject} [params.data] - Data container that allows to specify config parameters and their values as a
     * key-value map. Each key field must consist of alphanumeric characters, `-`, `_` or `.` and must not be exceed a max
     * length of 253 characters. Each value field can consists of any character and must not be exceed a max length of
     * 1048576 characters.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Secret>>}
     */
    createSecret(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'format', 'name'];
        const _validParams = ['projectId', 'format', 'name', 'data', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'format': _params.format,
            'name': _params.name,
            'data': _params.data,
        };
        const path = {
            'project_id': _params.projectId,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'createSecret');
        const parameters = {
            options: {
                url: '/projects/{project_id}/secrets',
                method: 'POST',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Get a secret.
     *
     * Get a secret.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your secret.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Secret>>}
     */
    getSecret(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'getSecret');
        const parameters = {
            options: {
                url: '/projects/{project_id}/secrets/{name}',
                method: 'GET',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Update a secret.
     *
     * Update a secret.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your secret.
     * @param {string} params.ifMatch - Version of the secret settings to be updated. Specify the version that you
     * retrieved as entity_tag (ETag header) when reading the secret. This value helps identifying parallel usage of this
     * API. Pass * to indicate to update any version available. This might result in stale updates.
     * @param {JsonObject} [params.data] - Data container that allows to specify config parameters and their values as a
     * key-value map. Each key field must consist of alphanumeric characters, `-`, `_` or `.` and must not be exceed a max
     * length of 253 characters. Each value field can consists of any character and must not be exceed a max length of
     * 1048576 characters.
     * @param {string} [params.format] - Specify the format of the secret.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.Secret>>}
     */
    replaceSecret(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name', 'ifMatch'];
        const _validParams = ['projectId', 'name', 'ifMatch', 'data', 'format', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const body = {
            'data': _params.data,
            'format': _params.format,
        };
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'replaceSecret');
        const parameters = {
            options: {
                url: '/projects/{project_id}/secrets/{name}',
                method: 'PUT',
                body,
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'If-Match': _params.ifMatch,
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
    /**
     * Delete a secret.
     *
     * Delete a secret.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project.
     * @param {string} params.name - The name of your secret.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<CodeEngineV2.Response<CodeEngineV2.EmptyObject>>}
     */
    deleteSecret(params) {
        const _params = { ...params };
        const _requiredParams = ['projectId', 'name'];
        const _validParams = ['projectId', 'name', 'headers'];
        const _validationErrors = (0, ibm_cloud_sdk_core_1.validateParams)(_params, _requiredParams, _validParams);
        if (_validationErrors) {
            return Promise.reject(_validationErrors);
        }
        const path = {
            'project_id': _params.projectId,
            'name': _params.name,
        };
        const sdkHeaders = (0, common_1.getSdkHeaders)(CodeEngineV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteSecret');
        const parameters = {
            options: {
                url: '/projects/{project_id}/secrets/{name}',
                method: 'DELETE',
                path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    }
}
CodeEngineV2.DEFAULT_SERVICE_URL = 'https://api.au-syd.codeengine.cloud.ibm.com/v2';
CodeEngineV2.DEFAULT_SERVICE_NAME = 'code_engine';
/*************************
 * interfaces
 ************************/
(function (CodeEngineV2) {
    /** Constants for the `createApp` operation. */
    let CreateAppConstants;
    (function (CreateAppConstants) {
        /** Optional value controlling which of the system managed domain mappings will be setup for the application. Valid values are 'local_public', 'local_private' and 'local'. Visibility can only be 'local_private' if the project supports application private visibility. */
        let ManagedDomainMappings;
        (function (ManagedDomainMappings) {
            ManagedDomainMappings["LOCAL"] = "local";
            ManagedDomainMappings["LOCAL_PRIVATE"] = "local_private";
            ManagedDomainMappings["LOCAL_PUBLIC"] = "local_public";
        })(ManagedDomainMappings = CreateAppConstants.ManagedDomainMappings || (CreateAppConstants.ManagedDomainMappings = {}));
        /** Optional name of the service account. For built-in service accounts, you can use the shortened names `manager` , `none`, `reader`, and `writer`. */
        let RunServiceAccount;
        (function (RunServiceAccount) {
            RunServiceAccount["DEFAULT"] = "default";
            RunServiceAccount["MANAGER"] = "manager";
            RunServiceAccount["READER"] = "reader";
            RunServiceAccount["WRITER"] = "writer";
            RunServiceAccount["NONE"] = "none";
        })(RunServiceAccount = CreateAppConstants.RunServiceAccount || (CreateAppConstants.RunServiceAccount = {}));
    })(CreateAppConstants = CodeEngineV2.CreateAppConstants || (CodeEngineV2.CreateAppConstants = {}));
    /** Constants for the `updateApp` operation. */
    let UpdateAppConstants;
    (function (UpdateAppConstants) {
        /** Optional value controlling which of the system managed domain mappings will be setup for the application. Valid values are 'local_public', 'local_private' and 'local'. Visibility can only be 'local_private' if the project supports application private visibility. */
        let ManagedDomainMappings;
        (function (ManagedDomainMappings) {
            ManagedDomainMappings["LOCAL"] = "local";
            ManagedDomainMappings["LOCAL_PRIVATE"] = "local_private";
            ManagedDomainMappings["LOCAL_PUBLIC"] = "local_public";
        })(ManagedDomainMappings = UpdateAppConstants.ManagedDomainMappings || (UpdateAppConstants.ManagedDomainMappings = {}));
        /** Optional name of the service account. For built-in service accounts, you can use the shortened names `manager` , `none`, `reader`, and `writer`. */
        let RunServiceAccount;
        (function (RunServiceAccount) {
            RunServiceAccount["DEFAULT"] = "default";
            RunServiceAccount["MANAGER"] = "manager";
            RunServiceAccount["READER"] = "reader";
            RunServiceAccount["WRITER"] = "writer";
            RunServiceAccount["NONE"] = "none";
        })(RunServiceAccount = UpdateAppConstants.RunServiceAccount || (UpdateAppConstants.RunServiceAccount = {}));
    })(UpdateAppConstants = CodeEngineV2.UpdateAppConstants || (CodeEngineV2.UpdateAppConstants = {}));
    /** Constants for the `createJob` operation. */
    let CreateJobConstants;
    (function (CreateJobConstants) {
        /** The mode for runs of the job. Valid values are `task` and `daemon`. In `task` mode, the `max_execution_time` and `retry_limit` options apply. In `daemon` mode, since there is no timeout and failed instances are restarted indefinitely, the `max_execution_time` and `retry_limit` options are not allowed. */
        let RunMode;
        (function (RunMode) {
            RunMode["TASK"] = "task";
            RunMode["DAEMON"] = "daemon";
        })(RunMode = CreateJobConstants.RunMode || (CreateJobConstants.RunMode = {}));
        /** The name of the service account. For built-in service accounts, you can use the shortened names `manager`, `none`, `reader`, and `writer`. */
        let RunServiceAccount;
        (function (RunServiceAccount) {
            RunServiceAccount["DEFAULT"] = "default";
            RunServiceAccount["MANAGER"] = "manager";
            RunServiceAccount["READER"] = "reader";
            RunServiceAccount["WRITER"] = "writer";
            RunServiceAccount["NONE"] = "none";
        })(RunServiceAccount = CreateJobConstants.RunServiceAccount || (CreateJobConstants.RunServiceAccount = {}));
    })(CreateJobConstants = CodeEngineV2.CreateJobConstants || (CodeEngineV2.CreateJobConstants = {}));
    /** Constants for the `updateJob` operation. */
    let UpdateJobConstants;
    (function (UpdateJobConstants) {
        /** The mode for runs of the job. Valid values are `task` and `daemon`. In `task` mode, the `max_execution_time` and `retry_limit` options apply. In `daemon` mode, since there is no timeout and failed instances are restarted indefinitely, the `max_execution_time` and `retry_limit` options are not allowed. */
        let RunMode;
        (function (RunMode) {
            RunMode["TASK"] = "task";
            RunMode["DAEMON"] = "daemon";
        })(RunMode = UpdateJobConstants.RunMode || (UpdateJobConstants.RunMode = {}));
        /** The name of the service account. For built-in service accounts, you can use the shortened names `manager`, `none`, `reader`, and `writer`. */
        let RunServiceAccount;
        (function (RunServiceAccount) {
            RunServiceAccount["DEFAULT"] = "default";
            RunServiceAccount["MANAGER"] = "manager";
            RunServiceAccount["READER"] = "reader";
            RunServiceAccount["WRITER"] = "writer";
            RunServiceAccount["NONE"] = "none";
        })(RunServiceAccount = UpdateJobConstants.RunServiceAccount || (UpdateJobConstants.RunServiceAccount = {}));
    })(UpdateJobConstants = CodeEngineV2.UpdateJobConstants || (CodeEngineV2.UpdateJobConstants = {}));
    /** Constants for the `createJobRun` operation. */
    let CreateJobRunConstants;
    (function (CreateJobRunConstants) {
        /** The mode for runs of the job. Valid values are `task` and `daemon`. In `task` mode, the `max_execution_time` and `retry_limit` options apply. In `daemon` mode, since there is no timeout and failed instances are restarted indefinitely, the `max_execution_time` and `retry_limit` options are not allowed. */
        let RunMode;
        (function (RunMode) {
            RunMode["TASK"] = "task";
            RunMode["DAEMON"] = "daemon";
        })(RunMode = CreateJobRunConstants.RunMode || (CreateJobRunConstants.RunMode = {}));
        /** The name of the service account. For built-in service accounts, you can use the shortened names `manager`, `none`, `reader`, and `writer`. */
        let RunServiceAccount;
        (function (RunServiceAccount) {
            RunServiceAccount["DEFAULT"] = "default";
            RunServiceAccount["MANAGER"] = "manager";
            RunServiceAccount["READER"] = "reader";
            RunServiceAccount["WRITER"] = "writer";
            RunServiceAccount["NONE"] = "none";
        })(RunServiceAccount = CreateJobRunConstants.RunServiceAccount || (CreateJobRunConstants.RunServiceAccount = {}));
    })(CreateJobRunConstants = CodeEngineV2.CreateJobRunConstants || (CodeEngineV2.CreateJobRunConstants = {}));
    /** Constants for the `createBuild` operation. */
    let CreateBuildConstants;
    (function (CreateBuildConstants) {
        /** Specifies the type of source to determine if your build source is in a repository or based on local source code. * local - For builds from local source code. * git - For builds from git version controlled source code. */
        let SourceType;
        (function (SourceType) {
            SourceType["LOCAL"] = "local";
            SourceType["GIT"] = "git";
        })(SourceType = CreateBuildConstants.SourceType || (CreateBuildConstants.SourceType = {}));
    })(CreateBuildConstants = CodeEngineV2.CreateBuildConstants || (CodeEngineV2.CreateBuildConstants = {}));
    /** Constants for the `updateBuild` operation. */
    let UpdateBuildConstants;
    (function (UpdateBuildConstants) {
        /** Specifies the type of source to determine if your build source is in a repository or based on local source code. * local - For builds from local source code. * git - For builds from git version controlled source code. */
        let SourceType;
        (function (SourceType) {
            SourceType["LOCAL"] = "local";
            SourceType["GIT"] = "git";
        })(SourceType = UpdateBuildConstants.SourceType || (UpdateBuildConstants.SourceType = {}));
    })(UpdateBuildConstants = CodeEngineV2.UpdateBuildConstants || (CodeEngineV2.UpdateBuildConstants = {}));
    /** Constants for the `createBuildRun` operation. */
    let CreateBuildRunConstants;
    (function (CreateBuildRunConstants) {
        /** Optional service account which is used for resource control. */
        let ServiceAccount;
        (function (ServiceAccount) {
            ServiceAccount["DEFAULT"] = "default";
            ServiceAccount["MANAGER"] = "manager";
            ServiceAccount["READER"] = "reader";
            ServiceAccount["WRITER"] = "writer";
            ServiceAccount["NONE"] = "none";
        })(ServiceAccount = CreateBuildRunConstants.ServiceAccount || (CreateBuildRunConstants.ServiceAccount = {}));
        /** Specifies the type of source to determine if your build source is in a repository or based on local source code. * local - For builds from local source code. * git - For builds from git version controlled source code. */
        let SourceType;
        (function (SourceType) {
            SourceType["LOCAL"] = "local";
            SourceType["GIT"] = "git";
        })(SourceType = CreateBuildRunConstants.SourceType || (CreateBuildRunConstants.SourceType = {}));
    })(CreateBuildRunConstants = CodeEngineV2.CreateBuildRunConstants || (CodeEngineV2.CreateBuildRunConstants = {}));
    /** Constants for the `createSecret` operation. */
    let CreateSecretConstants;
    (function (CreateSecretConstants) {
        /** Specify the format of the secret. */
        let Format;
        (function (Format) {
            Format["GENERIC"] = "generic";
            Format["SSH_AUTH"] = "ssh_auth";
            Format["BASIC_AUTH"] = "basic_auth";
            Format["TLS"] = "tls";
            Format["SERVICE_ACCESS"] = "service_access";
            Format["REGISTRY"] = "registry";
            Format["OTHER"] = "other";
        })(Format = CreateSecretConstants.Format || (CreateSecretConstants.Format = {}));
    })(CreateSecretConstants = CodeEngineV2.CreateSecretConstants || (CodeEngineV2.CreateSecretConstants = {}));
    /** Constants for the `replaceSecret` operation. */
    let ReplaceSecretConstants;
    (function (ReplaceSecretConstants) {
        /** Specify the format of the secret. */
        let Format;
        (function (Format) {
            Format["GENERIC"] = "generic";
            Format["SSH_AUTH"] = "ssh_auth";
            Format["BASIC_AUTH"] = "basic_auth";
            Format["TLS"] = "tls";
            Format["SERVICE_ACCESS"] = "service_access";
            Format["REGISTRY"] = "registry";
            Format["OTHER"] = "other";
        })(Format = ReplaceSecretConstants.Format || (ReplaceSecretConstants.Format = {}));
    })(ReplaceSecretConstants = CodeEngineV2.ReplaceSecretConstants || (CodeEngineV2.ReplaceSecretConstants = {}));
    /*************************
     * pager classes
     ************************/
    /**
     * ProjectsPager can be used to simplify the use of listProjects().
     */
    class ProjectsPager {
        /**
         * Construct a ProjectsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listProjects()
         * @param {Object} [params] - The parameters to be passed to listProjects()
         * @constructor
         * @returns {ProjectsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listProjects().
         * @returns {Promise<CodeEngineV2.Project[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listProjects(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.projects;
        }
        /**
         * Returns all results by invoking listProjects() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.Project[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.ProjectsPager = ProjectsPager;
    /**
     * AppsPager can be used to simplify the use of listApps().
     */
    class AppsPager {
        /**
         * Construct a AppsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listApps()
         * @param {Object} params - The parameters to be passed to listApps()
         * @constructor
         * @returns {AppsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listApps().
         * @returns {Promise<CodeEngineV2.App[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listApps(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.apps;
        }
        /**
         * Returns all results by invoking listApps() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.App[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.AppsPager = AppsPager;
    /**
     * AppRevisionsPager can be used to simplify the use of listAppRevisions().
     */
    class AppRevisionsPager {
        /**
         * Construct a AppRevisionsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listAppRevisions()
         * @param {Object} params - The parameters to be passed to listAppRevisions()
         * @constructor
         * @returns {AppRevisionsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listAppRevisions().
         * @returns {Promise<CodeEngineV2.AppRevision[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listAppRevisions(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.revisions;
        }
        /**
         * Returns all results by invoking listAppRevisions() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.AppRevision[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.AppRevisionsPager = AppRevisionsPager;
    /**
     * JobsPager can be used to simplify the use of listJobs().
     */
    class JobsPager {
        /**
         * Construct a JobsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listJobs()
         * @param {Object} params - The parameters to be passed to listJobs()
         * @constructor
         * @returns {JobsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listJobs().
         * @returns {Promise<CodeEngineV2.Job[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listJobs(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.jobs;
        }
        /**
         * Returns all results by invoking listJobs() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.Job[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.JobsPager = JobsPager;
    /**
     * JobRunsPager can be used to simplify the use of listJobRuns().
     */
    class JobRunsPager {
        /**
         * Construct a JobRunsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listJobRuns()
         * @param {Object} params - The parameters to be passed to listJobRuns()
         * @constructor
         * @returns {JobRunsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listJobRuns().
         * @returns {Promise<CodeEngineV2.JobRun[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listJobRuns(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.job_runs;
        }
        /**
         * Returns all results by invoking listJobRuns() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.JobRun[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.JobRunsPager = JobRunsPager;
    /**
     * BuildsPager can be used to simplify the use of listBuilds().
     */
    class BuildsPager {
        /**
         * Construct a BuildsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listBuilds()
         * @param {Object} params - The parameters to be passed to listBuilds()
         * @constructor
         * @returns {BuildsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listBuilds().
         * @returns {Promise<CodeEngineV2.Build[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listBuilds(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.builds;
        }
        /**
         * Returns all results by invoking listBuilds() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.Build[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.BuildsPager = BuildsPager;
    /**
     * BuildRunsPager can be used to simplify the use of listBuildRuns().
     */
    class BuildRunsPager {
        /**
         * Construct a BuildRunsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listBuildRuns()
         * @param {Object} params - The parameters to be passed to listBuildRuns()
         * @constructor
         * @returns {BuildRunsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listBuildRuns().
         * @returns {Promise<CodeEngineV2.BuildRun[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listBuildRuns(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.build_runs;
        }
        /**
         * Returns all results by invoking listBuildRuns() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.BuildRun[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.BuildRunsPager = BuildRunsPager;
    /**
     * ConfigMapsPager can be used to simplify the use of listConfigMaps().
     */
    class ConfigMapsPager {
        /**
         * Construct a ConfigMapsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listConfigMaps()
         * @param {Object} params - The parameters to be passed to listConfigMaps()
         * @constructor
         * @returns {ConfigMapsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listConfigMaps().
         * @returns {Promise<CodeEngineV2.ConfigMap[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listConfigMaps(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.config_maps;
        }
        /**
         * Returns all results by invoking listConfigMaps() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.ConfigMap[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.ConfigMapsPager = ConfigMapsPager;
    /**
     * SecretsPager can be used to simplify the use of listSecrets().
     */
    class SecretsPager {
        /**
         * Construct a SecretsPager object.
         *
         * @param {CodeEngineV2}  client - The service client instance used to invoke listSecrets()
         * @param {Object} params - The parameters to be passed to listSecrets()
         * @constructor
         * @returns {SecretsPager}
         */
        constructor(client, params) {
            if (params && params.start) {
                throw new Error(`the params.start field should not be set`);
            }
            this._hasNext = true;
            this.pageContext = { next: undefined };
            this.client = client;
            this.params = JSON.parse(JSON.stringify(params || {}));
        }
        /**
         * Returns true if there are potentially more results to be retrieved by invoking getNext().
         * @returns {boolean}
         */
        hasNext() {
            return this._hasNext;
        }
        /**
         * Returns the next page of results by invoking listSecrets().
         * @returns {Promise<CodeEngineV2.Secret[]>}
         */
        async getNext() {
            if (!this.hasNext()) {
                throw new Error('No more results available');
            }
            if (this.pageContext.next) {
                this.params.start = this.pageContext.next;
            }
            const response = await this.client.listSecrets(this.params);
            const { result } = response;
            let next = null;
            if (result && result.next) {
                next = result.next.start;
            }
            this.pageContext.next = next;
            if (!this.pageContext.next) {
                this._hasNext = false;
            }
            return result.secrets;
        }
        /**
         * Returns all results by invoking listSecrets() repeatedly until all pages of results have been retrieved.
         * @returns {Promise<CodeEngineV2.Secret[]>}
         */
        async getAll() {
            const results = [];
            while (this.hasNext()) {
                const nextPage = await this.getNext();
                results.push(...nextPage);
            }
            return results;
        }
    }
    CodeEngineV2.SecretsPager = SecretsPager;
})(CodeEngineV2 || (CodeEngineV2 = {}));
module.exports = CodeEngineV2;
//# sourceMappingURL=v2.js.map