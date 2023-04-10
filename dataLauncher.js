var timer = 0;
var theTime = "";
var time_interval = 1000;

function start(){
    var timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function updateDisplay(){
    theTime = new Date();
    var theSeconds = (theTime.getSeconds()) < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds();
    var theMinutes = theTime.getMinutes();
    if(theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }
    var timeFormat = theTime.getHours() + ":" + theMinutes + ":" + theSeconds;

    document.getElementById("timestamp").innerHTML = timeFormat;
}