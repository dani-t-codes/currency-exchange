import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service.js";

function clearFields() {
  $("#numberToConvert").val("");
  $("#currency").val("");
  $("#showUserInput").text("");
  $("#showConversion").text("");
  $("#showRate").text("");
}

// real code https://api.jquery.com/each/
function getElements(response) {
  // let currencies = Object.keys(response.conversion_rates);
  // let rates = Object.values(response.conversion_rates);
  let userCurrency = $('input#currency').val(); 
  for (let i=0; i < response.conversion_rates.length; i++) {
    for (const [key, value] of Object.entries(response.conversion_rates)) {
      if (`${key}` === userCurrency) {
        console.log( (`${key}: ${value * userCurrency} at ${value} to 1 USD.`));
      } else {
        console.log((`There was an error: ${response.message}. Currency does not exist in the database. Please try again.`));
      }
    }
  // $("#showConversion").text();
  }
}


async function makeApiCall(currency) {
  const response = await CurrencyExchange.getExchange(currency);
  getElements(response);
}

//UI Logic
$(document).ready(function() {
  // event.preventDefault();
  $('#convertButton').click(function() {
    //clear forms, show hidden section
    $("#hidden-response").show();
    // $("input#numberToConvert").val("");
    //user input
    const userDollarInput = $("#numberToConvert").val();
    const userCurrency = $('#currency').val(); 
    $("#showRate").val(`${userDollarInput}`);
    $("#showRate").val(`${userCurrency}`);
    console.log(`${userDollarInput}`);
    // let currency = $('#currency').val();
    console.log(`${userCurrency}`); //EUR! 
    clearFields();
    makeApiCall();
  });
});


// if (currencies[i] === "EUR") {
//   return `Currency: ${currencies}, Conversion Rate: ${rates}`;
// }; 
//     $('#showConversion').text(`The conversion rate for ${currencies} is ${rates}.`);
//     //$('#showConversion').text(`The equal dollar amount is (multiplication formula here).`);
//   } else {
//     $('#showErrors').text(`There was an error: ${response}`);
//   }
// }
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

//calculate(responseValue) {
//this.userDollarInput = parseInt($("input#numberToConvert").val());
//this.conversionRate = $("input#currency").val(`${response.conversion_rates[i]`});
//return this.UserDollarInput * this.conversionRate;

// function calculate(response) {
//   let AUD = response.conversion_rates.AUD; //would add user input math * AUD here (?)
//   let BRL = response.conversion_rates.BRL;
//   let EGP = response.conversion_rates.EGP;
//   let EUR = response.conversion_rates.EUR;
//   let IDR = response.conversion_rates.IDR;
//   if (AUD) { 
//     $('#showRate').val(AUD);
//   } else if (BRL) {
//     $('#showRate').val(BRL);
//   } else if (EGP) {
//     $('#showRate').val(EGP);
//   } else if (EUR) {
//     $('#showRate').val(IDR);
//   } 
// }