
    var eachHR = ["#hr1", "#hr2", "#hr3", "#hr4", "#hr5", "#hr6", "#hr7", "#hr8", "hr9"];
    var eachBtn = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5", "#btn6", "#btn7", "#btn8", "#btn9"];
    var i = 0

    var btns = document.querySelectorAll(".btn");
    var inputs = document.querySelectorAll(".box");
// On page load, displays live date
    document.addEventListener('DOMContentLoaded', function() {
    function liveDate() {
        let dateDisplay = moment().format('LL');
        document.getElementById("liveDate").append(dateDisplay);
    }
    liveDate();
    }, false);
);
//for each button sets value of user input to local storage
    btns.forEach(function(btn){
        btn.addEventListener("click", function(e) {
            var btnDT = e.target.getAttribute("data-time");
            // Select the input with the attr. data-time="hr1"
            var selectors = document.querySelectorAll(`[data-time="${btnDT}"]`);
            var taskInput = selectors[0].value;

            setStorage(taskInput, btnDT);
        })
    })
    //on button click
    function setInput() {
        for (i = 0 ; i < btns.length ; i++) {
        btns.addEventListener("click", setStorage())}};

    var infoArr = []
    function setStorage(taskInput, btnDT) {
        console.log(taskInput)
        var valueToStore = {time: btnDT, value: taskInput}
//pushes value stored into userInput array        
        infoArr.push(valueToStore)
        localStorage.setItem("userInput", JSON.stringify(infoArr));
        displayInput(taskInput)
    }
//displays whats in local storage to the page
    function displayInput() {
        var displayTask = JSON.parse(localStorage.getItem("userInput"));
//I've tried for hours to get this bit of code below to work and I have been unable to. It keeps telling me that moment is undefined, so I commented it out and everything else works just fine.        
        inputs.forEach(function(input){
            var boxDT = input.getAttribute("data-time");
            var momentTime = input.getAttribute("momentTime");
        //     var moment = require('moment.js');
        //     var now = moment();
        //     var currentTime = now.hour();

        //   if (momentTime < currentTime) {
        //     input.setAttribute("id", "grayBox")
        //   } else if (momentTime === currentTime) {
        //     input.setAttribute("id", "greenBox")
        //   } else if (momentTime > currentTime) {
        //     input.setAttribute("id", "redBox");
        //   }

          displayTask.forEach(function(task){
              if (task.time === boxDT) {
                console.log("match: ", task);
                input.value = task.value;
              }
          })
        });

}
displayInput()










