"use strict";

window.addEventListener("load", function() {
  const planSelect = document.getElementById("plan");
  const durationSelect = document.getElementById("duration");
  const totalCostElement = document.getElementById("totalCost");
  const planDetailsElement = document.getElementById("planDetails");

  function calculateTotal() {
    const planValue = parseFloat(planSelect.value);
    const durationValue = parseInt(durationSelect.value);

    if (isNaN(planValue) || isNaN(durationValue)) {
      totalCostElement.textContent = "$0.00";
      planDetailsElement.innerHTML = "";
      return;
    }

    const totalCost = planValue * durationValue;
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;

    // Display plan details
    let planDetails = "";
    switch (planSelect.value) {
      case "29.99":
        planDetails = "Includes basic gym access.";
        break;
      case "49.99":
        planDetails = "Includes basic gym access and unlimited group fitness classes.";
        break;
      case "79.99":
        planDetails = "Includes basic gym access, unlimited group fitness classes, personal training sessions, and spa access.";
        break;
      default:
        planDetails = "";
    }
    planDetailsElement.innerHTML = planDetails;
  }

  // Calculate initial total
  calculateTotal();

  // Add event listeners to update on changes
  planSelect.addEventListener("change", calculateTotal);
  durationSelect.addEventListener("change", calculateTotal);
});

document.getElementById("selectedPlan").textContent = selectedPlan;
document.getElementById("selectedDuration").textContent = selectedDuration;

const subtotal = planPrice * duration;
document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);

const taxRate = 0.05;
const tax = subtotal * taxRate;
document.getElementById("tax").textContent = "$" + tax.toFixed(2);

const total = subtotal + tax;
document.getElementById("total").textContent = "$" + total.toFixed(2)
