"use strict";
class User {
    //constructor
    constructor(email, name) {
        this.city = ""; //it need to be intialized if not in constructor
        this.email = email;
        this.name = name;
    }
}
const user1 = new User("user1@user.com", "user1xx");
user1.city = "Bangkok";
// console.log(user1.name)
//better way of class declaration
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const user2 = new User2("user2@user.com", "user2zz");
