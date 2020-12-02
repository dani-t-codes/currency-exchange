import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service.js";

function clearFields() {
  $("#numberToConvert").val("");
  $("#showUserInput").text("");
  $("#showConversion").text("");
  $("#showRate").text("");
}

function displayErrors(error) {
  $("#showErrors").text(`${error}`);
}

function getDropdown(response) {
  // let dropdown = $('#currencyConversion');
  for (let i=1; i <= response.conversion_rates.length - 1; i += 1) {
    let values = Object.values(response.conversion_rates[i]).map((value)=> `<option value=${value}>${value}</option>`);
    $('#currencyConversion').append(values);
  }
}
//dropdown logic testing
//function getOption() {
// let value = dropdown.options[dropdown.selectedIndex].value;
//$("#elementID :selected").val();

// dropdown.prop('selectedIndex', 1);


function getElements(response) {
  // real code https://api.jquery.com/each/
  $('option').each(function(index) {
    console.log(index + ": " + $(this).text());

    pseudo code
    if (index === Object.keys(response.conversion_rates)) {
      if ($("#currencyConversion:selected") === (response.conversion_rates.name)) {
        $('#showConversion').text(`The conversion rate for ${response.conversion_rates.name} is ${response.conversion_rates.rate}.toFixed(2).`);
        //$('#showConversion').text(`The equal dollar amount is (multiplication formula here).`);
      } else {
        $('#showErrors').text(`There was an error: ${response}`);
  }
}
  }
}

// testing logic to multiply user input & json data
// function calculate(response) {
//   let userDollarInput = parseInt($("input#numberToConvert"));
//   console.log(parseInt($("input#numberToConvert"))); //NaN
//   let conversionRate = Object.values(response.conversion_rates); //use JSON.parse?? was getting caught in promise
//   console.log(conversionRate); //now is NaN
//   let conversion = eval(userDollarInput * conversionRate);
//   console.log(conversion); //Nonexistent
//   $('#showConversion').val(conversion);
// }

function calculate(response) {
  // let dropdown = $('#currencyConversion');
  let AUD = response.conversion_rates.AUD; //would add user input math * AUD here (?)
  let BRL = response.conversion_rates.BRL;
  let EGP = response.conversion_rates.EGP;
  let EUR = response.conversion_rates.EUR;
  let IDR = response.conversion_rates.IDR;
  let MAR = response.error;
  if (('option') === AUD) {
    $('#showRate').val(AUD);
  } else if (('option') === BRL) {
    $('#showRate').val(BRL);
  } else if (('option') === EGP) {
    $('#showRate').val(EGP);
  } else if (('option') === EUR) {
    $('#showRate').val(IDR);
  } else if (('option') === MAR) {
    $('#showErrors').text(`${response.error}`);
  } else if ($('#numberToConvert') === isNaN || $('#numberToConvert') < 0 || $('#numberToConvert') == "") {
    $('#showErrors').text(`${response.error}`);
  }
}

async function makeApiCall(currency) {
  const response = await CurrencyExchange.getExchange(currency);
  getElements(response);
}

//UI Logic
$(document).ready(function() {
  //api call for drop down here
  CurrencyExchange.getExchange()
    .then(function(currency) {
      if (currency instanceof Error) {
        throw Error(`Exchange Rate API error: ${currency.message}`);
      }
      getDropdown(currency);
    })
    .catch(function(error) {
      displayErrors(error.message);
    });
  //on click 
  $('#convertButton').click(function() {
    event.preventDefault();
    //clear forms, show hidden section
    $("#hidden-response").show();
    $("input#numberToConvert").val("");
    $('#currencyConversion').val("disabled");
    //user input
    const userDollarInput = $("#numberToConvert").val();
    $("#showRate").val(`${userDollarInput}`);

    let currency = $('#currencyConversion').val("selected");
    console.log(`${currency}`); //[object Object]]
    clearFields();
    makeApiCall(currency);
    calculate();
  });
});

//Old & pseudo code Logic for targeting API data w/ dropdown options
//This fxn only returned AUD's conversion rate because it's only targeting the if statement 

// function getElements(response) {
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
