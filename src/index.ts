import axios, { AxiosInstance } from "axios";
import { EventEmitter } from "events";

import { ClientConfiguration } from "./interface/config.interface";

import { InventoryTemplate } from "./templates/inventory.template";
import { CatalougeTemplate } from "./templates/catalouge.template";

export class Client extends EventEmitter {
  private readonly apiKey?: string;
  private readonly http: AxiosInstance;
  readonly catalougeTemplate: CatalougeTemplate;
  readonly inventoryTemplate: InventoryTemplate;
 

  constructor(apiKey: string, config: ClientConfiguration) {
    super();
    this.apiKey = apiKey;

    this.http = axios.create({
      baseURL: this.buildBackendUrl(config),
      headers: {
        Authorization: `ApiKey ${this.apiKey}`,
      },
    });
    this.http.interceptors.response.use((response) => response,(error)=>error.response)

   
    this.inventoryTemplate = new InventoryTemplate(this.http);
    this.catalougeTemplate = new CatalougeTemplate(this.http);
  }

  private buildBackendUrl(config: ClientConfiguration) {
    if (!config.backendUrl) {
      return `http://localhost:8080`
    }

    return config.backendUrl && config.backendUrl;
  }
}
