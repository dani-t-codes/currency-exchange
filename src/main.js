import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./js/currency-service.js";
import DropdownExchange from "./js/dropdown-service.js";

function clearFields() {
  $("#numberToConvert").val("");
  $("#currency").val("");
}

function getElements(response) {
  const userDollarInput = $('input#numberToConvert').val();
  const currencyCode = ($('input#currency').val()).toUpperCase();
  if (response.conversion_rates) {
    if (isNaN(response.conversion_rates[currencyCode])) {
      $("#showErrors").html(`There was an error: ${response.error_type}`);
    } 
    else {
      $("#showConversion").html(`${currencyCode}: ${response.conversion_rates[currencyCode] * userDollarInput}. The conversion rate is ${response.conversion_rates[currencyCode]} to 1 USD.`);
    }
  } else {
    $("#showErrors").html((`There was an error: ${response.error_type}. Please try again.`));
  }
}

function getDropDownOpts(call) {
  if (call.conversion_rates) {
    let dropdownChoices = Object.entries(call.conversion_rates).map((key) => `<option value=${key}>${key}</option>`);
    $('select').append(dropdownChoices);
  } else {
    $('#showErrors').html(`There was a dropdown error: ${call.error_type}`);
  }
}
  
async function makeApiCall() {
  const response = await CurrencyExchange.getExchange();
  getElements(response);
}

async function makeApiDropdownCall() {
  const call = await DropdownExchange.getDropdown();
  getDropDownOpts(call);
}

$(document).ready(function() {
  $('#dropDownToConvert').click(function(event) {
    event.preventDefault();
    makeApiDropdownCall(); 
  });      
  $('#convertButton').click(function(event) {
    event.preventDefault();
    let currency = $('#currency').val();
    $("#hiddenResponse").show();
    makeApiCall(currency);
  });
  clearFields();
});