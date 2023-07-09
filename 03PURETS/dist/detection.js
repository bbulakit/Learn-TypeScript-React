"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 69;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") { //string[]
            // for(let i = 0; i < strs.length; i++){
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") { //string
            console.log(strs);
        }
        return;
    }
    //null
    console.log("Please provide string or array of strings");
    return;
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
