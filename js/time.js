// time*******
// define `theClockApp` stored in function to be ran
const theClockApp = () => {
    // Get and store current date and time with `new Date()` object
    const timeNow = new Date();
    // Check-Check: See all `Date()` methods and properties
    // console.log( timeNow );
  
    // Get current hours
    let gotHours = timeNow.getHours();
    // Get current minutes
    let gotMinutes = timeNow.getMinutes();
  
    // Check-Check: Is the data correct?
    // console.log(gotHours, gotMinutes, gotSeconds);
  
    // Get AM or PM
    const gotAmOrPM = gotHours >= 12 ? "PM" : "AM";
    // Get 12 hour format
    gotHours = gotHours % 12 || 12;
    // Optionally, append zero to single digit hours
    gotHours = gotHours < 10 ? `0${gotHours}` : gotHours;
    // Optionally, append zero to single digit minutes
    gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
    // GET
    // Get Hours
    const hours = document.querySelector(".hours");
    // Get minutes
    const minutes = document.querySelector(".minutes");
    // Get AM or PM
    const amOrPM = document.querySelector(".amOrPM");
    // SET
    // Set the hours
    hours.innerText = gotHours;
    // Set the minutes
    minutes.innerText = gotMinutes;
    // Set AM or PM
    amOrPM.innerText = gotAmOrPM;
  };
  // Re-run `theClockApp` every 1 second (1000 ms)
  setInterval(theClockApp, 1000);
  