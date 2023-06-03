import { ClientHttp } from '../http';
export declare class InventoryTemplate extends ClientHttp {
    /**
     * @param {string} sku - sku is called stock keeping unit for inventory.
     * @param {object} payload - payload for inventory.
     */
    increaseInventory<Payload>(sku: string, payload: Payload): Promise<any>;
    decreaseInventory<Payload>(sku: string, payload: Payload): Promise<any>;
}
