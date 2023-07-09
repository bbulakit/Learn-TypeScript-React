function addTwo(num:any) { //interface like python!!
    return num+2;
}

function getUpper(val: string):string{
return val.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid:boolean){}

let loginUser = (name:string, email:string, isPaid:boolean=false) => {}

addTwo(3)
addTwo("5")
getUpper("hello");

signUpUser("bulakit", "mymail@email.com", true);
loginUser("bulakit", "mymail@email.com", false);

//arrow function
const getHello = (s: string):string => {
    return "Hello";
}

const herosArray = ["Peter Parker", "Miles Morales", "Gwen Stacy"];
//map return entirely new array, whereas forEach() doesn't
herosArray.map((hero):string => {
    return `hero is ${hero}`;
})

//void return nothing while never throws an exception
function consoleError(errmsg:string):void {
    console.log(errmsg);
    // return ""; //error because we set the return type as void
}

function handleError(errmsg:string):never{
    throw new Error(errmsg); // need throw exception for "never" type
}

export{}