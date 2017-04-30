# Freecodecamp: API Projects - Timestamp Microservice

## Project Checklist

  1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

  2. If it does, it returns both the Unix timestamp and the natural language form of that date.

  3. If it does not contain a date or Unix timestamp, it returns null for those properties.

## Requirements

  node v6.9+

## Installation

  To install:

    git clone https://github.com/sfallmann/fcc-timestamp-microservice.git
    cd fcc-timestamp-microservice
    npm install

## Usage

  To run locally:
    
    npm start

## Tests

  To test:

    npm test
  
  The tests check the functionality of the following helper functions:

  **isNumber** return false if the string can be coerced to Number\false if it cannot

  **parseStr** to allow for some variability in format and spacing, the string is parsed and reformatted
  
  **timeInMs** given a string, returns null if the provided parameter results in an invalid date or a date in ms from Jan 1, 1970
