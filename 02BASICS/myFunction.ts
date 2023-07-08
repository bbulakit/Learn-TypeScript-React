function addTwo(num:any) { //interface like python!!
    return num+2;
}

function getUpper(val: string):string{
return val.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid:boolean){}

//arrow function
let loginUser = (name:string, email:string, isPaid:boolean=false) => {}

addTwo(3)
addTwo("5")
getUpper("hello");

signUpUser("bulakit", "mymail@email.com", true);
loginUser("bulakit", "mymail@email.com", false);

export{}