// Get references to our HTML elements
const resultDisplay = document.getElementById('result');
const promptDisplay = document.getElementById('prompt');

// Listen for any key being pressed down anywhere on the page
document.addEventListener('keydown', function(event) {
    
    // Check if the key that was pressed was the "Enter" key
    if (event.key === 'Enter') {
        
        // 1. Generate a random number (between 1 and 100 in this case)
        // Math.random() gives a decimal between 0 and 0.99...
        // We multiply by 100 to get a number between 0 and 99.99...
        // Math.floor() rounds it down to the nearest whole number (0-99)
        // We add 1 to make the range 1-100.
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // 2. Display the number in our result paragraph
        resultDisplay.textContent = randomNumber;
        
        // 3. Make the result visible by changing its opacity to 1
        resultDisplay.style.opacity = 1;

        // 4. (Optional) Change the prompt text
        promptDisplay.textContent = 'Your random number is:';
    }
});

class Fish {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

function castRod() {
    const numRolls = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    const catchChance = 0.8;
    for (let roll = 0; roll < numRolls; roll++) {
        // await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('.');
    }
    // await new Promise(resolve => setTimeout(resolve, 1000));

    const caught = Math.random() < catchChance;
    if (caught) {
        console.log("You caught a fish!");
    } else {
        console.log("Nothing's biting...");
    }
}