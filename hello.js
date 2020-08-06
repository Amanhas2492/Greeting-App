const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const greetBtn = document.querySelector('.greet');
const cancelBtn = document.querySelector('.cancel');

//disable the cancel button as of now so it can't do anything 
//till the greeting is in progress
cancelBtn.disabled = true;

//Define our greeting function
function sayHi(who){
    alert('Hello ' + who + '!');
    //disable the cancel button once the greeting has been shown
    cancelBtn.disabled = true;
}

//create a global variable that will act as out timeout reference
let myGreeting;

//add event listener to our form to start the greeting

form.addEventListener('submit', (e) => {
//prevent form submission
e.preventDefault();
//enable cancel button
cancelBtn.disabled = false;
//set the timeout to greet the name entered in the input
myGreeting = setTimeout(sayHi, 5000, nameInput.value); 
});

//add the event listener to the cancel the greeting
cancelBtn.addEventListener('click', () => {
    clearTimeout(myGreeting);
    //disable the cancel button again
    cancelBtn.disabled = true;  
    console.log('cancelled');      
});
