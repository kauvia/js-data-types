let speed = 0;
if (speed < 10) {
    console.log("I pulled you over coz u are going too slow.")
} else if (speed > 50) {
    console.log("pulled u over coz u r going too fast")
};

let tyrePressure = 0;
if (tyrePressure <10) {
    console.log("pulled u over coz u got flat tyre")
};
let driverVision = [6,6];
if ( (driverVision[0] / driverVision[1]) < 0.5) {
    console.log("sorry, u cant drive")
}
if ((driverVision[0] / driverVision[1]) > 1) {
    speed = 60;
    }

if (speed > 50 && (tyrePressure<10 || tyrePressure>100)){
    console.log("car crash")
}
if (speed < 10 && tyrePressure> 100){
    console.log ("rollng to a stop")
}
if ((driverVision[0] / driverVision[1]) > .5 && speed > 50){
    console.log("car crash")
}
