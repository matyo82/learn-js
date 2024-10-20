// set number
const number = Math.ceil(Math.random() * 10)
console.log(Number);
// Ask the user to guess a number
const gnum = prompt('Guess the number between 1 and 10 inclusive');
// Check condition
if (number == gnum){
    alert("Good Work!")
} else {
    alert("Not Mach! Number is " + number)
}
