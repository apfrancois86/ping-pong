# Ping-Pong

### Created by Alex Francois


## Description
This is a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"

A user will be able to enter a new number and see new results over and over again.


###Program Specs
* 1) The program will alert the user to provide a number greater than 0 if the user inputs a number less than 0 or other characters.  -Example Input: Abc; Example Output: [alert: "Please enter a number greater than 0"]
* 2) The program  can count to the provided number.  -Example Input: 2;  -Example Output: [1,2]
* 3) Once the count gets to a number divisible by 3 the program will replace the number with "ping".  -Example Input: 3;  -Example Output: [1,2,"ping"]
* 4) Once the count gets to a number divisible by 5 the program  will replace the number with "pong".  -Example Input: 5;  -Example Output: [...,4, "pong"]
* 5) Once the count gets to a number divisible by 3 the program will replace the number with "ping".  -Example Input: 15;  -Example Output: [...,13,14,"ping-pong"]
* 6) The program will display the new results when a user inputs a new number
-Example Initial Input: 3   -Example Initial Output: [1,2,"ping"]; -Example New Input: 4;   -Example New Output: [1,2,"ping", 4]
* 7) The program will display a secret div if the user input is greater than 50,000 -Example Input: 50,001; -Example Output: ("display secret image and text")


## Setup
Clone repository and edit HTML CSS, and JS files as needed. To view, visit https://apfrancois86.github.io/ping-pong/index.html

## Technologies Used
* HTML
* CSS
* Javascript
* Git
* Command Line
* Bootstrap
* jQuery

## Legal
Copyright 2016 GPL
