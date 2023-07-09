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
//getter - stter
class User3 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 69;
        this.email = email;
        this.name = name;
    }
    //private (inaccessible from outside)
    deleteToken() {
        console.log("Token deleted");
    }
    //getter
    get GetAppleEmail() {
        return `apple_${this.email}`;
    }
    get GetOrangeName() {
        return `${this.name}_orange`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter    
    set SetNewEmail(email) {
        this.email = email;
    }
    set SetNewName(name) {
        this.name = name;
    }
    set courseCount(count) {
        if (count <= 0) {
            throw new Error("Count must greater than 0");
        }
        this._courseCount = count;
    }
}
class SubUser extends User3 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount(newCount) {
        //_courseCount will be inaccessible if _courseCount in User3 is private 
        //so, changed it to be protected instead
        this._courseCount = newCount;
    }
}
