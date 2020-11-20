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
  if (response.mainTODO) {
    $('#showConversion').text(`The converted rate in ${response.name TODO} is ${response.main.rate TODO}.`);
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

//Service Logic to currency-service
async function makeApiCall(currency) {
  const response = await CurrencyExchange.getCurrency(currency);
  getElements(response);
}

//UI Logic
$(document).ready(function() {
  $('#convertButton').click(function() {
    let currency = $('#currencyConversion').val();
    clearFields();
    makeApiCall(city);
  });
});