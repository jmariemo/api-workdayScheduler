// function to add current date subtitle in header
function currentDay() {
    var currentDay = document.getElementById("currentDay");
    currentDay.textContent = "Today is " + moment().format("dddd, MMMM Do YYYY");
}

// function to determine hour textarea bg color based on current hour
function hourColor() {
    var currentHour = dayjs();
    for (var i = 9; i < 18; i++) {
        if (i < currentHour.hour()) {
            $("#hour-" + i).addClass("past");
        } else if (i = currentHour.hour()) {
            $("hour-" + i).addClass("present");
        } else {
            $("hour-" + i).addClass("future");
        }
    }
}

currentDay();
hourColor();