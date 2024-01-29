/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthP = document.getElementById("lengthp")
const volumeP = document.getElementById("volumep")
const massP = document.getElementById("massp")
const metFeet = 3.281
const feetMet = 1/3.281
const litGal = 0.264
const galLit = 1/0.264
const kilPou = 2.204
const pouKil = 1/2.204
 

convertBtn.addEventListener("click", function(){
    let baseVal = inputEl.value
    const meters = baseVal * metFeet
    const feet = baseVal * feetMet
    const liters = baseVal * litGal
    const gallons = baseVal * galLit
    const kilos = baseVal * kilPou
    const pounds = baseVal * pouKil
    lengthP.textContent= `
         ${baseVal} meters = ${meters.toFixed(3)} feet | ${baseVal} feet = ${feet.toFixed(3)} meters
     `
     volumeP.textContent= `
        ${baseVal} liters = ${liters.toFixed(3)} gallons | ${baseVal} gallons = ${gallons.toFixed(3)} liters
    `
    massP.textContent= `
        ${baseVal} kilograms = ${kilos.toFixed(3)} pounds | ${baseVal} pounds = ${pounds.toFixed(3)} kilograms
    `  
})
