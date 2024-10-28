function currentTime() {
    // Declare variables
    var d = new Date(); // Get current date
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current minutes
    var sec = d.getSeconds(); // Get current seconds
    var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)
    var timeDiff; // To store time difference between GMT hour and Local hour
    var adjTimeDiff; // To store time difference converted to positive number
    var timezone; // To store the time zone (PT, MT, CT, ET)
    var ampm;  // Declare empty variable to store AM or PM

    // Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    // Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    // Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; // Set to PM
    } else if (hr > 12) {
        hr -= 12; // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; // Set to PM
    } else {
        ampm = "AM"; // Set to AM
    }

    // Time zone calculation
    timeDiff = utchr - hr; // Calculate time difference between UTC and local time
    
    // Adjust time difference to be positive and assign time zones
    if (timeDiff <= 7) {
        timezone = "PT"; // Pacific Time (UTC-7 or UTC-8 depending on DST)
    } else if (timeDiff <= 6) {
        timezone = "MT"; // Mountain Time (UTC-6 or UTC-7 depending on DST)
    } else if (timeDiff <= 5) {
        timezone = "CT"; // Central Time (UTC-5 or UTC-6 depending on DST)
    } else {
        timezone = "ET"; // Eastern Time (UTC-4 or UTC-5 depending on DST)
    }

    // Assemble time format to display, including the timezone
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timezone;
    // Display current local time and time zone on HTML elements 
    document.getElementById("clock").innerText = time;
}

// Initial run of time data function
currentTime();

// Run time data function every 1 second
setInterval(currentTime, 1000);  
