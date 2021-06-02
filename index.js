var screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
var screenValue = "";
var CalHistory = [];
for (item of buttons) {
  // addEventListener() - attaches an event handler to an element//
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    // 'C' - To clear the screen//
    else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    }
    //To evaluate and return the element with ID attribute//
    else if (buttonText == "=") {
      screen.value = eval(screenValue);
      var calculation = { ques: screenValue, ans: screen.value };
      CalHistory.push(calculation);
      console.log(CalHistory);
      document.getElementById("History").innerHTML += screenValue + "=" + screen.value + "<br>";
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
//STOPWATCH//

var msec=0;
var sec=0;
var min=0;
var d=0;
var e=0;
var f=0;
var check=true;
var clear=0;
var stopwatch=document.getElementById('display');
stopwatch.innerHTML='00:00:00';
function start(){
    msec=addZeroMsec(msec+1);
    if(msec>99){
        sec=addZeroSec(sec+1);
        msec=addZeroMsec(0);
    }
    if(sec>59){
        sec=addZeroSec(0);
        msec=addZeroMsec(0);
        min=addZeroMin(min+1);
    }
    stopwatch.innerHTML=''+f+min+':'+e+sec+':'+d+msec;
}

function initiate(){
    if(check===true){
        check=false;
        clear=setInterval(start,10);
    }
}

function stop(){
    check=true;
    clearInterval(clear);
}

function reset(){
    msec=0;
    sec=0;
    min=0;
    check=true;
    clearInterval(clear);
    stopwatch.innerHTML='00:00:00';
}

function addZeroMsec(time){
    var length= time.toString().length;
    if(length<2){
        d=0;
    }
    else{
        d='';
    }
    return time;
}

function addZeroSec(time){
    var length=time.toString().length;
    if(length<2){
        e=0;
    }
    else{
        e='';
    }
    return time;
}

function addZeroMin(time){
    var length=time.toString().length;
    if(length<2){
        f=0;
    }
    else{
        f='';
    }
    return time;
}