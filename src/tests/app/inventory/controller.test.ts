import { client } from "../../client.test";
import { assert } from "chai";

export function inventoryControllerTest() {
  describe("Controller Test", async function () {
    describe("Inventory Controller Test", async function () {
      it("Create Inventory", async function () {
        const payload = {
          id: "sku420",
          sellerId: "seller 420",
          unit: "unit 4",
          current: 0,
        };
        const response = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );

        console.log("response from Create Inventory", JSON.stringify(response));
        assert.equal(response.status.code, 201);
        assert.exists(response);
        assert.exists(response.result);
        assert.exists(response.status);
        assert.equal(response.status.code, 201);
        assert.isFalse(response.status.error);
      });
      it("Create Inventory - different parameter", async function () {
        const payload = {
          id: "sku42",
          sellerID: "seller 420",
          unitt: "unit 4",
          current: 0,
        };
        const response = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );
        console.log(
          "response from Create Inventory - different parameter",
          JSON.stringify(response)
        );

        assert.equal(response.status.code, 500);
        assert.exists(response);
        assert.exists(response.status);
        assert.equal(response.status.code, 500);
      });
      it("Read Inventory", async function () {
        const payload = {
          id: "sku4",
          sellerId: "seller 4224",
          unit: "unit 4",
          current: 0,
        };
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );
        const response = await client.inventoryTemplate.getOne(
          `/inventory`,
          `${createResponse.result}`
        );
        console.log("response from Read Inventory", JSON.stringify(response));

        assert.equal(response.status.code, 200);
        assert.exists(response);
        assert.exists(response.status);
        assert.equal(response.status.code, 200);
        assert.isFalse(response.status.error);
        assert.equal(response.result.id, "sku4");
      });
      it("Read Inventory - Not Found", async function () {
        const payload = {
          id: "sku450",
          sellerId: "seller 450",
          unit: "unit 4",
          current: 0,
        };
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );
        const response = await client.inventoryTemplate.getOne(
          `/inventory`,
          `${createResponse.result}1`
        );

        console.log(
          "response from Read Inventory - Not Found",
          JSON.stringify(response)
        );

        assert.equal(response.status.code, 404);
        assert.exists(response);
        assert.exists(response.status);
        assert.equal(response.status.code, 404);
        assert.isTrue(response.status.error);
      });
      it("Update Inventory", async function () {
        const payload = {
          id: "sku451",
          sellerId: "seller 4510",
          unit: "unit 4",
          current: 0,
        };
        const payload1 = { ...payload };
        payload1.sellerId = "seller 451";
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );

        const updateResponse = await client.inventoryTemplate.update(
          payload1,
          "/inventory",
          createResponse.result
        );

        console.log(
          "Upate response from Update Inventory",
          JSON.stringify(updateResponse)
        );

        assert.equal(updateResponse.status.code, 200);
        assert.exists(updateResponse);
        assert.exists(updateResponse.status);
        assert.equal(updateResponse.status.code, 200);
        assert.isFalse(updateResponse.status.error);
        const response = await client.inventoryTemplate.getOne(
          `/inventory`,
          `${createResponse.result}`
        );
        console.log("response from Update Inventory", JSON.stringify(response));

        assert.equal(response.status.code, 200);
        assert.exists(response);
        assert.exists(response.status);
        assert.equal(response.status.code, 200);
        assert.isFalse(response.status.error);
        assert.equal(response.result.sellerId, "seller 451");
      });
      it("Update Inventory - not found", async function () {
        const payload = {
          id: "sku461",
          sellerId: "seller 461",
          unit: "unit 4",
          current: 0,
        };
        const payload1 = { ...payload };
        payload1.sellerId = "seller 4610";
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );
        const updateResponse = await client.catalougeTemplate.update(
          payload1,
          "/inventory",
          createResponse.result + 1
        );
         console.log(createResponse.result+1)
        console.log(
          "Upate response from Update Inventory - not found",
          JSON.stringify(updateResponse)
        );

        assert.equal(updateResponse.status.code, 404);
        assert.exists(updateResponse);
        assert.exists(updateResponse.status);
        assert.equal(updateResponse.status.code, 404);
        assert.isTrue(updateResponse.status.error);
        const response = await client.inventoryTemplate.getOne(
          `/inventory`,
          `${createResponse.result}`
        );
        console.log(
          "response from Update Inventory - not found",
          JSON.stringify(response)
        );

        assert.equal(response.status.code, 200);
        assert.exists(response);
        assert.exists(response.status);
        assert.equal(response.status.code, 200);
        assert.isFalse(response.status.error);
        assert.equal(response.result.id, "sku461");
      });
      it("Delete Inventory - not found", async function () {
        const payload = {
          id: "sku481",
          sellerId: "seller 481",
          unit: "unit 4",
          current: 0,
        };
        const payload1 = { ...payload };
        payload1.sellerId = "seller 4810";
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );
        const updateResponse = await client.inventoryTemplate.delete(
          "/inventory",
          createResponse.result + 1
        );
        console.log(
          "Upate response from Delete Inventory - not found",
          JSON.stringify(updateResponse)
        );

        assert.equal(updateResponse.status.code, 404);
        assert.exists(updateResponse);
        assert.exists(updateResponse.status);
        assert.equal(updateResponse.status.code, 404);
        assert.isTrue(updateResponse.status.error);
        const response = await client.inventoryTemplate.getOne(
          `/inventory`,
          `${createResponse.result}`
        );
        console.log(
          "response from Delete Inventory - not found",
          JSON.stringify(response)
        );

        assert.equal(response.status.code, 200);
        assert.exists(response);
        assert.exists(response.status);
        assert.equal(response.status.code, 200);
        assert.isFalse(response.status.error);
        assert.equal(response.result.id, "sku481");
      });
      it("Delete Inventory ", async function () {
        const payload = {
          id: "sku491",
          sellerId: "seller 491",
          unit: "unit 4",
          current: 0,
        };
        const payload1 = { ...payload };
        payload1.sellerId = "seller 4910";
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );
        const updateResponse = await client.inventoryTemplate.delete(
          "/inventory",
          createResponse.result
        );
        console.log(
          "Upate response from Delete Inventory ",
          JSON.stringify(updateResponse)
        );

        assert.equal(updateResponse.status.code, 200);
        assert.exists(updateResponse);
        assert.exists(updateResponse.status);
        assert.equal(updateResponse.status.code, 200);
        assert.isFalse(updateResponse.status.error);
        const response = await client.inventoryTemplate.getOne(
          `/inventory`,
          `${createResponse.result}`
        );
        console.log(
          "response from Delete Inventory ",
          JSON.stringify(response)
        );

        assert.equal(response.status.code, 404);
        assert.exists(response);
        assert.exists(response.status);
        assert.equal(response.status.code, 404);
        assert.isTrue(response.status.error);
      });
      it("Increment inventory", async function () {
        const payload = {
          id: "sku422",
          sellerId: "seller 422",
          unit: "unit 4",
          current: 0,
        };
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );
        console.log(
          "response from Create Inventory",
          JSON.stringify(createResponse)
        );
        const response = await client.inventoryTemplate.increaseInventory(
          createResponse.result,
          { incrementedBy: 5 }
        );
        console.log(
          "response from Increment inventory",
          JSON.stringify(response.result)
        );

        assert.equal(response.status.code, 200);
        assert.exists(response);
        assert.exists(response.result);
        assert.exists(response.status);
        assert.equal(response.status.code, 200);
        assert.equal(response.result.current, 5);
      });
      it("Decrement inventory", async function () {
        const payload = {
          id: "sku700",
          sellerId: "seller 700",
          unit: "unit 4",
          current: 0,
        };
        const createResponse = await client.inventoryTemplate.create(
          payload,
          "/inventory"
        );

        const response = await client.inventoryTemplate.decreaseInventory(
          createResponse.result,
          { decrementedBy: 1 }
        );
        assert.equal(response.status.code, 200);
        assert.exists(response);
        assert.exists(response.result);
        assert.exists(response.status);
        assert.equal(response.status.code, 200);
        assert.equal(
          response.message,
          "we can't decrease the current value as it is 0 now"
        );
        assert.equal(response.result.current, 0);
      });
        it("Read Many - Pages", async function () {
          const payload = {
                id: "sku481",
                sellerId: "seller 481",
                unit: "unit 4",
                current: 0,
              };
          for (let i = 0; i < 12; i++) {
           await client.inventoryTemplate.create({...payload, id: `sku50${i}`,sellerId: "seller 451", },"/inventory")
          }
          const result1 = await client.inventoryTemplate.getAll('/inventory',1,5,"id","asc")
    
          assert.equal(result1.status.code, 200);
          assert.isFalse(result1.status.error);
          assert.equal(result1.result.length, 5);
          assert.equal(result1.status.code, 200);
          assert.equal(result1.result[0].id, "sku4");
          const result2 = await client.inventoryTemplate.getAll('/inventory',2,5,"id","asc")
            console.log(result2.result[0].id)
          assert.equal(result2.status.code, 200);
          assert.isFalse(result2.status.error);
          assert.equal(result2.result.length, 5);
          assert.equal(result2.status.code, 200);
          assert.equal(result2.result[0].id, "sku461");
          const result3 = await client.inventoryTemplate.getAll('/inventory',3,5,"id","asc")
          assert.equal(result3.status.code, 200);
          assert.isFalse(result3.status.error);
          assert.equal(result3.result.length, 5);
          assert.equal(result3.status.code, 200);
          const result4 = await client.inventoryTemplate.getAll('/inventory',4,5,"id","asc")
          assert.equal(result4.status.code, 200);
          assert.isFalse(result4.status.error);
          assert.equal(result4.status.code, 200);
        });
       
    });
  });
}
