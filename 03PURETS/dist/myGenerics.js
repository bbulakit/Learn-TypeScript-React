"use strict";
const score = [];
const names = [];
//only boolean and number
function identityOne(val) {
    return val;
}
//any are accepted
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
let testVal = "test3";
identityThree(testVal);
identityThree("test1"); //test4 or any will error
identityFour({ brand: "Regency", type: 3 });
//any or <Type> (generic) has no difference in performance
//but main purpose is for checking
function GetSearchProducts(products) {
    return products;
}
//recall arrow function
const GetMoreSearchProducts = (products) => {
    const returnIndex = 2;
    return products[returnIndex];
};
//generic class
//purpose is, sometimes we wouldn't know about data type because it's depending on user
//method invoker/caller or some kind like that will define the data type himself
//improve performance in case of using any/object type which the data type will be converted to object before and aftter
//more flexible and reusable
function AnotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
// AnotherFunction(3,"3") // it's worked before U extends number
AnotherFunction(3, 4.6);
function AnotherFunction2(valOne, valTwo) {
    return { valOne, valTwo };
}
AnotherFunction2(3, { connection: "localhost", username: "123", password: "123" });
const testDatabase = { connection: "localhost", username: "test", password: "test" };
AnotherFunction2(1234, testDatabase);
class Sellable {
    constructor() {
        this.cart = [];
        this.addToCart = (products) => {
            this.cart.push(products);
        };
    }
}
