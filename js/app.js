document
  .getElementById("btn-calculate-expenses")
  .addEventListener("click", function () {
    // Fetching ang calculating
    const income = getValueById("income");
    const totalExpenses = getTotalExpenses();
    if (totalExpenses > income) {
      alert("Expenses can not be bigger than income.");
      exit;
    }

    // const balance = income - totalExpenses;
    const balance = calculateBalance();

    // Fetching value and placing the updated values
    setValueById("total-expenses", totalExpenses);
    setValueById("previous-balance", balance);
  });

document
  .getElementById("btn-save-money")
  .addEventListener("click", function () {
    const income = getValueById("income");
    const savingPercentage = getValueById("saving-percentage");

    // Validate input data
    validateInput("saving-percentage");

    // const balance = income - totalExpenses;
    const balance = calculateBalance();
    const savingAmount = income * (savingPercentage / 100);
    if (savingAmount > balance) {
      alert("Saving amount can not be greater than balance.");
    }
    const remainingBalance = balance - savingAmount;
    setValueById("saving-amount", savingAmount);
    setValueById("remaining-balance", remainingBalance);
  });
