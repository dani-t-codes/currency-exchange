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

function populateDropDown () {
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  
  let dropdown = $('#currencyConversion');
  dropdown.prop('selectedIndex', 1);

  $.getJSON(url,function(data){
    let x = JSON.stringify(data);
    x = JSON.parse(x);
    $.each(x.data, function (key, entry) {
      dropdown.append($('<option></option>').attr('value', entry.conversion_rates.currencyConversion).text(entry.conversion_rates.currencyConversion));
      $('#currencyConversion').change(function() {
        let i = this.selectedIndex;
        i = i-1;
        $('#currencyConversion').attr('value', x.Object.keys[i].currencyConversion).text(x.data[i].currencyConversion);
      });
    });
  });

  // fetch(url)
  //   .then(
  //     function(entry) {
  //       if (entry.status !== 200) {
  //         console.log("Looks like there was a problem. Status Code: " + entry.status);
  //       }
  //       entry.json().then(function(data) {
  //         let option;

  //         for (let i=0; i < data.length; i++) {
  //           option.text = Object.keys(data[i].conversion_rates);
  //           option.value = Object.values(data[i].conversion_rates);
  //           dropdown.add(option);
  //         }
  //       });
  //     }
  //   )
  //   .catch(function(error) {
  //     console.log(error.message);
  //   });
}

//Business Logic
function getElements(response) {
  Object.keys(response.conversion_rates); {
    if (response.json()) {
      $('#showConversion').text(`The conversion rate is ${response.conversion_rates.AUD}.`);
      //$('#showConversion').text(`The equal dollar amount is (multiplication formula here).`);
    } else {
      $('#showErrors').text(`There was an error: ${response}`);
    }
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
    populateDropDown();
    
    $("#hidden-response").show();
    let userDollarInput = $("input#numberToConvert");
    $("#userInput").html(userDollarInput);

    let currency = $('#currencyConversion').prop(":selected");
    console.log(currency); //undefined
    clearFields();
    makeApiCall(currency);
    // calculate();
  });
});

//Old Business Logic
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

// function calculate(response) {
//   let userDollarInput = parseInt($("input#numberToConvert"));
//   console.log(parseInt($("input#numberToConvert"))); //NaN
//   let conversionRate = `${response.conversion_rates}`; //use JSON.parse?? was getting caught in promise
//   console.log(conversionRate); //now is NaN
//   let conversion = eval(userDollarInput * conversionRate);
//   console.log(conversion); //Nonexistent
//   $('#showConversion').val(conversion);
// }



//dropdown logic testing
//function getOption() {
// let dropdown = $('#currencyConversion');
// let value = dropdown.options[dropdown.selectedIndex].value;
//$("#elementID :selected").val();

// dropdown.prop('selectedIndex', 1);







// // Populate dropdown with list of currency rates
// $.getJSON(response, function (data) {
//   $.each(data, function (response, entry) {
//     dropdown.append($('<option></option>').attr('value', response.conversion_rates).text(response.conversion_rate[entry]));
//   });
// });