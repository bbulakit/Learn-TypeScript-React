//Enums like other languages
enum SeatChoice{
    AISLE=0,
    MIDDLE,
    WINDOW
}

const bSeat = SeatChoice.WINDOW

enum Position{
    RIGHT = "right",
    LEFT = "left",
    UP=2, //it's gonna be error if it's blank
    DOWN, //3
    CENTER //4
}

const bPosition = Position.UP