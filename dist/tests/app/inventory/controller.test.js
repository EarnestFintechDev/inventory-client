"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryControllerTest = void 0;
var client_test_1 = require("../../client.test");
var chai_1 = require("chai");
function inventoryControllerTest() {
    describe("Controller Test", function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                describe("Inventory Controller Test", function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            it("Create Inventory", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku420",
                                                    sellerId: "seller 420",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                response = _a.sent();
                                                console.log("response from Create Inventory", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 201);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.result);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 201);
                                                chai_1.assert.isFalse(response.status.error);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Create Inventory - different parameter", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku42",
                                                    sellerID: "seller 420",
                                                    unitt: "unit 4",
                                                    current: 0,
                                                };
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                response = _a.sent();
                                                console.log("response from Create Inventory - different parameter", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 500);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 500);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Read Inventory", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, createResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku4",
                                                    sellerId: "seller 4224",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getOne("/inventory", "".concat(createResponse.result))];
                                            case 2:
                                                response = _a.sent();
                                                console.log("response from Read Inventory", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.isFalse(response.status.error);
                                                chai_1.assert.equal(response.result.id, "sku4");
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Read Inventory - Not Found", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, createResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku450",
                                                    sellerId: "seller 450",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getOne("/inventory", "".concat(createResponse.result, "1"))];
                                            case 2:
                                                response = _a.sent();
                                                console.log("response from Read Inventory - Not Found", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 404);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 404);
                                                chai_1.assert.isTrue(response.status.error);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Update Inventory", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, payload1, createResponse, updateResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku451",
                                                    sellerId: "seller 4510",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                payload1 = __assign({}, payload);
                                                payload1.sellerId = "seller 451";
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.update(payload1, "/inventory", createResponse.result)];
                                            case 2:
                                                updateResponse = _a.sent();
                                                console.log("Upate response from Update Inventory", JSON.stringify(updateResponse));
                                                chai_1.assert.equal(updateResponse.status.code, 200);
                                                chai_1.assert.exists(updateResponse);
                                                chai_1.assert.exists(updateResponse.status);
                                                chai_1.assert.equal(updateResponse.status.code, 200);
                                                chai_1.assert.isFalse(updateResponse.status.error);
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getOne("/inventory", "".concat(createResponse.result))];
                                            case 3:
                                                response = _a.sent();
                                                console.log("response from Update Inventory", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.isFalse(response.status.error);
                                                chai_1.assert.equal(response.result.sellerId, "seller 451");
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Update Inventory - not found", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, payload1, createResponse, updateResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku461",
                                                    sellerId: "seller 461",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                payload1 = __assign({}, payload);
                                                payload1.sellerId = "seller 4610";
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                return [4 /*yield*/, client_test_1.client.catalougeTemplate.update(payload1, "/inventory", createResponse.result + 1)];
                                            case 2:
                                                updateResponse = _a.sent();
                                                console.log(createResponse.result + 1);
                                                console.log("Upate response from Update Inventory - not found", JSON.stringify(updateResponse));
                                                chai_1.assert.equal(updateResponse.status.code, 404);
                                                chai_1.assert.exists(updateResponse);
                                                chai_1.assert.exists(updateResponse.status);
                                                chai_1.assert.equal(updateResponse.status.code, 404);
                                                chai_1.assert.isTrue(updateResponse.status.error);
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getOne("/inventory", "".concat(createResponse.result))];
                                            case 3:
                                                response = _a.sent();
                                                console.log("response from Update Inventory - not found", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.isFalse(response.status.error);
                                                chai_1.assert.equal(response.result.id, "sku461");
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Delete Inventory - not found", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, payload1, createResponse, updateResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku481",
                                                    sellerId: "seller 481",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                payload1 = __assign({}, payload);
                                                payload1.sellerId = "seller 4810";
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.delete("/inventory", createResponse.result + 1)];
                                            case 2:
                                                updateResponse = _a.sent();
                                                console.log("Upate response from Delete Inventory - not found", JSON.stringify(updateResponse));
                                                chai_1.assert.equal(updateResponse.status.code, 404);
                                                chai_1.assert.exists(updateResponse);
                                                chai_1.assert.exists(updateResponse.status);
                                                chai_1.assert.equal(updateResponse.status.code, 404);
                                                chai_1.assert.isTrue(updateResponse.status.error);
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getOne("/inventory", "".concat(createResponse.result))];
                                            case 3:
                                                response = _a.sent();
                                                console.log("response from Delete Inventory - not found", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.isFalse(response.status.error);
                                                chai_1.assert.equal(response.result.id, "sku481");
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Delete Inventory ", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, payload1, createResponse, updateResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku491",
                                                    sellerId: "seller 491",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                payload1 = __assign({}, payload);
                                                payload1.sellerId = "seller 4910";
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.delete("/inventory", createResponse.result)];
                                            case 2:
                                                updateResponse = _a.sent();
                                                console.log("Upate response from Delete Inventory ", JSON.stringify(updateResponse));
                                                chai_1.assert.equal(updateResponse.status.code, 200);
                                                chai_1.assert.exists(updateResponse);
                                                chai_1.assert.exists(updateResponse.status);
                                                chai_1.assert.equal(updateResponse.status.code, 200);
                                                chai_1.assert.isFalse(updateResponse.status.error);
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getOne("/inventory", "".concat(createResponse.result))];
                                            case 3:
                                                response = _a.sent();
                                                console.log("response from Delete Inventory ", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 404);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 404);
                                                chai_1.assert.isTrue(response.status.error);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Increment inventory", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, createResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku422",
                                                    sellerId: "seller 422",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                console.log("response from Create Inventory", JSON.stringify(createResponse));
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.increaseInventory(createResponse.result, { incrementedBy: 5 })];
                                            case 2:
                                                response = _a.sent();
                                                console.log("response from Increment inventory", JSON.stringify(response.result));
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.result);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.equal(response.result.current, 5);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Decrement inventory", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, createResponse, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku700",
                                                    sellerId: "seller 700",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(payload, "/inventory")];
                                            case 1:
                                                createResponse = _a.sent();
                                                console.log("createResponse from decrement Inventory", JSON.stringify(createResponse));
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.decreaseInventory(createResponse.result, { decrementedBy: 1 })];
                                            case 2:
                                                response = _a.sent();
                                                console.log("response from decrement inventory", JSON.stringify(response));
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response);
                                                chai_1.assert.exists(response.result);
                                                chai_1.assert.exists(response.status);
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.equal(response.message, "we can't decrease the current value as it is 0 now");
                                                chai_1.assert.equal(response.result.current, 0);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Read Many - Pages", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var payload, i, result1, result2, result3, result4;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                payload = {
                                                    id: "sku481",
                                                    sellerId: "seller 481",
                                                    unit: "unit 4",
                                                    current: 0,
                                                };
                                                i = 0;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i < 12)) return [3 /*break*/, 4];
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.create(__assign(__assign({}, payload), { id: "sku50".concat(i), sellerId: "seller 451" }), "/inventory")];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3:
                                                i++;
                                                return [3 /*break*/, 1];
                                            case 4: return [4 /*yield*/, client_test_1.client.inventoryTemplate.getAll('/inventory', 1, 5, "id", "asc")];
                                            case 5:
                                                result1 = _a.sent();
                                                chai_1.assert.equal(result1.status.code, 200);
                                                chai_1.assert.isFalse(result1.status.error);
                                                chai_1.assert.equal(result1.result.length, 5);
                                                chai_1.assert.equal(result1.status.code, 200);
                                                chai_1.assert.equal(result1.result[0].id, "sku4");
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getAll('/inventory', 2, 5, "id", "asc")];
                                            case 6:
                                                result2 = _a.sent();
                                                console.log(result2.result[0].id);
                                                chai_1.assert.equal(result2.status.code, 200);
                                                chai_1.assert.isFalse(result2.status.error);
                                                chai_1.assert.equal(result2.result.length, 5);
                                                chai_1.assert.equal(result2.status.code, 200);
                                                chai_1.assert.equal(result2.result[0].id, "sku461");
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getAll('/inventory', 3, 5, "id", "asc")];
                                            case 7:
                                                result3 = _a.sent();
                                                chai_1.assert.equal(result3.status.code, 200);
                                                chai_1.assert.isFalse(result3.status.error);
                                                chai_1.assert.equal(result3.result.length, 5);
                                                chai_1.assert.equal(result3.status.code, 200);
                                                return [4 /*yield*/, client_test_1.client.inventoryTemplate.getAll('/inventory', 4, 5, "id", "asc")];
                                            case 8:
                                                result4 = _a.sent();
                                                chai_1.assert.equal(result4.status.code, 200);
                                                chai_1.assert.isFalse(result4.status.error);
                                                chai_1.assert.equal(result4.status.code, 200);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            return [2 /*return*/];
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    });
}
exports.inventoryControllerTest = inventoryControllerTest;
//# sourceMappingURL=controller.test.js.map