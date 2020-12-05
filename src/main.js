import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service.js";

function clearFields() {
  $("#numberToConvert").val("");
  $("#currency").val("");
}

function getElements(response) {
  let userDollarInput = $('#numberToConvert').val();
  let currencyCode = $('#currency').val();
  // for (const [key, value] of Object.entries(response.conversion_rates)) {
  if (response.conversion_rates[currencyCode]) {
    $("#showConversion").html(`${currencyCode}: ${response.conversion_rates[currencyCode] * userDollarInput}. The conversion rate is ${response.conversion_rates[currencyCode]} to 1 USD.`);
    console.log(`${currencyCode}: ${response.conversion_rates[currencyCode] * userDollarInput}. The conversion rate is ${response.conversion_rates[currencyCode]} to 1 USD.`);
  } else {
    $("#showErrors").html((`There was an error: ${response.message}. Please try again.`));
  }
}
// }

async function makeApiCall(currency) {
  const response = await CurrencyExchange.getExchange(currency);
  getElements(response);
}

//UI Logic
$(document).ready(function() {
  // $('#dropDownToConvert').click(function() {
  $('#convertButton').click(function(event) {
    event.preventDefault();
    $("#hiddenResponse").show();
    //user input
    const userDollarInput = $("#numberToConvert").val();
    const userCurrency = $('#currency').val(); 
    $("#showConversion").html(userDollarInput + userCurrency);
    clearFields();
    makeApiCall();
  });
});
// });