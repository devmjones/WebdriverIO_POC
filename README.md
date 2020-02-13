# WebDriver IO POC

## Introduction

A boilerplate project using WebDriver IO, Mocha, Chai, and Allure Reporting

## Code Samples

To run all tests: npm test

To run specific suite append: -- --suite NameOfSuite

To run in Chrome append: BROWSER=chrome

To run in Firefox append: BROWSER=firefox (will need to have an instance of geckodriver running in another tab)

To run in headless mode append: HEADLESS=true  

To run in prod env append: PROD=true

Example of chained command line arguments: BROWSER=firefox HEADLESS=true PROD=true npm test -- --suite Title

To generate an Allure report and view in browser: npm run report

To set a breakpoint for debugging: browser.debug() 

## Installation

Clone repo

cd into directory

npm install


## Running in Firefox
You will need to follow the instructions on this page to download the Geckodriver binary and put it in your project path: https://webdriver.io/docs/driverbinaries.html

You will also need to npm install wdio-geckodriver-service

See the wdio.conf for the required config setup

To start a geckodriver instance: ./geckodriver --port 4444

You will need an instance of geckodriver running in another tab to run against Firefox locally.


## Resources

https://webdriver.io/docs/gettingstarted.html
https://www.youtube.com/user/medigerati/playlists
https://www.youtube.com/user/PalmHarborBarber/playlists