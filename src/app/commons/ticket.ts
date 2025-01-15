export class Ticket {
    constructor(
        public ticketId:number,
        public ticketSeats:String,
        public ticketTotalPrice:number,
        public  ticketMovieTimeDate:Date,
        public  ticketMovieId:number,
        public  ticketMovieName:String,
        public  ticketTheaterName:String,
        public  ticketTheaterLocation:String

    ){}
}
