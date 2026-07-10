const temperatureInput = document.getElementById("temperatureInput");
const unitSelect = document.getElementById("unitSelect");
const modeSelect = document.getElementById("modeSelect");
const convertBtn = document.getElementById("convertBtn");
const messageBox = document.getElementById("messageBox");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const ABSOLUTE_ZERO_C = -273.15;

function roundValue(value) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}

function setMessage(text, type = "") {
  messageBox.textContent = text;
  messageBox.className = `message ${type}`.trim();
}

function formatUnit(value, unit) {
  return `${roundValue(value)} ${unit}`;
}

function getConversions(value, unit) {
  let celsius;

  if (unit === "celsius") {
    celsius = value;
  } else if (unit === "fahrenheit") {
    celsius = (value - 32) * (5 / 9);
  } else {
    celsius = value - 273.15;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  return { celsius, fahrenheit, kelvin };
}

function validateInput(value, unit) {
  if (!Number.isFinite(value)) {
    return "Please enter a valid numeric temperature.";
  }

  const celsiusEquivalent = unit === "celsius"
    ? value
    : unit === "fahrenheit"
      ? (value - 32) * (5 / 9)
      : value - 273.15;

  if (celsiusEquivalent < ABSOLUTE_ZERO_C) {
    return "That value is below absolute zero. Please enter a higher temperature.";
  }

  return "";
}

function getSelectedOutputNode() {
  const unit = unitSelect.value;
  if (unit === "celsius") return celsiusResult;
  if (unit === "fahrenheit") return fahrenheitResult;
  return kelvinResult;
}

function updateVisibleOutputs(mode) {
  const showAll = mode === "all";
  [celsiusResult, fahrenheitResult, kelvinResult].forEach((node) => {
    node.parentElement.classList.toggle("hidden", !showAll && node !== getSelectedOutputNode());
  });
}

function convertTemperature() {
  const rawValue = temperatureInput.value.trim();
  const value = Number(rawValue);
  const unit = unitSelect.value;
  const validationMessage = validateInput(value, unit);

  if (validationMessage) {
    setMessage(validationMessage, "error");
    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";
    return;
  }

  const converted = getConversions(value, unit);

  celsiusResult.textContent = formatUnit(converted.celsius, "deg C");
  fahrenheitResult.textContent = formatUnit(converted.fahrenheit, "deg F");
  kelvinResult.textContent = formatUnit(converted.kelvin, "K");

  setMessage("Conversion completed successfully.", "success");
  updateVisibleOutputs(modeSelect.value);
}

function handleLiveValidation() {
  const rawValue = temperatureInput.value.trim();

  if (rawValue === "") {
    setMessage("Enter a temperature to see the conversion results.");
    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";
    updateVisibleOutputs(modeSelect.value);
    return;
  }

  const value = Number(rawValue);
  const validationMessage = validateInput(value, unitSelect.value);

  if (validationMessage) {
    setMessage(validationMessage, "error");
    return;
  }

  setMessage("Value looks good. Press Convert to update the results.", "success");
}

convertBtn.addEventListener("click", convertTemperature);
temperatureInput.addEventListener("input", handleLiveValidation);
unitSelect.addEventListener("change", () => {
  handleLiveValidation();
  if (temperatureInput.value.trim() !== "") {
    convertTemperature();
  }
});
modeSelect.addEventListener("change", () => {
  updateVisibleOutputs(modeSelect.value);
});

updateVisibleOutputs(modeSelect.value);
