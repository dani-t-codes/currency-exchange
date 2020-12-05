import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service.js";

function clearFields() {
  $("#numberToConvert").val("");
  $("#currency").val("");
  // $("#showUserInput").text("");
  // $("#showConversion").text("");
  // $("#showRate").text("");
}

// real code https://api.jquery.com/each/
function getElements(response) {
  // let currencies = Object.keys(response.conversion_rates);
  // let rates = Object.values(response.conversion_rates);
  // let userCurrency = $('input#currency').val(); 
  // let userDollarInput = $("#numberToConvert").val();
  // for (let i=0; i < response.conversion_rates.length; i++) {
  // let userInput = $('input#currency').val();
  // let jsonResponse = Object.entries(response.conversion_rates);
  // let userInput = jsonResponse;
  for (const [key, value] of Object.entries(response.conversion_rates)) {
    if (`${key}`) {
      $("#showRate").html(`${key}: ${value}. The conversion rate is ${value} to 1 USD.`);
      console.log(`${key}: ${value}. The conversion rate is ${value} to 1 USD.`);
    } else {
      $("#showRate").html((`There was an error: ${response.message}. Currency does not exist in the database. Please try again.`));
    }
  }
}
// $("#showConversion").text();
// }



async function makeApiCall(currency) {
  const response = await CurrencyExchange.getExchange(currency);
  getElements(response);
}

//UI Logic
$(document).ready(function() {
  $('#convertButton').click(function(event) {
    event.preventDefault();
    $("#hiddenResponse").show();
    //user input
    const userDollarInput = $("#numberToConvert").val();
    const userCurrency = $('#currency').val(); 
    $("#showConversion").html(userDollarInput + userCurrency);
    // console.log(`${response.conversion_rates.AUD}`); // have to declare response, does not currently work 
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