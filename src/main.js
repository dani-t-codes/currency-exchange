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
  const userDollarInput = $('input#numberToConvert').val(); //added parseInt - returned same undefined result as it does w/o
  const currencyCode = $('input#currency').val();
  if (response.conversion_rates) { //if api call -- DON'T add Object.values & entries
    if (isNaN(response.conversion_rates[currencyCode])) { //added Object.x - returned w/ undefined red error
      console.log(Object.keys(response.conversion_rates));
      console.log(currencyCode);
      console.log(userDollarInput);
      $("#showErrors").html(`aaThere was an error: ${response.error_type}`);
    } 
    else { //response.conversion_rates[currencyCode]
      $("#showConversion").html(`${currencyCode}: ${response.conversion_rates[currencyCode] * userDollarInput}. The conversion rate is ${response.conversion_rates[currencyCode]} to 1 USD.`);
      //blank, undefined, Nan //added parseInt to $userDI - still undefined
    }
  } else {
    $("#showErrors").html((`bbThere was an error: ${response.error_type}. Please try again.`));
  }
}

function getDropDownOpts(call) {
  for (let i=1; i <= call.conversion_rates.length - 1; i++) {
    let values = Object.keys(call.conversion_rates[i].map((key) => `<option value="${key}">${key}</option>`));
    $('select').append(values);
  }
}
  
async function makeApiCall() {
  const response = await CurrencyExchange.getExchange();
  getElements(response);
}

async function makeApiDropdownCall() {
  const call = await DropdownExchange.getDropdown();
  getDropDownOpts(call);
  console.log("Yes!"); //Yes!
}

$(document).ready(function() {
  $('#dropDownToConvert').click(function(event) {
    event.preventDefault();
    // $('.dropdown').dropdown(); https://getbootstrap.com/docs/4.1/components/dropdowns/
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