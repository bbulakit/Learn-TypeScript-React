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

//getter - stter
class User3{
    protected _courseCount = 69;
    constructor(
        private email:string, 
        private name:string
        ){
        this.email = email;
        this.name = name;       
    }

    //private (inaccessible from outside)
    private deleteToken(){
        console.log("Token deleted");
    }

    //getter
    get GetAppleEmail():string{
        return `apple_${this.email}`;    
    }

    get GetOrangeName():string{
        return `${this.name}_orange`;
    }       

    get courseCount():number{
        return this._courseCount;
    }
    
    //setter    
    set SetNewEmail(email:string){
        this.email = email;
    }

    set SetNewName(name:string){
        this.name = name;
    }

    set courseCount(count:number){
        if(count <= 0){
            throw new Error("Count must greater than 0");            
        }
        this._courseCount = count;
    }
}

class SubUser extends User3{
    isFamily:boolean = true;
    changeCourseCount(newCount:number){
        //_courseCount will be inaccessible if _courseCount in User3 is private 
        //so, changed it to be protected instead
        this._courseCount = newCount;
    }
}

export{}