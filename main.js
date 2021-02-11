function calculate() {
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementById("gender");
    var dob = month + " " + day + ", " + year;
    var then = new Date(dob);
    var theday = then.getDay() + 1;
    var date = then.getDate();
    year = then.getYear();
    if (year < 100) year = "19" + then.getYear();
    else year = then.getYear();
    if (gender.value == "female") {
        var weekday = new Array(6);
        weekday[1] = "Akosua";
        weekday[2] = "Adwoa";
        weekday[3] = "Abenaa";
        weekday[4] = "Akua";
        weekday[5] = "Yaa";
        weekday[6] = "Afua";
        weekday[7] = "Ama";
    } else if (gender.value == "male") {
        var weekday = new Array(6);
        weekday[1] = "Kwasi";
        weekday[2] = "Kwadwo";
        weekday[3] = "Kwabena";
        weekday[4] = "Kwaku";
        weekday[5] = "Yaw";
        weekday[6] = "Kofi";
        weekday[7] = "Kwame";
    } else {
        alert("Sorry! Input a valid Gender value");
    }
            
        
    
        if (day != date) alert("Sorry!  That appears to be an invalid date!");
        else {
    
            dayborn = weekday[theday];

            dob = dayborn ;
            alert("Your Akon name is " + dob);
        }
    
}