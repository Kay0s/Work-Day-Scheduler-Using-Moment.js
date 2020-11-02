//display today's date at the top of the calendar
$(document).ready(function () {
  let pIDTime = moment().format("MMMM Do YYYY, h:mm:ss A");
  input = document.querySelector("myInput");
  $("#currentDay").text(pIDTime);
});

//getting and parsing info from storage
let storageSchedule = JSON.parse(localStorage.getItem("storageSchedule"));
storageSchedule.forEach((pair) => {
  console.log($(`.description`));

  console.log($(`.description[data-time=9]`));
  // this part is the selector. it selects a classname with the attribute data-time = to the number that is passed from each object in array.
  // $(`.description[data-time='${pair.key}']`)

  //.val(pair.value) that sets the value you are passing to the element you selected in the first section, the comments above.
  $(`.description[data-time='${pair.key}']`).val(pair.value);
});
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

  let inputComp = $(this).siblings(".description");
  let key = inputComp.attr("data-time");
  let value = inputComp.val();

  storageSchedule.push({ key, value });

  //save to local storage
  localStorage.setItem("storageSchedule", JSON.stringify(storageSchedule));
});

//.each loop to add CSS .present, .past and .future classes based on current time as defined by moment().hours()
//in comparison to "data-time" on the table
let timeId = moment().hours();

$(".description").each(function () {
  let tableInt = $(this).attr("data-time");
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).removeClass("future");

  if (parseInt(tableInt) === timeId) {
    $(this).addClass("present");
  } else if (parseInt(tableInt) > timeId) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});
