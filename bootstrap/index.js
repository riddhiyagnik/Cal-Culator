var screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
var screenValue = "";
var CalHistory = [];
for (item of buttons) {
  // addEventListener() - attaches an event handler to an element//
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    document.getElementById("History").innerHTML += buttonText;

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
      document.getElementById("History").innerHTML += screen.value + "<br>";
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
