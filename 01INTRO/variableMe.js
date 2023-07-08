"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//String
var greetings = "Hello, world!";
//Number -- not integer and no float type
var myNum = 69;
var myFloatNum = 3.14;
//Boolean
var myBool = false;
console.log(greetings);
console.log("".concat(typeof greetings, " ").concat(greetings, " | ").concat(typeof myNum, " ").concat(myNum, " | ").concat(typeof myFloatNum, " ").concat(myFloatNum, " | ").concat(typeof myBool, " ").concat(myBool));
//Any -- not recommended
var unknownHero;
function getHeo() {
    return "Hulk";
}
unknownHero = getHeo();
console.log("".concat(typeof unknownHero, " ").concat(unknownHero));
//this will create Object.defineProperty ..... in .js file with the same name after using command 'tsc {.ts file}'
//as typepiled (compiled TS to JS)
