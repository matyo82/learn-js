let today = new Date();

// save day and moth and full year
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();

// Add leading zero if day or month is less than 10
dd = dd<10?`0${dd}`:dd;
mm = mm<10?`0${mm}`:mm;

today = `${mm}-${dd}-${yyyy}`;
// show in console
console.log(today);
console.log(`dd/mm/yyyy= ${mm}/${dd}/${yyyy}`);
console.log(`dd-mm-yyyy= ${dd}-${mm}-${yyyy}`);
console.log(`dd/mm/yyyy= ${dd}/${mm}/${yyyy}`);

// show in html page
document.getElementById("ToDay").innerHTML = `
    <h2>mm-dd-yyyy=<b> ${today}</b></h2>
    <h2>dd/mm/yyyy=<b> ${mm}/${dd}/${yyyy}</b></h2>
    <h2>dd-mm-yyyy=<b> ${dd}-${mm}-${yyyy}</b></h2>
    <h2>dd/mm/yyyy=<b> ${dd}/${mm}/${yyyy}</b></h2>
`