function solve(steps, stepLength, speed) {
    let distanceMeters = steps * stepLength;
    let speedForMeterInSec= speed / 3.6;

    let rest = Math.floor(distanceMeters/500);
    let time = distanceMeters /speedForMeterInSec + rest * 60;

    let timeInHours = Math.floor(time/3600);
    let timeInMins = Math.floor(time/60);
    let timeInSecs = Math.round(time % 60);

    if(time < 10){
        console.log(`0${timeInHours}:${timeInMins}:${timeInSecs}`)

    } else {
        console.log(`${timeInHours < 10 ? 0 : ""}${timeInHours}:${timeInMins < 10 ? 0 : ""}${timeInMins}:${timeInSecs < 10 ? 0 : "" }${timeInSecs}`)

    }
   
}

solve(2564, 0.70, 5.5)
