//Tuples
let data1: [string, number, boolean];

// data1 = [123,false, "abc"]; // error becuase of declaration
data1 = ["abc", 123, true];

let rgb: [number, number, number] = [255,123,112];

type User = [number, string];
const newUser: User = [1112, "example@email.com"];

// newUser[0] = "567" // error
newUser[0] = 567 // 1112 -> 567


export{};