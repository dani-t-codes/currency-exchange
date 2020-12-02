import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service.js";

function clearFields() {
  $("#hidden-response").show();
  $("input#numberToConvert").val("");
  $('#currencyConversion').val("disabled");
}

//Business Logic
function getElements(response) {
  //real code https://api.jquery.com/each/
  $('option').each(function(index) {
    console.log(index + ": " + $(this).text());
  
    //pseudo code
    if (index === Object.keys(response.conversion_rates)) {
      if ($("#currencyConversion:selected") === (response.conversion_rates.name)) {
        $('#showConversion').text(`The conversion rate for ${response.conversion_rates.name} is ${response.conversion_rates.rate}.toFixed(2).`);
        //$('#showConversion').text(`The equal dollar amount is (multiplication formula here).`);
      } else {
        $('#showErrors').text(`There was an error: ${response}`);
      }
    }
  });
}

// testing logic to multiply user input & json data
// function calculate(response) {
//   let userDollarInput = parseInt($("input#numberToConvert"));
//   console.log(parseInt($("input#numberToConvert"))); //NaN
//   let conversionRate = `${response.conversion_rates}`; //use JSON.parse?? was getting caught in promise
//   console.log(conversionRate); //now is NaN
//   let conversion = eval(userDollarInput * conversionRate);
//   console.log(conversion); //Nonexistent
//   $('#showConversion').val(conversion);
// }

//Service Logic to currency-service
async function makeApiCall(currency) {
  const response = await CurrencyExchange.getExchange(currency);
  getElements(response);
}

//UI Logic
$(document).ready(function() {
  //api call for drop down here
  $('#convertButton').click(function() {
    event.preventDefault();
    //user input
    const userDollarInput = $("#numberToConvert").val();
    $("#showRate").html(`${userDollarInput}`);

    let currency = $('#currencyConversion').prop(":selected");
    console.log(currency); //undefined
    clearFields();
    makeApiCall(currency);
    // calculate();
  });
});

//Old & pseudo code Logic for targeting API data w/ dropdown options
// function getElements(response) {
//   // $.find({AUD:, BRL:, EGP:, EUR:, IDR:}, calculate(response));
//   if (response.conversion_rates.AUD) {
//     $('#showRate').text(`The conversion rate is ${response.conversion_rates.AUD}.`);
//     // $('#showConversion').text(`The equal dollar amount in AUD is ${response.conversion_rates.AUD} * (TODO user input)).`);
//   } else if (response.conversion_rates.BRL) {
//     $('#showRate').text(`The conversion rate is ${response.conversion_rates.BRL}.`);
//   } else if (response.conversion_rates.EGP) {
//     $('#showRate').text(`The conversion rate is ${response.conversion_rates.EGP}.`);
//   } else if (response.conversion_rates.EUR) {
//     $('#showRate').text(`The conversion rate is ${response.conversion_rates.EUR}.`);
//   } else if (response.conversion_rates.IDR) {
//     $('#showRate').text(`The conversion rate is ${response.conversion_rates.IDR}.`); 
//   } else if (response.conversion_rates.MAR) {
//     $('#showErrors').text(`There was an error: ${response.result}`);
//   } else if (response === isNaN || response < 0 || response == "") {  //might need to move up b/c is most specific
//     $('#showErrors').text("Not a valid number.");
//   } else {
//     $('.showErrors').text(`There was an error: ${response}`);
//   }
// }

//dropdown logic testing
//function getOption() {
// let dropdown = $('#currencyConversion');
// let value = dropdown.options[dropdown.selectedIndex].value;
//$("#elementID :selected").val();

// dropdown.prop('selectedIndex', 1);