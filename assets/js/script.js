var dateDisplayEl = document.querySelector("#currentDay");

dateDisplayEl.textContent = moment().format("dddd MMM Do");  

var currentDate = new Date();
var hours = currentDate.getHours();


console.log(currentDate); 
console.log(hours); 



// //assign a time value to each time block 
// var baseTime = new Date();
// var nineAmEl = baseTime.setHours(9);
var nineAm = moment().set("hour", 9);
console.timeLog(nineAm);
//evaluate the time to be past present or future 

//if in the past add class .past 
var timeEvaluation = function() {
    if (hours > 9){
        $("#nineAm").addClass("past")
    }
    // else if (hours > 10) {
        
    // }
}

//if in the present add class .present

//if in the future add class.future


