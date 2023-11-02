let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

// Add event listener for keyboard inputs
document.addEventListener('keydown', (e) => {
    let key = e.key;

    // Check if key is a number or an operator
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        string += key;
        input.value = string;
    }
    // Check for 'Enter' key for calculation
    else if (key === 'Enter') {
        string = eval(string);
        input.value = string;
    }
    // Check for 'Escape' key to clear the input
    else if (key === 'Escape') {
        string = "";
        input.value = string;
    }
    // Check for 'Backspace' key to delete the last character
    else if (key === 'Backspace') {
        string = string.substring(0, string.length-1);
        input.value = string;
    }
});
