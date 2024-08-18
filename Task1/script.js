function convert() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var unitFrom = document.getElementById("unitFrom").value;
  var unitTo = document.getElementById("unitTo").value;

  var convertedTemperature;

  if (unitFrom === "celsius") {
    if (unitTo === "fahrenheit") {
      convertedTemperature = (temperature * 9) / 5 + 32;
    } else if (unitTo === "kelvin") {
      convertedTemperature = temperature + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (unitFrom === "fahrenheit") {
    if (unitTo === "celsius") {
      convertedTemperature = ((temperature - 32) * 5) / 9;
    } else if (unitTo === "kelvin") {
      convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (unitFrom === "kelvin") {
    if (unitTo === "celsius") {
      convertedTemperature = temperature - 273.15;
    } else if (unitTo === "fahrenheit") {
      convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
    } else {
      convertedTemperature = temperature;
    }
  }

  document.getElementById("result").innerText =
    temperature +
    " " +
    unitFrom +
    " is equal to " +
    convertedTemperature.toFixed(2) +
    " " +
    unitTo;
  document.getElementById("result").style.display = "block";
}
