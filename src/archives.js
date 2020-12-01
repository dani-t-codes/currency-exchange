// https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
// function populateDropDown () {
//   const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  
//   let dropdown = $('#currencyConversion');
//   dropdown.prop('selectedIndex', 1);

//   $.getJSON(url, function(data){
//     let x = JSON.stringify(data);
//     x = JSON.parse(x);
//     $.each(x.data, function (key, entry) {
//       dropdown.append($('<option></option>').attr('value', Object.keys(entry.conversion_rates)).text(Object.keys(entry.conversion_rates)));
//       // $('#currencyConversion').change(function() {
//       //   let i = this.selectedIndex;
//       //   i = i-1;
//       //   $('#currencyConversion').attr('value', x.Object.keys.data[i].conversion_rates).text(x.data[i].conversion_rates);
//       // });
//     });
//   });

//   // fetch(url)
//   //   .then(
//   //     function(entry) {
//   //       if (entry.status !== 200) {
//   //         console.log("Looks like there was a problem. Status Code: " + entry.status);
//   //       }
//   //       entry.json().then(function(data) {
//   //         let option;

//   //         for (let i=0; i < data.length; i++) {
//   //           option.text = Object.keys(data[i].conversion_rates);
//   //           option.value = Object.values(data[i].conversion_rates);
//   //           dropdown.add(option);
//   //         }
//   //       });
//   //     }
//   //   )
//   //   .catch(function(error) {
//   //     console.log(error.message);
//   //   });
// }