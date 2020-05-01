
    var eachHR = ["#hr1", "#hr2", "#hr3", "#hr4", "#hr5", "#hr6", "#hr7", "#hr8", "hr9"];
    var eachBtn = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5", "#btn6", "#btn7", "#btn8", "#btn9"];
    var i = 0

    var btns = document.querySelectorAll(".btn");
    var inputs = document.querySelectorAll(".box");
    //display user input
    //display info from local storage
    //option to clear input by user
    //store function to display user input from local storage for use in multiple circumstances
    //Moment.JS
    document.addEventListener('DOMContentLoaded', function() {
    function liveDate() {
        let dateDisplay = moment().format('LL');
        document.getElementById("liveDate").append(dateDisplay);

        var now = moment();
        var time = now.hour()
        if (time > 17 || time < 9) {
            inputs.forEach(function(input) {
                input.setAttribute("id", "grayBox")})
        } else if (time = 9) {
            inputs[0].setAttribute("id", "greenBox")
            inputs.slice(1).setAttribute("id", "redBox")
        } else if (time = 10) {
            inputs[0].setAttribute("id", "grayBox")
            inputs[1].setAttribute("id", "greenBox")
            inputs.slice(2).setAttribute("id", "redBox")
        } else if (time = 11) {
            inputs.slice(-1, -7).setAttribute("id", "grayBox")
            inputs[2].setAttribute("id", "greenBox")
            inputs.slice(2).setAttribute("id", "redBox")
        } else if (time = 12) {
            inputs.slice(-2, -6).setAttribute("id", "grayBox")
            inputs[3].setAttribute("id", "greenBox")
            inputs.slice(3).setAttribute("id", "redBox")
        } else if (time = 13) {
            inputs.slice(-3, -5).setAttribute("id", "grayBox")
            inputs[4].setAttribute("id", "greenBox")
            inputs.slice(4).setAttribute("id", "redBox")
        } else if (time = 14) {
            inputs.slice(-4, -4).setAttribute("id", "grayBox")
            inputs[5].setAttribute("id", "greenBox")
            inputs.slice(5).setAttribute("id", "redBox")
        } else if (time = 15) {
            inputs.slice(-5, -3).setAttribute("id", "grayBox")
            inputs[6].setAttribute("id", "greenBox")
            inputs.slice(6).setAttribute("id", "redBox")
        } else if (time = 16) {
            inputs.slice(-6, -2).setAttribute("id", "grayBox")
            inputs[7].setAttribute("id", "greenBox")
            inputs.slice(7).setAttribute("id", "redBox")
        } else if (time = 17) {
            inputs.slice(-7, -1).setAttribute("id", "grayBox")
            inputs[8].setAttribute("id", "greenBox")
            inputs.slice(8).setAttribute("id", "redBox")
        } else if (time < 17 || time > 9) {
            inputs.forEach(function(input) {
                input.setAttribute("id", "redBox");
            })
        }

    }
    liveDate();
    }, false);
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
        for (i = 0; i < inputs.length; i++) {
            inputs[i].append(displayTask);
        }
        //loop through values to display in cooresponding boxes
}
