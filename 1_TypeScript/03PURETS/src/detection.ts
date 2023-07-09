function detectType(val: number | string):(number|string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val + 69;
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase();
}

function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){ //string[]
            // for(let i = 0; i < strs.length; i++){
                for(const s of strs){
                console.log(s);
            }
        }else if(typeof strs === "string"){ //string
        console.log(strs);        
        }
        return
    }
    //null
    console.log("Please provide string or array of strings");
    return

}

// 'in' operator 
interface User{
    name: string,
    email:string,    
}

interface Admin{
    name: string,
    email:string,    
    isAdmin:boolean
}

function isAdmin(account: User | Admin):boolean {
    if("isAdmin" in account){
        return account.isAdmin;
    }
    return false
}

export{}