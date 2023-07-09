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


//generic class
//purpose is, sometimes we wouldn't know about data type because it's depending on user
//method invoker/caller or some kind like that will define the data type himself
//improve performance in case of using any/object type which the data type will be converted to object before and aftter
//more flexible and reusable
function AnotherFunction<T, U extends number>(valOne:T, valTwo:U):object {
    return {valOne, valTwo}
}

// AnotherFunction(3,"3") // it's worked before U extends number
AnotherFunction(3,4.6);

interface Database{
    connection:string,
    username:string,
    password:string
}

function AnotherFunction2<T, U extends Database>(valOne:T, valTwo:U):object {
    return {valOne, valTwo}
}

AnotherFunction2(3, {connection: "localhost", username:"123", password:"123"})

const testDatabase:Database = {connection: "localhost", username: "test", password: "test"};

AnotherFunction2(1234, testDatabase)

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];
    addToCart = (products:T) => {
        this.cart.push(products)
    }
}