//Enums like other languages
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var bSeat = SeatChoice.WINDOW;
var Position;
(function (Position) {
    Position["RIGHT"] = "right";
    Position["LEFT"] = "left";
    Position[Position["UP"] = 2] = "UP";
    Position[Position["DOWN"] = 3] = "DOWN";
    Position[Position["CENTER"] = 4] = "CENTER"; //4
})(Position || (Position = {}));
var bPosition = Position.UP;
