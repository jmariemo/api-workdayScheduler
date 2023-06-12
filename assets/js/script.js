$("#currentDay").text("Today is " + moment().format('dddd, MMMM Do YYYY'));

// set color to time-block text area depending on hour by adding class
function setHourColors() {
    var currentHour = dayjs();
    for (var i = 9; i <= 17; i++){
        if(i < currentHour.hour()){
            $("#hour-" + i).addClass("past");
        } else if (i == currentHour.hour()) {
            $("#hour-" + i).addClass("present");
        } else {
            $("#hour-" + i).addClass("future");
        }
    }
}

// loads color function on start
$(function() {
    setHourColors();
});
