//your JS code here. If required.
// Select the target element
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree until reaching the root
while (element) {
    level++;
    element = element.parentElement;
}

// Display the level using alert
alert("The level of the element is: " + level);
