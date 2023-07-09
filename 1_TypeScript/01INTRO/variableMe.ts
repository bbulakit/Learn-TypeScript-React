//String
let greetings:string = "Hello, world!";

//Number -- not integer and no float type
let myNum:number = 69;
let myFloatNum:number = 3.14;


//Boolean
let myBool:boolean = false;
console.log(greetings);
console.log(`${typeof greetings} ${greetings} | ${typeof myNum} ${myNum} | ${typeof myFloatNum} ${myFloatNum} | ${typeof myBool} ${myBool}`);

//Any -- not recommended
let unknownHero;
function getHeo(){
    return "Hulk";
}
unknownHero = getHeo();
console.log(`${typeof unknownHero} ${unknownHero}`)


export{}; 
//this will create Object.defineProperty ..... in .js file with the same name after using command 'tsc {.ts file}'
//as typepiled (compiled TS to JS)