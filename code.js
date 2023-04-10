var arrInterval = new Array();
//The function to make the audio work on the website.
function playSound(soundSrc){
    var sound = document.createElement("audio");
    sound.src = soundSrc
    sound.setAttribute("controls", "auto");
    document.body.appendChild(sound);
    play = function(){
        sound.play();
    }
    stop = function(){
        sound.pause();
    }
}


function startButtonClick(){
    //dont let the user click the start button while the countdown is running 
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    //This is a timeout function, counts down by five each time and changes the "innerHTML". Which is the text on the website.
    var countdownElem = document.getElementById("countdown");
    runTimer(countdownElem);
}

function stopButtonClick(){
    //
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
for (counter = 0; counter < 11; counter++){
    clearTimeout(arrInterval[counter]);
}

}
//This function will ask for the first name, last name, badge number
//the names need to be less than 20 characters and the bagde number needs to be 3 characters ot less
function getUserInput(){
   //these variable get the name and adge to store it
    var fullName = "";
    var badgeNumber = "";
    //prompts that ask for the name of the person 
 do{
    var firstName = prompt("Please Enter First Name (under 10 characters)");
    var lastName = prompt("Please Enter Last Name (under 10 characters");

    fullName = firstName + " " + lastName;

    if(fullName.length > 20){
        alert("Please enter a shorter name. Length was: " + fullName.length);
    }
 }
 while(fullName > 20);

do{
    badgeNumber = prompt("Please enter your badge number (Less than 3 digits)");
    if(badgeNumber > 999){
        alert("Please enter a badge number with 3 digits max");
    }
}

 while(badgeNumber > 999);

 return fullName + " " + badgeNumber; 
}
// A function that holds the countdown from the spacepage script, makes things more simpler.
function runTimer(countdownElem){
        //gives the current time and tracks
        var currentTime = 50;
        //the end of the countdown, where it stops.
        var timeout = 0;
        //depicts how much it count down, in this case it goes down by five each time.
        var timeoutIncrement = 1000;
//manages the loop with the counter variable, multiple if statements that depends on how much time has passed.
        for(var counter=0; counter < 11; counter++){
        
        
            arrInterval[counter] = setTimeout(function(){
                //Once currentTime hits zero, the message below displays
                if(currentTime == 0){
                    alert("Blastoff!");
                countdownElem.innerHTML = 'launch successful';
                }
                // Displays a message when at the halfway mark
                else if(currentTime<25){
    
                    countdownElem.innerHTML = "Warning less than 1/2 way to launch, time left = " + currentTime;
                }
                //This is just the regular display when counting down.
                else{
                    countdownElem.innerHTML = currentTime;
                }
                
                currentTime = currentTime - 5;
    
    
            }, timeout);
            timeout=timeout+ timeoutIncrement;
        
        
    
       
    }
}
