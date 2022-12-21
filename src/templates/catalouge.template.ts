import { ClientHttp } from "../http";
export class CatalougeTemplate extends ClientHttp {
  
  async getAllItemFormElasticContainer() {
    const response=await this.http.get(`/catalouge/getElasticItem`);
    return response.data
  }
/**
   * @param {string} search - search act as a query paramenter for search in elastic
   */
  async getSearchedItemFromElasticContainer(search:string) {
    const response=await this.http.get(`/catalouge/search?query=${search}`);
    return response.data
  }
}
