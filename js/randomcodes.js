/* -- RANDOM CODES -- */

// Global variables for storing the generated code, entered code, and button state
var code = ''; // to store generated code
var getCode = ''; // to store entered code
var btnvalue; // for button boolean value
// Variable to hold the characters we want to use in the codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

// Function to generate a random 8-character code
function generateCode() {
    code = ''; // Initialize to empty
    for (var i = 1; i <= 8; i++) {
        var char = Math.random() * str.length; // Randomly select character
        code += str.charAt(char); // Accumulate the character
    }
    // Display the generated code in an HTML element
    document.getElementById("codes").innerHTML = code;
}

// Function to enable or disable the submit button and change its appearance
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; // Enable/disable button
    if (btnvalue == true) { //test if button is disabled or enabled
        // Set button and label color to translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        // Set button and label color with no transparency 
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

// listen to user input code
//var codebox = document.getElementById("codeentered"); // Get textbox
//codebox.addEventListener("input", evaluateCode); // Listen to code entered in textbox

// Assign an ID to the input field for the random code
document.querySelector('input[name="randomcode"]').id = 'codeentered'; // Assign 'id' dynamically

// Function to evaluate the entered code
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; // Get character entered
    var charset1 = getCode.trim(); // Remove any hidden characters entered
    var charset2 = code.trim(); // Remove any hidden characters from generated code
    
    // Test if entered code matches the generated code
    if (charset1.length == charset2.length && charset1 === charset2) {
        disableButton(false); // Enable button if codes match
    }
}

// Set up event listener for the code input
document.getElementById("codeentered").addEventListener("input", evaluateCode);

// Initial setup: Generate the code and disable the button
generateCode(); // Generate the initial code
disableButton(true); // Disable submit button initially