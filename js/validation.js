function validateInput(elementId) {
  const income = getValueById("income");
  const savingPercentage = getValueById(elementId);
  const savingAmount = income * (savingPercentage / 100);
  if (isNaN(savingPercentage)) {
    alert("ERROR !!! Only digits allowed.");
    exit;
  } else if (savingPercentage <= 0) {
    alert("NEGATIVE NUMBER GIVEN !!! Insert positive value.");
    exit;
  } else if (savingAmount > income) {
    alert("Saving can not be greater than income(100%)");
    exit;
  } else {
  }
}
