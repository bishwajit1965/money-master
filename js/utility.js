function getValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.value;
  const elementValue = parseFloat(elementString);
  return elementValue;
}

function getValueByTagId(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementValue = parseFloat(elementString);
  return elementValue;
}

function setValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
