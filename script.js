//display today's date at the top of the calendar
$(document).ready(function () {
  let pIDTime = moment().format("MMMM Do YYYY, h:mm:ss A");
  input = document.querySelector("myInput");
  $("#currentDay").text(pIDTime);
});

//getting and parsing info from storage
let storageSchedule = JSON.parse(localStorage.getItem("storageSchedule"));

//checking to see if info is already in storage, if there isn't storageSchedule array is created
if (storageSchedule === null) {
  storageSchedule = [];
}

let timeBlock = document.querySelector(".time-block");
let tableTime = $("data-time");
let userInputSlot = document.querySelector(".time");

//save to local storage event
$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  let inputComp = $(this)
    .parent()
    .siblings(".td-time")
    .children()
    .closest("input");
  let key = inputComp.attr("data-time");
  let value = inputComp.val();

  storageSchedule.push({ key, value });

  //save to local storage
  localStorage.setItem("storageSchedule", JSON.stringify(storageSchedule));
});

// array for data
console.log($(".time-input[data-time='10']"));

//.each loop to add CSS .present, .past and .future classes based on current time as defined by moment().hours()
//in comparison to "data-time" on the table
let timeId = moment().hours();

$(".table-row").each(function () {
  let tableInt = $(this).children(".td-time").children().attr("data-time");
  if (parseInt(tableInt) === timeId) {
    $(this).addClass("present");
  } else if (parseInt(tableInt) < timeId) {
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  if (parseInt(tableInt) > timeId) {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});
