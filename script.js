// these variables display the current date in the header
let currentDay = moment().format('dddd, MMM Do YYYY');
let timeNow = moment().hour();
$("#currentDay").html(currentDay);

// this variable links to the clear button 
let clearBtn = $('#clearButton');

// button to clear and reset the localStorage 
clearBtn.on("click", function () {
    localStorage.clear();
    location.reload();
});

// Once the save button is clicked, it will set the time and text in local storage.
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // retrieves what is stored in the local storage for the specified hour
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
})