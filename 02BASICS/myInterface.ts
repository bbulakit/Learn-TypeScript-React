//Similar to something in JS
interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    gooleId?: string,    
    startTrail(): string
    
    //2ways declarations
    getCoupon(couponName:string, value:number): number   // Soln.A
    // getCoupon: (couponName:string, value:number) => number; // Soln.B
}

const testUser:User = {dbId:21, email: "testUser@gmail.com", userId:213, 
startTrail:() => { return "Trail Started"},

//2ways declarations
 getCoupon: (name:"Free Lunch",off:10) => {return 1} // Soln.A
// getCoupon:(name: string = "Free Lunch", off:number =10) => {return 1} //Soln.B
    
};

export{}