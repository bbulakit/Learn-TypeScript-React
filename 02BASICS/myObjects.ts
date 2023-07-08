const User = {
    name: "Bulakit",
    email: "myemail@email.com",
    isActive: true
};

// function createUser(name: string, isPaid: boolean){}
// const createUser = (name: string, isPaid: boolean) =>{}
// let newUser = {name: "Boy", isPaid: false, email:"boyEmail@email.com"};
// createUser(newUser.name, newUser.isPaid);

//name:string, price:number in {} are return type of object
function createCourse():{name:string, price:number}{
    return {
        name: "reactjs",
        price: 399
    }
}

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

type myString = string; //for what ?
let myStr:myString = "asd";
console.log(myStr);

function createUser(user: User):User{
    if(user == null){
        return {name: "", email: "", isActive: false}
    }
    return {name: user.name, email: user.email, isActive:true}
}

type Point = {
    x: number;
    y: number;
}

type ID = string | number; 

type Student={
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: CardDetails;
}

type CardNumber = {
    cardNumber: string;
    cardType?: string;
}

type CardDate ={
    cardDate: string;
}

type CardDetails = CardNumber & CardDate & {
    cvv:number;
}

let myStudent:Student = {
    _id: "1",
    name: "Bulakit",
    email: "myemail@email.com",
    isActive: true,
    credCardDetails: {
        cardNumber: "1234567890123456",
        // cardType: "visa",  ? = same in C# or VB that mean Nullable ?
        cardDate: "12/12/2020",
        cvv: 123
    }
}

myStudent.email = "myStudent@email.com"
// myStudent._id = "123"; // Readonly

export{};