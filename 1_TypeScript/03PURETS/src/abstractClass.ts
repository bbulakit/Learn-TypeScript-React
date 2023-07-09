//similar to interface, but mroe flexible for implementing
//use interface when we need to create a framework before implementing in subclass later
//use implements

//use abstract when we know something would be duplicated in subclasses
//use extends 
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getReelTime():number{
        return 47;
    }
}

//Cannot create new instance of TakePhoto directly because it is abstract class
// const foo = new TakePhoto("cTest", "fTest");

class Instagram2 extends TakePhoto{
    constructor(cameraMode: string, filter: string, public burst:number) {
            super(cameraMode, filter); //Must have super() to override constructor
        }
    getSepia(): void {
        return console.log("Sepia is retuned");
    }
}

const foo = new Instagram2("cTest", "fTest", 99);

foo.getReelTime(); //directly from TakePhoto.getReelTime
foo.getSepia(); //need to declare in Instagram2