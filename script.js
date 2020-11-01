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
  let $parent = $(this).parents("tr");
  let $input = $parent.find("input");
  let inputVal = $input.val().trim();
  console.log(inputVal);
//save to local storage
this.setItem("ScheduledList", JSON.stringify(addScheduled));
});


// retrieve local storage data
getScheduled = function (addScheduled) {
  let retrievedScheduled = this.getItem("ScheduledList");
  return retrievedScheduled && JSON.parse(addScheduled);
  $(this).data - todo.add(inputVal);
};

//.each loop to add CSS present, past and future colors based on current time
$("tr").each(function (i) {
  let parseInt("#timeId") = moment().hours();
  if (data.time === timeId) {
    this.addClass("present");
  } else if (data.time < timeId) {
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  if (data.time > timeId) {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});
