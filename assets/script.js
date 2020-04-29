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

//Moment.JS
var btn = document.getElementsByClassName("btn")[i];
var inputs = document.querySelectorAll(".box");
//for each input do this
inputs.forEach(setInput);
        
    function setInput() {
        for (i = 0 ; i < btn.length ; i++) {
        btn.addEventListener("click", setStorage())}};

    function setStorage() {
        event.preventDefault();
        localStorage.setItem("userInput", inputs.value);
    }

function displayInput() {
    document.getElementsByClassName(".box") = localStorage.getItem("userInput");
}
