let score:number | string = 33;
score = 44;
score = "55";

type User ={
    name: string;
    id:number;
}

type Admin={
    username: string;
    id:number;
}

let bulakit: User|Admin = {name:"Bulakit",id:1234};

bulakit = {username:"Bulakit",id:5678};

function getDbId(id:number | string){
    //API Calls
    console.log(`DB id is : ${id}`);

    // id.toUpperCase(); //error -> need to check type first
    if(typeof id === "string"){
        id.toUpperCase();
    }else{
        // id.toUpperCase(); // error
    }

}

getDbId(3);
getDbId("4");


const data: (string | number | boolean)[] =["1", 2, "3", 4]
const anyData: any[] = [true, "2", 3];
let pi:3.14 = 3.14; //fixed pi = 3.14 in alternative way
let seasonal : "Summer" | "Spring" | "Winter" | "Fall";
seasonal = "Spring";
// seasonal = "Rainny" // error

export{}