let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let history = [];
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
            
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
           
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            var calculation = {ques: screenValue, ans: screen.value}
          history.push(calculation)
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
  
    })
    
}


