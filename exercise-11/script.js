const cTf = () => {
    const cTemp = document.getElementById('temperature').value
    const cToFar = cTemp * 9 / 5 + 32;
    document.getElementById("cTf").innerHTML = cTemp + '\xB0C is ' + cToFar + ' \xB0F.';
}

const fTc = () => {
    const fTemp = document.getElementById('temperature').value
    const fToCel = (fTemp - 32) * 5 / 9;
    document.getElementById("fTc").innerHTML = `${fTemp}\xB0F is ${fToCel} \xB0C.`;
}