import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency-service-service.js";

//Business Logic
CurrencyExchange
const conversionMoney = $("#convert-to").val();  //dropdown form pull


//Service Logic to currency-service


//UI Logic
$(document).ready(function() {
  $('#convertButton').click(function() {
    let currency = $('#currencyConversion').val();
    clearFields();
    makeApiCall(city);
  });
});