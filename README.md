# Currency Exchange

#### Independent Project on Asynchronous Code & APIs, Epicodus Wk. 6, 11.20.2020

#### By Danielle Thompson

## Description

This application allows a user to exchange USD into several other currencies using the (Exchange Rate API)[https://www.exchangerate-api.com/] and it's subsequent data.

## Technologies used

- _ExchangeRate-API_
- _Postman_
- _ES7 Javascript_
- _Bootstrap_
- _jQuery_
- _node.js_
- _npm_
- _webpack_
- _ES Lint_
- _Jest_
- _Babel_

## Color theme

- _#2E3C8C (Med-dark blue)_
- _#CEF2F2 (Light blue)_
- _#F2600C (Orange)_
- _#590202 (Burnt red)_
- _#0D0D0D (Black)_

## Installation Requirements

###### For Mac Users

- Access Terminal in your Finder, and open a new window. Install the package manager, (Homebrew) [https://brew.sh/], on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
- Ensure Homebrew packages are run with this line of code: `echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`.
- Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`.
- Now, install Node.js through Homebrew with the following command: `brew install node`.
- Confirm that node and npm (Node's package manager that is automatically installed alongside Node) are on your working system with two command lines `node -v` & `npm -v`, respectively returning something resembling `v14.5.0` & `6.14.5` (or higher).

###### For Windows Users

- Open a new Command Prompt window by typing "Cmd" in your computer's search bar.
- Determine whether you have 32-bit or 64-bit Windows by following these (instructions)[https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running].
- Go to (Git Bash)[https://gitforwindows.org/], click on the "Download" button, and download the corresponding exe file from the Git for Windows site._
- Follow the instructions in the set up menu.

###### For Both Mac & Windows systems

- Once you have Git installed on your computer, go to this (GitHub repository)[https://github.com/dani-t-codes/currency-exchange], click the "Fork" button in the upper right hand corner of the page, and clone this application with the following command:`git clone https://github.com/dani-t-codes/currency-exchange`.
* Go to the (Node.js website)[https://nodejs.org/en/download/] and download the appropriate source code for your Windows operating system. 
* Once the project has been cloned to your computer and you have all the necessary items on your local computer, open the project in the application of your choice ((Visual Code Studio)[https://code.visualstudio.com/] was used and is recommended by the application builder), and run `npm install` to get the appropriate dependencies from Node.js in the project.
* Once Node's dependencies for the project have successfully downloaded, run the command `npm run build` in your terminal.
* If you run `npm run start`, you will be able to open a live session of the application.

### Setup Instructions for API Keys

For this application, you will need to get a secure API key of your own in order for the application to run properly. Please carefully follow along with the instructions below to get your own API key securely. 

###### API Key and Using an .env File
- In your local copy of the project, create a file called '.env' in the top level of the project's folder. You will eventually add your API Key to this file in order to keep your private data safe.
- To get your own secure API key, visit (this website)[https://www.exchangerate-api.com/] to set up an account. 
- Input your email address and click the "Get Free Key" button.
- You will be prompted to create an account with your email, first name, and a password. Agree to the terms of use and click "Get Started!"
- From here, you will be automatically redirected to your account's dashboard where you will see your API Key under the second section, "API Access", on the page. Keep this page up while you complete the remaining steps for full application setup. 

###### Testing with Postman
- Next, visit (Postman's website)[https://www.postman.com/downloads/] and download the application Postman. Postman will allow you to easily check if your newly assigned API key is working.
- Once downloaded, open the Postman app, and enter the following website - with your API key from your new Exchange Rate-API account in the noted place in the URL link - into the "GET" query bar: `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD` and hit the "Send" button. 
- Make sure the response back from Postman shows a '200 OK' code, which will mean your query was successful. This should result in the bottom of your Postman app appearing like this: ![An image showing a '200 OK' code along with the result:success and subsequent JSON data.!](/assets/images/Postman-success.png "Screenshot of success message in Postman app")

###### Completing Application Setup
- Once you have gotten a 200 code response (i.e. a successful response) in Postman, copy the API key and add it as a variable to the first line of your .env file in this format `API_KEY={your-api-key-here}`. As mentioned before, doing so will keep your personal data (the API key) private.
- Now the API key you acquired in the 'API Key and Using an .env File' section above will automatically apply to the currency exchange API link, and the application should run as expected.

### Specs

| Spec                                            | Input                        | Output                        |
| :---------------------------------------------- | :--------------------------- | :---------------------------- |
| **Homepage**                                    | User accesses localhost:5500 | Homepage with user input form |
| **Program Gathers User Input**                  | User input: "$USD amount"    | Output: "X country's currency"|
| **Program Makes API Call**                      | User Input: "fetch url"      | Output: "return API response" |
| **Program Parses API's JSON Data to Return User Message** | Input: "API fetch" | Output: "API response"        |
| **Program Multiplies Currency Rate by User Input** | Input: "$20"   | Output: "$20 * X country conversion rate"|
| **Program Displays User Input & Return Values** | Input: "$20"                 | Page Displays: "AUD $27.40"   |

### Tests

Describe: CurrencyExchange(currency)
Code: async getExchange() {
  try{
    await fetch(url)
    if !response.ok
    Error
  } else return json();
    catch & return(error)
}
Expect: (API Call1).toEqual(200OK json response)

Describe: DropdownExchange(dropdownItems)
Code: async getDropdown() {
  try{
    await fetch(url)
    if !response.ok
    Error
  } else return json();
    catch & return(error)
}
Expect: (API Call2).toEqual(200OK json response)

Describe: clearFields()
Expect: clearFields("userFormInput").toEqual("")

Describe: getElements(response)
Expect: if jsonData[i].return(jsonData[i] * userUSD)
Test: if jsonData[AUD].return(jsonData[AUD].value * $20)

Describe: getDropDownOpts()
Expect: if jsonData[i].return(<option>jsonData[i]</option).forEach();

Describe: makeApiCall() 
Expect: makeApiCall(userCurrency).toInitialize(apiCall1)

Describe: makeApiDropdownCall()
Expect: makeApiCall(onDropDown.click).toInitialize(apiCall2)

## Known bugs

Negative values can still be entered manually by the user, despite setting the minimum value of the USD input form to '0'.  

### Legal, or License

_MIT_ Copyright (c) 2020 *_Danielle Thompson_**
