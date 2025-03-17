// Write your code here!
// Remove the <main> element with id "main"
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id to "victory"
newHeader.id = "victory";

// Set the text content with your name
newHeader.textContent = "Brian is the champion";

// Append it to the body
document.body.appendChild(newHeader);
