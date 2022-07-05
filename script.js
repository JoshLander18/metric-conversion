    //Unit Conversion

    //When the user clicks the convert button
    //The length, volume and mass elements show its calculations

    let unitEl = document.getElementById("unit-el")

    const lengthEl = document.getElementById("length-el")
    const volumeEl = document.getElementById("volume-el")
    const massEl = document.getElementById("mass-el")
    const convertBtn = document.getElementById("convert-btn")

    //Default Values on Page load
    lengthEl.textContent = "1 meters = 3.281 feet | 1 feet = 0.305 meters"
    volumeEl.textContent = "1 liters = 0.264 gallons | 1 gallons = 3.788 liters"
    massEl.textContent = "1 kilos = 2.204 pounds | 1 pounds = 0.454 kilos"


    //Listen for clicks when user clicks the convert button
    convertBtn.addEventListener("click", function() {
    const meters = unitEl.value / 3.281
    const feet = unitEl.value * 3.281
    const liters = unitEl.value / 0.264
    const gallons = unitEl.value * 0.264
    const kilograms = unitEl.value / 2.204
    const pounds = unitEl.value * 2.204

    //Length Conversion
    lengthEl.innerHTML = `${unitEl.value} meters = ${feet.toFixed(3)} feet | ${unitEl.value} feet = ${meters.toFixed(3)} meters`

    //Volume Conversion
    volumeEl.innerHTML = `${unitEl.value} liters = ${gallons.toFixed(3)} gallons | ${unitEl.value} gallons = ${liters.toFixed(3)} liters`

    //Mass Conversion
    massEl.innerHTML = `${unitEl.value} kilos = ${pounds.toFixed(3)} pounds | ${unitEl.value} pounds = ${kilograms.toFixed(3)} kilos`
    })
