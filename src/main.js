import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service-service.js";

function clearFields() {
  $("#numberToConvert").val("");
  $("#showUserInput").text("");
  $("#showConversion").text("");
  $("#showErrors").text("");
}
//Business Logic
function getElements(response) {
  if (response.conversion_rates.AUD) {
    $('#showConversion').text(`The converted rate from AUD is ${response.conversion_rates.AUD}.`);
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

//Service Logic to currency-service
async function makeApiCall(currency) {
  const response = await CurrencyExchange.getExchange(currency);
  getElements(response);
}

//UI Logic
$(document).ready(function() {
  $('#convertButton').click(function() {
    let currency = $('#currencyConversion').val();
    clearFields();
    makeApiCall(currency);
  });
});