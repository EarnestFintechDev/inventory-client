import { ClientHttp } from "../http";
export class InventoryTemplate extends ClientHttp {
  /**
   * @param {string} sku - sku is called stock keeping unit for inventory.
   * @param {object} payload - payload for inventory.
   */
  async increaseInventory <Payload>(sku: string,payload:Payload):Promise<any> {
    const response= await this.http.post(`/inventory/increment?sku=${sku}`,{...payload});
    return response.data;
  }
  async decreaseInventory <Payload>(sku: string,payload:Payload):Promise<any> {
    const response= await this.http.post(`/inventory/decrement?sku=${sku}`,{...payload});
    return response.data;
  }
}
