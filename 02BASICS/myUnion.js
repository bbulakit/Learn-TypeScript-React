"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var bulakit = { name: "Bulakit", id: 1234 };
bulakit = { username: "Bulakit", id: 5678 };
function getDbId(id) {
    //API Calls
    console.log("DB id is : ".concat(id));
    // id.toUpperCase(); //error -> need to check type first
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        // id.toUpperCase(); // error
    }
}
getDbId(3);
getDbId("4");
var data = ["1", 2, "3", 4];
var anyData = [true, "2", 3];
var pi = 3.14; //fixed pi = 3.14 in alternative way
var seasonal;
seasonal = "Spring";
