var eachHR = ["hr1", "hr2", "hr3", "hr4", "hr5", "hr6", "hr7", "hr8", "hr9"];
var eachBtn = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5", "#btn6", "#btn7", "#btn8", "#btn9"];
var i = 0
//take user input to each box
    //get box by id


//set user input to local storage
    //capture button click
    //get value of input
    //set said value to local storage


//display user input
    //display info from local storage
    //option to clear input by user
    //store function to display user input from local storage for use in multiple circumstances
var arr = [1,2,3,4,5];



//Moment.JS
var btns = document.querySelectorAll(".btn");
var inputs = document.querySelectorAll(".box");
//for each input do this
//inputs.forEach(setInput);

    btns.forEach(function(btn){
        btn.addEventListener("click", function(e) {
            var btnDT = e.target.getAttribute("data-time");
            // Select the input with the attr. data-time="hr1"
           var selectors = document.querySelectorAll(`[data-time="${btnDT}"]`);
            var taskInput = selectors[0].value;

            setStorage(taskInput, btnDT)
        })
    })

        
    function setInput() {
        for (i = 0 ; i < btns.length ; i++) {
        btns.addEventListener("click", setStorage())}};

    function setStorage(taskInput, btnDT) {
        console.log(taskInput)
        var valueToStore = {time: btnDT, value: taskInput}
        localStorage.setItem("userInput", JSON.stringify(valueToStore));
        displayInput(taskInput)
        //get whats currently in local storage
        //which will be an array
        //localStorage should be an array of valuetoStore
        //save said array to local storage
    }

function displayInput(i) {
    var displayTask = JSON.parse(localStorage.getItem("userInput"));
    i = displayTask;
    //get previous array from local storage
    //loop through values to display in cooresponding boxes
}
