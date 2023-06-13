// add text to header with current date
$("#currentDay").text("Today is " + moment().format('dddd, MMMM Do YYYY'));

// set color to time-block text area depending on hour by adding class
function setHourColors() {
    var currentHour = dayjs();
    for (var i = 9; i <= 17; i++){
        if(i < currentHour.hour()){
            $("#hour" + i).addClass("past");
        } else if (i == currentHour.hour()) {
            $("#hour" + i).addClass("present");
        } else {
            $("#hour" + i).addClass("future");
        }
    }
}

// variables for storing and loading schedule entries
var eventsData = {};
var storedData = {};

// loads stored data if present
function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (eventsData !== null){
        generate();
      } else { 
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: ""
        };
    }
}

function generate(){
    for (var i = 9; i < 18; i++){
        let textBlockId = "hour"+ i;
        var textBlock = document.querySelector(`#${textBlockId}`);
        textBlock.textContent = eventsData["hour" + i];
    }
}

// set stored data
function handleSaveClick(event) {
    var hourBlock = $(event.target).parent();
    var text = hourBlock.children("textarea");
    var textValue = text.val();
    var hour = text.attr('id');
    eventsData[hour] = textValue; 
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

// loads color and stored data function on start
$(function() {
    setHourColors();
    loadStoredData();
});

// event listener on save button
$('.saveBtn').on('click', handleSaveClick);