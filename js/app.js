document
  .getElementById("btn-calculate-expenses")
  .addEventListener("click", function () {
    // Fetching ang calculating
    const income = getValueById("income");
    const food = getValueById("food");
    const rent = getValueById("rent");
    const others = getValueById("others");
    const totalExpenses = food + rent + others;
    const balance = income - totalExpenses;

    // Fetching value and placing the updated values
    setValueById("total-expenses", totalExpenses);
    setValueById("previous-balance", balance);
  });

document
  .getElementById("btn-save-money")
  .addEventListener("click", function () {
    const income = getValueById("income");
    const food = getValueById("food");
    const rent = getValueById("rent");
    const others = getValueById("others");
    const totalExpenses = food + rent + others;
    const balance = income - totalExpenses;
    const savingAmount = income * 0.2;
    const remainingBalance = balance - savingAmount;
    setValueById("saving-amount", savingAmount);
    setValueById("remaining-balance", remainingBalance);
  });
