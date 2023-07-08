// const superHeroes: [] =[]; // any type in array
const superHeroes:string [] =[];
// const heroPower:number [] =[];
const heroPower: Array<number> = []; // same as above

//same methods as JavaScript
superHeroes.push("Spiderman");
heroPower.push(2);


type User ={
    name: string;
    isActive: boolean;
}

const allUsers: User[] = [];
allUsers.push({name: "Spiderwoman", isActive:true});



const MLModels : (number  | string)[][]=[
    [255,255,255],
    ["127", "127", "127"]
]

const ReadonlyModels : readonly number[][]=[
    [255,255,255]
];