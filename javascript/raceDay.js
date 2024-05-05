let raceNumber = Math.floor(Math.random() * 1000);
let runnerEarly = true;
let runnerAge = 18;

if (runnerAge > 18 && runnerEarly) {
  raceNumber += 1000;
  console.log(
    "your race time is at 9:30 am , your race number is " + raceNumber
  );
} else if (runnerAge > 18 && !runnerEarly) {
  console.log(
    "your race time is at 11:00 am , your race number is " + raceNumber
  );
} else if (runnerAge < 18) {
  console.log(
    "your race time is at 12:30 pm, your race number is " + raceNumber
  );
} else {
  console.log("go to desk");
}
