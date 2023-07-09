const score:Array<number> = [];
const names:Array<string> = [];

//only boolean and number
function identityOne(val: boolean|number): boolean | number{
    return val;
}

//any are accepted
function identityTwo(val: any): any{
    return val;
}


function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

type TestType = "test1" | "test2" | "test3";
let testVal:TestType = "test3";

identityThree<TestType>(testVal)
identityThree<TestType>("test1") //test4 or any will error

interface Bottle{
    brand:string,
    type:number
}

identityFour<Bottle>({brand:"Regency",type:3});

//any or <Type> (generic) has no difference in performance
//but main purpose is for checking


function GetSearchProducts<T>(products: Array<T>): T[]{ // T[] or Array<T> are equivalent
    return products
}

//recall arrow function
const GetMoreSearchProducts = <T>(products: T[]): T => {
    const returnIndex = 2
    return products[returnIndex]
}