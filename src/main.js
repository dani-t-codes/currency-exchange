import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service.js";

function clearFields() {
  $("#numberToConvert").val("");
  $("#showUserInput").text("");
  $("#showConversion").text("");
  $("#showErrors").text("");
  $("#showRate").text("");
}

f//Business Logic
function getElements(response) {
  if (response.conversion_rates["AUD"]) {
    $('#showConversion').text(`The conversion rate is ${response.conversion_rates["AUD"]}.`);
    //$('#showConversion').text(`The equal dollar amount is (multiplication formula here).`);
  } else {
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
    event.preventDefault();

    let userDollarInput = $("input#numberToConvert");
    $("#userInput").html(userDollarInput);

    let currency = $('#currencyConversion').val();
    clearFields();
    makeApiCall(currency);
  });
});