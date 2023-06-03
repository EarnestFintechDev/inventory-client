import { ClientHttp } from "../http";
export declare class CatalougeTemplate extends ClientHttp {
    getAllItemFormElasticContainer(): Promise<any>;
    /**
       * @param {string} search - search act as a query paramenter for search in elastic
       */
    getSearchedItemFromElasticContainer(search: string): Promise<any>;
}
