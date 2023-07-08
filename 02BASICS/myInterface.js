"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testUser = { dbId: 21, email: "testUser@gmail.com", userId: 213,
    startTrail: function () { return "Trail Started"; },
    //2ways declarations
    getCoupon: function (name, off) { return 1; } // Soln.A
    // getCoupon:(name: string = "Free Lunch", off:number =10) => {return 1} //Soln.B
};
