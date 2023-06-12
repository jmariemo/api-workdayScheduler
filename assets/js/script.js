// use moment.js to load current day into header
$("#currentDay").text(`Today is ${moment().format("dddd, MMMM Do YYYY")}`);

// function to determine hour textarea bg color based on current hour
function hourColor() {
    var now = dayjs();
    for (var i = 9; i <= 17; i++) {
        if (i < now.hour()) {
            $("#hour-" + i).addClass("past");
        } else if (i = now.hour()) {
            $("#hour-" + i).addClass("present");
        } else {
            $("#hour-" + i).addClass("future");
        }
    }
}

hourColor();


$(function() {
    hourColor();
});