# Currency Exchange

#### Independent Project on Asynchronous Code & APIs, Epicodus Wk. 6, 11.20.2020

#### By Danielle Thompson

## Description

This application allows a user to exchange USD into several other currencies using this (exchange rate API)[https://www.exchangerate-api.com/] and it's subsequent data.

## Technologies used

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

- _Access Terminal in your Finder, and open a new window. Install the package manager, (Homebrew) [https://brew.sh/], on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
- _Ensure Homebrew packages are run with this line of code: `echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`._
- _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._
- _Now, install Node.js through Homebrew with the following command: `brew install node`._
- _Confirm that node and npm (Node's package manager that is automatically installed alongside Node) are on your working system with two command lines `node -v` & `npm -v`, respectively returning something resembling `v14.5.0` & `6.14.5` (or higher)._

###### For Windows Users

- _Open a new Command Prompt window by typing "Cmd" in your computer's search bar._
- _Determine whether you have 32-bit or 64-bit Windows by following these (instructions)[https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running]._
- _Go to (Git Bash)[https://gitforwindows.org/], click on the "Download" button, and download the corresponding exe file from the Git for Windows site._
- _Follow the instructions in the set up menu._
- _Once you have Git installed on your computer, go to this (GitHub repository)[https://github.com/dani-t-codes/super-galactic], click the "Fork" button in the upper right hand corner of the page, and clone this application with the following command:`git clone https://github.com/dani-t-codes/super-galactic`._
- _Go to the (Node.js website)[https://nodejs.org/en/download/] and download the appropriate source code for your Windows operating system._

###### For Both Mac & Windows systems

- _Once the project has been cloned to your computer, run `npm run start` to open a live session of the application from your preferred code editor. ((Visual Code Studio)[https://code.visualstudio.com/] was used and is recommended by the application builder.)_

### Setup Instructions for API Keys

For this application, you will need to get a secure API key of your own in order for the application to run properly.  

###### API Key and Using an .env File
- Once the project is downloaded to your computer, please create a file called '.env' in the top level of the project's folder.
- To get your own secure API key, visit (this website)[https://www.exchangerate-api.com/] to set up an account. 
- Input your email address and click the "Get Free Key" button.
- You will be prompted to create an account with your email, first name, and a password. Agree to the terms of use and click "Get Started!"
- From here, you will be automatically redirected to your account's dashboard where you will see your API Key under the second section, "API Access", on the page. 

###### Testing with Postman
- Next, visit (Postman's website)[https://www.postman.com/downloads/] and download the application Postman. Postman will allow you to easily check if your newly assigned API key is working.
- Once downloaded, open the Postman app, and enter the following website with your API key in the appropriate place into the "GET" query bar: `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD` and hit the "Send" button. 
- Make sure the response back from Postman shows a '200 OK' code, which will mean your query was successful. This should result in the bottom of your Postman app appearing like this: ![An image showing a '200 OK' code along with the result:success and subsequent JSON data.!](/assets/images/Postman-success.png "Screenshot of success message in Postman app")

_(**NOTE: (This lesson)[https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/testing-api-calls-with-postman]from Epicodus Coding School is an excellent resource if you need more information on how to check your API is working correctly and how to use Postman. The link will display a different API site as its example, but will provide even more in-depth understanding of how to walk through this process.)_

###### Completing Application Setup
- Once you have gotten a 200 code response in Postman, copy the API key and add it to the first line of your .env file in this format `API_KEY={your api key here}`. Doing so will keep your personal data (the API key) private.
- Now the API key will apply to the currency exchange API link, and the application should run as expected.

### Specs

| Spec                                            | Input                        | Output                        |
| :---------------------------------------------- | :--------------------------- | :---------------------------- |
| **Homepage**                                    | User accesses localhost:5500 | Homepage with user input form |
| **Program Gathers User Input**                  | User input: "hopes"          | Output: "dreams"              |
| **Program Removes Spaces from User Input**      | User Input: "hope hope"      | Output: "hopehope"            |
| **Program Removes Punctuation from User Input** | Input: "h\*o@pe /h#o\*\*p'e" | Output: "hopehope"            |
| **Program Assigns Characters Numeric Values**   | Input: "hope"                | Output: "4 1 6 2"             |
| **Program Sums Character Values**               | Input: "4 1 6 2"             | Page Displays: 13             |

### Tests

Describe: thisFxn()
Test: thisFxn(doingThisAction)
Code: hereIsSome.pseudoCode(inaction);
Expect: thisFxn(w/this data).toEqual(this new data)

## Known bugs

_{I am Danielle's *bug* that needs fixing. I might impact this app by doing xyz. But you can do abc to get around me. Can do future fix me plz!}_

### Legal, or License

_MIT_ Copyright (c) 2020 **_{List of contributors or company name}_**
