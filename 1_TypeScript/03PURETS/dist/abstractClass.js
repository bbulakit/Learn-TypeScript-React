"use strict";
//similar to interface, but mroe flexible for implementing
//use interface when we need to create a framework before implementing in subclass later
//use implements
//use abstract when we know something would be duplicated in subclasses
//use extends 
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 47;
    }
}
//Cannot create new instance of TakePhoto directly because it is abstract class
// const foo = new TakePhoto("cTest", "fTest");
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); //Must have super() to override constructor
        this.burst = burst;
    }
    getSepia() {
        return console.log("Sepia is retuned");
    }
}
const foo = new Instagram2("cTest", "fTest", 99);
foo.getReelTime(); //directly from TakePhoto.getReelTime
foo.getSepia(); //need to declare in Instagram2
