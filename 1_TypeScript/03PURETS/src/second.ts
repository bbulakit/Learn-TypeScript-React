interface iTakePhoto{
    cameraMode: string
    filter:string
    burst:string    
}

interface iStory{
    createStory(): void
}

class Instagram implements iTakePhoto{
    constructor(
        public cameraMode: string,
        public filter:string,
        public burst:string,        
        ){
            this.cameraMode = cameraMode
            this.filter = filter
            this.burst = burst            
        }
}

class Youtube implements iTakePhoto, iStory{
    constructor(
        public cameraMode: string,
        public filter:string,
        public burst:string,
        public shutterSpeed:string
        ){
            this.cameraMode = cameraMode
            this.filter = filter
            this.burst = burst
            this.shutterSpeed = shutterSpeed
        }

    createStory(): void {
       console.log("Story was created"); 
    }
}