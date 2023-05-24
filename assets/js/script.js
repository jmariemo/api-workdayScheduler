function currentDay() {
    var currentDay = document.getElementById("currentDay");
    currentDay.textContent = "Today is " + moment().format("dddd, MMMM Do YYYY");
}

currentDay();