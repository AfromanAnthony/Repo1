//an empty function for now
function startButtonClick(){}
//an empty function for now
function stopButtonClick(){}

// A function that holds the countdown from the spacepage script, makes things more simpler.
function runTimer(){
        //gives the current time and tracks
        var currentTime = 50;
        //the end of the countdown, where it stops.
        var timeout = 0;
        //depicts how much it count down, in this case it goes down by five each time.
        var timeoutIncrement = 5000;
//manages the loop with the counter variable, multiple if statements that depends on how much time has passed.
        for(var counter=0; counter < 11; counter++){
        
        
            setTimeout(function(){
                //Once currentTime hits zero, the message below displays
                if(currentTime == 0){
                    alert("Blastoff!");
                countdownElem.innerHTML = 'launch successful';
                }
                // Displays a message when at the halfway mark
                else if(currentTime>25){
    
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
