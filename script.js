//display today's date at the top of the calendar
$(document).ready(function () {
  let pIDTime = moment().format("MMMM Do YYYY, h:mm:ss A");
  input = document.querySelector("myInput");
  $("#currentDay").text(pIDTime);
});

let timeBlock = document.querySelector(".time-block");
let tableTime = $("data-time");
let userInputSlot = document.querySelector(".time");

//save to local storage event
let addScheduled = $(".saveBtn").on("click", function (event) {
  event.preventDefault();

  let inputComp = $(this)
    .parent()
    .siblings(".td-time")
    .children()
    .closest("input");
  let key = inputComp.attr("data-time");
  let value = inputComp.val();

  //save to local storage
  localStorage.setItem(key, JSON.stringify(value));
});

//retrieve local storage data
getScheduled = function (addScheduled) {
  let retrievedScheduled = this.getItem("ScheduledList");
  return retrievedScheduled && JSON.parse(addScheduled);
  $(this).data - todo.add(inputVal);
};

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
