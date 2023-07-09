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
