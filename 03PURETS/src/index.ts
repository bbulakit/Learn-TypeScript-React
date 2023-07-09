class User{
    //initialize private variables
    private email:string;
    public readonly name:string;
    city:string = ""; //it need to be intialized if not in constructor
    //constructor
    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
}

const user1 = new User("user1@user.com", "user1xx")
user1.city = "Bangkok"
// console.log(user1.name)

//better way of class declaration
class User2{
    city:string = "";
    constructor(
        private email:string, 
        public readonly name:string
        ){
            this.email = email;
            this.name = name;                        

    }
}

const user2 = new User2("user2@user.com", "user2zz")
