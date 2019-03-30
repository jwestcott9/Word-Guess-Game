// global variables 

var answer = ""; 
var choices = ["Bon Jovi", "Steven Tyler", "Bruce Springstein", "Freddie Mercury", "Jimi Hendrix","Elvis Presley","Janis Joplin", 
"Paul McCartney", "Mick Jagger", "Chuck Berry", "David Bowie"];
var dashes = ""; 
var computerText = document.getElementById("dashes");
var fxgx= document.getElementById("tried");
var compx =[""];
var dashesx = dashes.split("");
var wins = 0;
var failedGuess = "";
var failedCounter = 6;
var lives = document.getElementById("lives");
var wins = 0;
var losses = 0;
var printw = document.getElementById("wins");
var printl =document.getElementById("losses");
var hint = "";
var printh = document.getElementById("hint");
var imagesPrint = document.getElementById("hangman");


// set an onclick event that will generate a random value from an array and store it within the answer variable. 
$("#click-me").on("click", function reset () {
    failedGuess = "";
    dashes = "";
    fxgx.innerHTML = "Attempted: " + failedGuess;  
    failedCounter = 6;
    lives.innerHTML = "Lives: " + failedCounter
    var z = 0;
    printh.innerHTML= "click button for hint";
    
    answer = choices[Math.floor(Math.random()* choices.length)];
    
    if (answer === "Bon Jovi") {
    hint = "self titled band from america";
    }
    if (answer === "Steven Tyler"){
    hint = "he has a big mouth and is now a game show host";}
    
    if (answer === "Bruce Springstein") {
    hint= "American singer-songwriter and leader of the E Street Band";
    }
     if(answer === "Freddie Mercury") {
         hint = "He is regarded as one of the greatest singers in the history of popular music, and was known for his flamboyant stage persona and four-octave vocal range";
     }
    if (answer === "Jimi Hendrix"){
        hint = "Although his mainstream career spanned only four years, he is widely regarded as one of the most influential electric guitarists in the history of popular music";
    }
    if (answer === "Elvis Presley"){
        hint = "the king";
    }
    if (answer === "Janis Joplin"){
        hint = "famous female voacalist from the 60s & 70s";
    }
    if (answer === "Paul McCartney"){
        hint = "think british invasion";
    }
    if (answer === "Mick Jagger"){
        hint = "think british invasion";
    }
    if (answer === "Chuck Berry"){
        hint = "one of his songs is featured in back to the future";
    }
    if (answer === "David Bowie"){
        hint = "ziggy";
    }
    $("#hint-me").on("click", function (){
        printh.innerHTML= hint;
    })


// adding space
    for (i=0; i<answer.length; i++){
        if (answer[i] === " "){
            dashes = dashes +" ";
        }else{
        dashes = dashes+"_";}
   
    }

    // this sets that original dashes value equla to the length of the answer 
    computerText.textContent = dashes;
    
    // this starts the test fuction to see if the user guess equals a letter in the asnwer 
    document.onkeyup = function(){
        var userGuess= event.key;

    // some simple logic to select for letter inputs rather than meta tags...is there a a better way that will also not select numbers?
        if (userGuess.length === 1){

    // this logic splits that dashes and answer strings into arrays
        compx = answer.toLowerCase();
        compx = compx.split("");
        dashesx = dashes.split("");
    // dashesx will be the variable that gets manipulated.

  
     // these are some manipulation variables I use later on for counters
        var x = 0;
        var y = 0;
        var z = 0;
        
    // compx is essentially the answer split into an array and set to lower case
        for ( i=0; i<compx.length; i++ ){
            userGuess = userGuess.toLowerCase();
        
    // logic that will start the iterations whether the index is equal to the user guess or blank 
            if (dashesx[i] === "_" || dashesx[i] === userGuess){
    
    // here is where the dashes variable converts to the answer index if the user guesses correctly
            if (userGuess === compx[i]){
                dashesx[i] = answer[i];
                x++;
            } 
    // or else it repopulates the dashes variable with dashes
            else{dashesx[i]="_"};
            }
        }
    // some logic that will prevent printing failed guesses multiple times
        for ( i=0; i<failedGuess.length; i++){
            if (userGuess === failedGuess[i]){
                y++;            }
        }
    // here's where the computer actually prints the failed guess
    if (x === 0 && y === 0){
    failedGuess = failedGuess + userGuess + ", ";
    failedCounter--;
    lives.innerHTML = "lives:" + failedCounter; 
        if (failedCounter === 5){
            document.getElementById("hangman").src= "assets /images/hangman-1wrong.png"
        }
        if (failedCounter === 4){
            document.getElementById("hangman").src= "assets /images/hangman-2wrong.png"
        }
        if (failedCounter === 3){
            document.getElementById("hangman").src= "assets /images/hangman-3wrong.png"
        }
        if (failedCounter === 2){
            document.getElementById("hangman").src= "assets /images/hangman-4wrong.png"
        }
        if (failedCounter === 1){
            document.getElementById("hangman").src= "assets /images/hangman-5wrong.png"
        }
        if (failedCounter === 0){
            document.getElementById("hangman").src= "assets /images/hangman-start.png"
        }
    // here is where the computer wil change the images
    // for (i=6; i<failedCounter; i--){
    //     if failedCounter = 
    //             // It needs a variable that gets manipulated by how many wrong guesses are present or it 
    //             // coulf be 
    // }


        }
        dashes = dashesx.join("");
        computerText.innerHTML = dashes;
       
        for ( i=0; i<failedGuess.length; i++){
        if (userGuess!= failedGuess[i]){
        fxgx.innerHTML = "Attempted: " + failedGuess;}
    

        }

        if (failedCounter === 0){
            alert("you lost...the answer was " + answer);
            reset ();
            losses++;
            printl.innerHTML= "Losses: "+ losses;
        }
        for (i=0; i<dashes.length; i ++){
            if (dashes[i] !== "_"){
                z++;
            }
            if (z === dashes.length) {
                alert(answer + " You Win!!");
                wins++;
                printw.innerHTML = "Wins: " + wins;
                reset ();
            }
    }
    
    }
}})





    

