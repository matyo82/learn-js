// set today
// for tset: const today = new Date(2024,11,26);
const today = new Date();
// set christmas date
const christmas  = new Date(today.getFullYear(), 11, 25);

// Check if the current date is after December 25th
if (today.getMonth() === 11 && today.getDate() > 25){
    christmas.setFullYear(christmas.getFullYear() + 1);
}

// Calculate the difference in days and log the result
const one_day=1000*60*60*24;
console.log(`${Math.ceil((christmas.getTime() - today.getTime()) / one_day)} days left until Christmas!`); 

document.getElementById("christmas").innerHTML = `${Math.ceil((christmas.getTime() - today.getTime()) / one_day)} days left until Christmas!`
