"use strict";
function clock() {
    //Arrays of days
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //Arrays of months
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //Get all ids
    let hrs = document.getElementById('hours');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('seconds');
    let period = document.getElementById('ampm');
    let date = document.getElementById('ddmmyy');
    let day = document.getElementById('dd');
    //Date Objects
    let time = new Date();
    //console.log(time)
    //get all attribute of object
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let todayDate = time.getDate();
    let todayMonth = time.getMonth();
    let todayYear = time.getFullYear();
    /*console.log(todayDate)
    console.log(todayMonth)
    console.log(todayYear)*/
    //convert it to 12-hour format
    if (h > 12) {
        h = h - 12;
    }
    //If 'h' is 0, set it to 12 to maintain 12-hour format
    if (h == 0) {
        h = 12;
    }
    //// Determine whether it is AM or PM based on the value of 'h'
    let ampm = h <= 12 ? "AM" : "PM";
    // Add leading zero to h,m,s if it is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = months[todayMonth] + " | " + todayDate + " | " + todayYear;
}
setInterval(clock, 1000);
