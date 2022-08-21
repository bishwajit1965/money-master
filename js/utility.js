function getValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.value;
  const elementValue = parseFloat(elementString);
  if (elementValue === "") {
  }
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

function getTotalExpenses() {
  const food = getValueById("food");
  const rent = getValueById("rent");
  const others = getValueById("others");
  const totalExpenses = food + rent + others;
  return totalExpenses;
}

function calculateBalance() {
  const income = getValueById("income");
  const totalExpenses = getTotalExpenses();
  const balance = income - totalExpenses;
  return balance;
}
