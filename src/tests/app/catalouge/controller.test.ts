import { client } from "../../client.test";
import { assert } from "chai";
const data = (
  skuId: string | "sku500",
  createInventory: boolean | false,
  sellerId: string | "seller404",
  name: string | "Flipakrt Gift Card"
) => {
  const payload = {
    "name": name,
    "shortDescription": "shirtstring",
    "images": [
      "string"
    ],
    "longDescription": "string",
    "brandLogo": "string",
    "category": "string",
    "brands": [
      "string"
    ],
    "sku": skuId,
    "denominations": {},
    "type": "online",
    "productCategory": "string",
    "multipleGiftCardsRedemption": true,
    "partialRedemption": true,
    "redemption": "online",
    "brandName": "string",
    "brandTC": "string",
    "HowToRedeem": "string",
    "gstApplicable": false,
    "createInventory": createInventory,
    "giftCardExpiryPeriod": "string",
    "unit": "string",
    "giftCardStatus": "active",
    "whereToRedeem": [
      "string"
    ],
    "sellerId": sellerId
  }
  
  return payload;
};
export function catalougeControllerTest() {
  describe("Controller Test", async function () {
    describe("Rating Lead Controller Test", async function () {
it("Create Catalouge with inventory", async function () {
  const payload=data("amazonsku40306", true, "Amazonseller404", "amazon gift card")
  const response = await client.catalougeTemplate.create(payload,'/catalouge')
    

  console.log("response from Create Catalouge", response);

  assert.equal(response.status.code, 201);
  assert.exists(response);
  assert.exists(response.result);
  assert.exists(response.status);
  assert.equal(
    response.result.catalougeResponse.status.code,
   201
  );
  assert.equal(
    response.result.InventoryResponse.status.code,
    201
  );
  assert.isFalse(response.status.error);
});
it("Create Catalouge without inventory", async function () {
    const payload=data("amazonsku", false, "Amazonseller404", "amazon gift card")
  const response = await client.catalougeTemplate.create(payload,'/catalouge')

  console.log("response from Create Catalouge", JSON.stringify(response));

  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.result);
  assert.exists(response.status);
  assert.equal(
    response.result.catalougeResponse.status.code,
    201
  );
  assert.equal(response.result.InventoryResponse, undefined);
  assert.isFalse(response.status.error);
});
it("Create Catalouge with check for insertion of catalouge item in elastic", async function () {
  const payload=data("amazonsku100", false, "Amazonseller404", "amazon gift card")
  const response = await client.catalougeTemplate.create(payload,'/catalouge')
  console.log(
    "response from Create Catalouge with check for insertion of catalouge item in elastic",
    JSON.stringify(response)
  );

  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.result);
  assert.exists(response.status);
  assert.equal(
    response.result.catalougeResponse.status.code,
    201
  );
  assert.exists(response.result.elasticResponse);
  assert.isFalse(response.status.error);
});
it("Read Catalouge", async function () {
    const payload=data("amazonsku100", false, "Amazonseller404", "amazon gift card")
  const createResponse = await client.catalougeTemplate.create(payload,'/catalouge')
  const response = await     client.catalougeTemplate.getOne(`/catalouge`,`${createResponse.result.catalougeResponse.result}`);
  console.log("response from Read Catalouge", JSON.stringify(response));

  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.status);
  assert.equal(response.status.code, 200);
  assert.isFalse(response.status.error);
  assert.equal(
    response.result.id,
    createResponse.result.catalougeResponse.result
  );
});
it("Read Catalouge - Not Found", async function () {
  const payload=data("amazonsku100", false, "Amazonseller404", "amazon gift card")
  const createResponse = await client.catalougeTemplate.create(payload,'/catalouge')
  const response = await     client.catalougeTemplate.getOne(`/catalouge`,`${createResponse.result.catalougeResponse.result.replace("0","a")}`);
  console.log(
    "response from Read Catalouge - Not Found",
    JSON.stringify(response)
  );

  assert.equal(response.status.code, 404);
  assert.exists(response);
  assert.exists(response.status);
  assert.equal(response.status.code, 404);
  assert.isTrue(response.status.error);
});
it("Update Catalouge", async function () {
  const payload = data("", false, "", "life style");
  const payload1 = { ...payload };
  payload1.name = "test";
  const createResponse = await client.catalougeTemplate.create(payload,'/catalouge')
  console.log(createResponse)

  const updateResponse = await client.catalougeTemplate.update(payload1, '/catalouge',createResponse.result.catalougeResponse.result)
  console.log(
    "Upate response from Update Catalouge",
    JSON.stringify(updateResponse)
  );

  assert.equal(updateResponse.status.code, 200);
  assert.exists(updateResponse);
  assert.exists(updateResponse.status);
  assert.equal(updateResponse.status.code, 200);
  assert.isFalse(updateResponse.status.error);
    const response = await     client.catalougeTemplate.getOne(`/catalouge`,`${createResponse.result.catalougeResponse.result}`);

  console.log("response from Update Catalouge", JSON.stringify(response));
  console.log(response.result);
  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.status);
  assert.equal(response.status.code, 200);
  assert.isFalse(response.status.error);
  assert.equal(response.result.name, "test");
});
it("Update Catalouge - not found", async function () {
  const payload = data("", false, "", "life style");
  const payload1 = { ...payload };
  payload1.name = "test";
  const createResponse = await client.catalougeTemplate.create(payload,'/catalouge')
  console.log(createResponse)
  const updateResponse = await client.catalougeTemplate.update(payload1, '/catalouge',createResponse.result.catalougeResponse.result.replace("1","a"))
  console.log(
    "Upate response from Update Catalouge",
    JSON.stringify(updateResponse)
  );

  assert.equal(updateResponse.status.code, 404);
  assert.exists(updateResponse);
  assert.exists(updateResponse.status);
  assert.equal(updateResponse.status.code, 404);
  assert.isTrue(updateResponse.status.error);
  const response = await     client.catalougeTemplate.getOne(`/catalouge`,`${createResponse.result.catalougeResponse.result}`);

  console.log("response from Update Catalouge", JSON.stringify(response));
  console.log(response.result);
  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.status);
  assert.equal(response.status.code, 200);
  assert.isFalse(response.status.error);
  assert.equal(response.result.name, "life style");
});
it("Delete Catalouge - not found", async function () {
    const payload = data("", false, "", "life style");
  const payload1 = { ...payload };
  payload1.name = "test";
    const createResponse = await client.catalougeTemplate.create(payload,'/catalouge')

  const updateResponse = await client.catalougeTemplate.delete('/catalouge',createResponse.result.catalougeResponse.result.replace(
        "0",
        "a"
      )
    )
    
  console.log(
    "Delete response from Delete Catalouge - not found",
    JSON.stringify(updateResponse)
  );

  assert.equal(updateResponse.status.code, 404);
  assert.exists(updateResponse);
  assert.exists(updateResponse.status);
  assert.equal(updateResponse.status.code, 404);
  assert.isTrue(updateResponse.status.error);
    const response = await     client.catalougeTemplate.getOne(`/catalouge`,`${createResponse.result.catalougeResponse.result}`);

  console.log("response from Update Catalouge", JSON.stringify(response));

  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.status);
  assert.equal(response.status.code, 200);
  assert.isFalse(response.status.error);
  assert.equal(response.result.name, "life style");
});
it("Delete Catalouge ", async function () {
  const payload = data("", false, "", "life style");
  const payload1 = { ...payload };
  payload1.name = "test";
  const createResponse = await client.catalougeTemplate.create(payload,'/catalouge')

  const updateResponse = await client.catalougeTemplate.delete('/catalouge',createResponse.result.catalougeResponse.result)
  console.log(
    "Delete response from Delete Catalouge ",
    JSON.stringify(updateResponse)
  );

  assert.equal(updateResponse.status.code, 200);
  assert.exists(updateResponse);
  assert.exists(updateResponse.status);
  assert.equal(updateResponse.status.code,200);
  assert.isFalse(updateResponse.status.error);
   const response = await     client.catalougeTemplate.getOne(`/catalouge`,`${createResponse.result.catalougeResponse.result}`);

  console.log("response from Update Catalouge", JSON.stringify(response));
  console.log(response.result);
  assert.equal(response.status.code, 404);
  assert.exists(response);
  assert.exists(response.status);
  assert.equal(response.status.code, 404);
  assert.isTrue(response.status.error);
 
});
it("Get Item from elastic ", async function () {
  const response = await client.catalougeTemplate.getAllItemFormElasticContainer();
  console.log("Response from Get Item from elastic ",JSON.stringify(response))
  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.status);
  assert.exists(response.result.hits);
  assert.equal(response.status.code, 200);
  assert.isFalse(response.status.error);
});
it("Search Item from elastic ", async function () {
  const response = await client.catalougeTemplate.getSearchedItemFromElasticContainer(`flipkart`);
  assert.equal(response.status.code, 200);
  assert.exists(response);
  assert.exists(response.status);
  assert.exists(response.result.hits);

  assert.equal(response.status.code, 200);
  assert.isFalse(response.status.error);
});});
  });
}
