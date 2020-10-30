const m = moment();
let today = moment().endOf("day");
let tomorrow = moment().add(1, "day").endOf("day");
let yesterday = moment().subtract(1, "days").endOf("day");
// moment("2016-01-01T23:35:01");
// moment().format("MMM Do YYYY, j:mm:ss a");
let now = moment();
moment().calendar();

//display today's date at the top of the calendar
$(document).ready(function () {
  let pIDTime = moment().format("MMMM Do YYYY, h:mm:ss A");
  input = document.querySelector("myInput");
  $("#currentDay").text(pIDTime);
});

// present time block for standard business hours when we scroll
//businessHours are 8AM - 5PM, M-F
//let Monday = moment().startOf("week").interval(moment.duration(-4, "day"));
//let Friday = moment().endOf("week").interval(moment.duration(1, "day"));
//let fromDate = today.startOf("week");
//let toDate = today.end)f("week");
//let 9Am = moment().startOf("hour").interval)(moment.duration)(-1 "hour");
//let 5Pm = moment().endOf("hour").interval)(moment.duration)(7 "hour");
//business.isWeekDay(someMoment);
//if (now is > 0800 || < 500 = open/true)
// moment().isBetween(moment-like, moment-like);
// if else (now is <800 || >500 = closed/false)
// moment().calendar(null, {
//   sameDay: function (now) {
//     if (this.isBefore(now)) {
//       return '[Will Happen Today]';
//     } else {
//       return '[Happened Today]';
//     }
//     /* ... */
//   }
// });

// let currentTime = now;
// let tdNineEl = $("#nine");
// let tdTenEl = $("#ten");
// let tdElevenEl = $("#eleven");
// let tdTwelveEl = $("#twelve");
// let tdOneEl = $("#one");
// let tdTwoEl = $("#two");
// let tdThreeEl = $("#three");
// let tdFourEl = $("#four");
// let tdFiveEl = $("#5");

// function addHourDisplayed() {
//   let startTime = moment().set({ hour: 9, minute: 0, second: 0 });
//   for (let hourCounter = 0; hourCounter < 8; hourCounter++) {
//     let timeSlot = moment(startTime)
//       .add(hourCounter, "hour")
//       .format("MMM D, YYYY h:mm A");
//     console.log(timeSlot);
//generate <tr>ref: row 11 + save to variable array
// .$("#nine")
// .text(9);
//   }
//   //attach variable name to tbody generate * attach table body rows
// }
// addHourDisplayed();


// // update past, present or future to its corresponding color
//the we can use moment.js to alter cs classes to
//query selector all. loop through all the elements and if (current element < moment.js time

 $("#td").each(function(i){
  if (this.data.time === now){
  this.addClass = ".present"; 
  }if(this.data.time === moment().isAfter){
  this.addClass = ".past";
  }if (this.data.time === moment().isBefore{
  this.addClass(".future");
  }
  }







//ifmoment().isSame(#tdID).addClass(.present);
// if else (data-time < now) = addClass(.past)
//moment().isAfter(#tdID).addClass(.past);
//if else (data-time > now) = addClass(.future)
// if moment().isBefore(#tdID).addClass(.future);



// // save text into local storage when the save button is pressed
// let saveBtnsEls = document.querySelectorAll(".saveBtn");
// console.log(saveBtnsEls);
// //add event listeners to the buttons w/for loop
// let nineSave = $("#9");
// let tenSave = $("#10");
// let elevenSave = $("#11");
// let twelveSave = $("#12");
// let oneSave = $("#1");
// let twoSave = $("#2");
// let threeSave = $("#3");
// let fourSave = $("#4");
// let fiveSave = $("#5");

let scheduled = [];

let addScheduled = $(".saveBtn").on("click", function (event) {
  event.preventDefault();

  let $parent = $(this).parents("tr");
  let $input = $parent.find("input");

  let inputVal = $input.val().trim();
  console.log(inputVal);
});

scheduled.append(scheduled);
document.input[0].reset(); //clear text from input

//save to local storage
this.setItem("ScheduledList", JSON.stringify(scheduled));

// retrieve local storage data
getScheduled = function (scheduled) {
  let retrievedScheduled = this.getItem("ScheduledList");
  return retrievedScheduled && JSON.parese(scheduled);
  $(this).("data - todo").add(inputVal);
};
