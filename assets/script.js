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

var inputs = document.querySelectorAll(".box");
//for each input do this
inputs.forEach(function(input){
    input.addEventListener("click", function(event){
        event.preventDefault()
    });
})