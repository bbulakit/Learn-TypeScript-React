"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Bulakit",
    email: "myemail@email.com",
    isActive: true
};
// function createUser(name: string, isPaid: boolean){}
// const createUser = (name: string, isPaid: boolean) =>{}
// let newUser = {name: "Boy", isPaid: false, email:"boyEmail@email.com"};
// createUser(newUser.name, newUser.isPaid);
//name:string, price:number in {} are return type of object
function createCourse() {
    return {
        name: "reactjs",
        price: 399
    };
}
var myStr = "asd";
console.log(myStr);
function createUser(user) {
    if (user == null) {
        return { name: "", email: "", isActive: false };
    }
    return { name: user.name, email: user.email, isActive: true };
}
var myStudent = {
    _id: "1",
    name: "Bulakit",
    email: "myemail@email.com",
    isActive: true
};
myStudent.email = "myStudent@email.com";
