var dateDisplayEl = document.querySelector("#currentDay");

dateDisplayEl.textContent = moment().format("dddd MMM Do");  

var currentDate = new Date();
var hours = currentDate.getHours();
var eventIdCounter = 0;

console.log(currentDate); 
console.log(hours); 

var events = [
    { 
    time: "9 a.m.",
    event: ""
    },
    { 
    time: "10 a.m.",
    event: ""
    },
    { 
    time: "11 a.m.",
    event: ""
    },
    { 
    time: "12 p.m.",
    event: ""
    },
    { 
    time: "1 p.m.",
    event: ""
    },
    { 
    time: "2 p.m.",
    event: ""
    },
    { 
    time: "3 p.m.",
    event: ""
    },
    { 
    time: "4 p.m.",
    event: ""
    },
    { 
    time: "5 p.m.",
    event: ""
    }];


var createEvent = function() {

    for (var i = 0; i > events.length; i++) {
        var eventList = document.querySelector(".container")

        var timeBlock = document.createElement("div");
        timeBlock.className = "row time-block";
        timeBlock.setAttribute = "time-block";
        timeBlock.textContent = "div";
        eventList.appendChild(timeBlock);

        // var timeEl = document.createElement("label");
        // timeEl.textContent = events.time;
        // timeEl.className = "col-xs-12 col-md-1 hour";
        // timeBlock.appendChild(timeEl);

        // var eventEl = document.createElement("textarea");
        // eventEl.addClass = "col-xs-12 col-md-10 description";
        // eventEl.setAttribute = (i+9);
        // timeBlock.appendChild(eventEl);

        // var saveBtnEl = document.createElement("button");
        // saveBtnEl.addClass = "col-xs-12 col-md-10 description";
        // saveBtnEl.addAttribute = "saveBtn col-xs-12 col-md-1";
        // saveBtnEl.innerHTML = '<span class="oi oi-file"></span>';
        // timeBlock.appendChild(saveBtnEl);
    }

}
createEvent();
//assign times to each event div event 

// compare the div hour to the current hour 
// if the div hour is less than our current hour assign class .past 

//if it is equal to the present hour assign the class .present

// if is greater than the current hour assign the class .future


// create time interval to recheck every 15 minutes




// var eventColor = function() {
//     if (hours ) {

//     }
//     else if (hours ){

//     }
// };



// var auditTask = function(eventEl) {
//     // get date from task element
//     var date = $(eventEl)
//       .find("span")
//       .text()
//       .trim();
  
//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);
  
//     // remove any old classes from element
//     $(eventEl).removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//       $(eventEl).addClass("list-group-item-danger");
//     } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(eventEl).addClass("list-group-item-warning");
//     }
//   };

// var eventEl = document.querySelectorAll("textarea")

// for ( i = 0; i > textarea.length; i++) {

//     if (textarea.id > hours) {
//         textarea.classList.add("past")
//     } 
//     else if (textarea.id == hours) {
//         textarea.classList.add("present")
//     }
//     textarea.classList.add("future")
// };


// // //assign a time value to each time block 
// var baseTime = new Date();
// var nineAmEl = baseTime.setHours(9);

// console.log(nineAmEl);