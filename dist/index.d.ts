/// <reference types="node" />
import { EventEmitter } from "events";
import { ClientConfiguration } from "./interface/config.interface";
import { InventoryTemplate } from "./templates/inventory.template";
import { CatalougeTemplate } from "./templates/catalouge.template";
export declare class Client extends EventEmitter {
    private readonly apiKey?;
    private readonly http;
    readonly catalougeTemplate: CatalougeTemplate;
    readonly inventoryTemplate: InventoryTemplate;
    constructor(apiKey: string, config: ClientConfiguration);
    private buildBackendUrl;
}
