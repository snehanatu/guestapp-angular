class Guest {
    _id:string;
    name: string;
    roomSize: string;
    roomNum: number;
    payment: number;
    numNight: number;
    date: Date;
    status: string;
    
    constructor(

    ) {
        this.name = "";
        this.roomSize = "";
        //this.roomNum
        //this.payment
        //this.numNight
        this.date = new Date();   
        this.status = "";
    }
}

export default Guest;