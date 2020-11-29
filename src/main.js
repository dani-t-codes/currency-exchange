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
}

//Business Logic
function getElements(response) {
  if (response.conversion_rates.AUD) {
    $('#showConversion').text(`The conversion rate is ${response.conversion_rates.AUD}.`);
    //$('#showConversion').text(`The equal dollar amount is (multiplication formula here).`);
  } else if (response.conversion_rates.BRL) {
    $('#showConversion').text(`The conversion rate is ${response.conversion_rates.BRL}.`);
  } else if (response.conversion_rates.EGP) {
    $('#showConversion').text(`The conversion rate is ${response.conversion_rates.EGP}.`);
  } else if (response.conversion_rates.EUR) {
    $('#showConversion').text(`The conversion rate is ${response.conversion_rates.EUR}.`);
  } else if (response.conversion_rates.IDR) {
    $('#showConversion').text(`The conversion rate is ${response.conversion_rates.IDR}.`); 
  } else if (response.conversion_rates.MAR) {
    $('#showErrors').text(`There was an error: ${response}`);
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

//dropdown logic testing
let dropdown = $('#currencyConversion');

dropdown.append('<option selected="true" disabled>Choose Currency</option>');
dropdown.prop('selectedIndex', 0);

const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

// Populate dropdown with list of currency rates
$.getJSON(url, function (data) {
  $.each(data, function (response, entry) {
    dropdown.append($('<option></option>').attr('value', response.conversion_rates).text(response.conversion_rate[entry]));
  });
});