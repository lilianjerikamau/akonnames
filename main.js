function calculate() {
    //select element by id

    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementById("gender").value;

    var dob = month + " " + day + ", " + year;
    var then = new Date(dob);
    var theday = then.getDay() + 1;
    var date = then.getDate();
    year = then.getYear();
    if (year < 100) year = "19" + then.getYear();
    else year = then.getYear();

//if gender is female ,give the following names

    if (gender == "female") {
        var weekday = new Array(6);
        weekday[1] = "Akosua";
        weekday[2] = "Adwoa";
        weekday[3] = "Abenaa";
        weekday[4] = "Akua";
        weekday[5] = "Yaa";
        weekday[6] = "Afua";
        weekday[7] = "Ama";
    } else if (gender == "male") {
        var weekday = new Array(6);
        weekday[1] = "Kwasi";
        weekday[2] = "Kwadwo";
        weekday[3] = "Kwabena";
        weekday[4] = "Kwaku";
        weekday[5] = "Yaw";
        weekday[6] = "Kofi";
        weekday[7] = "Kwame";
    } else {
        //if you select "gender" instead  of female or male it pops up an error

        alert("Sorry! Input a valid Gender value");
    }
    // if you select e.g 31st February or 31st september an error pops up

    if (day != date) alert("Sorry!  That appears to be an invalid date!");
    else {
        
            dayborn = weekday[theday];
            dob = dayborn ;
            alert("Your Akan name is " + dob);
        }
    
}