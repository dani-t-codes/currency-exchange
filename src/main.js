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
  const userDollarInput = $('#numberToConvert').val(); //added parseInt - returned same undefined result as it does w/o
  const currencyCode = $('#currency').val();
  if (response.conversion_rates) { //added Object.values & entries - no change
    if (isNaN(response.conversion_rates[currencyCode])) { //added Object.values - returned w/ undefined error
      $("#showErrors").html(`There was an error: ${response.result}`);
    } else if (response.conversion_rates[currencyCode]) {
      $("#showConversion").html(`${currencyCode}: ${response.conversion_rates[currencyCode] * userDollarInput}. The conversion rate is ${response.conversion_rates[currencyCode]} to 1 USD.`);
      //blank, undefined, Nan
    } else {
      $("#showErrors").html((`There was an error: ${response.result}. Please try again.`));
    }
  }
}

function getDropDownOpts(call) {
  for (let i=1; i <= call.conversion_rates.length; i++) {
    let values = Object.entries(call.conversion_rates[i].map((key, value) => `<option id="${key}" value="${value}" disabled>${key}</option>`));
    $('select').append(values);
  }
}
  
async function makeApiCall(currency) {
  const response = await CurrencyExchange.getExchange(currency);
  getElements(response);
}

async function makeApiDropdownCall(dropdownCall) {
  const call = await DropdownExchange.getDropdown(dropdownCall);
  getDropDownOpts(call);
}

$(document).ready(function() {
  $('#dropDownToConvert').click(function() {
    makeApiDropdownCall(dropdownCall); 
  });      
  $('#convertButton').click(function(event) {
    event.preventDefault();
    let currency = $('#currency').val();
    $("#hiddenResponse").show();
    clearFields();
    makeApiCall(currency);
  });
});