// these variables display the current date in the header
var currentDay = moment().format('dddd, MMM Do YYYY');
var timeNow = moment().hour();
$("#currentDay").html(currentDay);

// Once the save button is clicked, it will set the time and text in local storage.
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });
    })