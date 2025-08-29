/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Inventory items
let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  
  const caveChoice = readline.question("You discover a cave. Do you 'enter' or 'move on'? ");
  
  if (caveChoice === "enter") {
    console.log("Inside the cave, you find a glowing sword!");
    hasSword = true;
  } else {
    console.log("You skip the cave and continue your journey.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");

  const villageChoice = readline.question("A merchant offers you a compass. Do you 'take' it or 'decline'? ");

  if (villageChoice === "take") {
    hasCompass = true;
    console.log("You take the compass and thank the merchant.");
  } else {
    console.log("You decline and continue exploring the village.");
  }

} else {
  console.log("You get lost and wander aimlessly.");
}

// Final challenge — the forest
console.log("\nLater, you arrive at a dense forest that leads to a hidden temple.");

const forestChoice = readline.question("Do you try to navigate the forest? (yes/no) ");

if (forestChoice === "yes") {
  if (hasCompass && (hasMap || hasTorch)) {
    console.log("Using your compass and your sense of direction, you find the hidden temple!");
    
    if (hasSword) {
      console.log("A guardian blocks your path, but you fight it off with your sword and claim the treasure. You win!");
    } else {
      console.log("A guardian blocks your path, and you have no weapon. You flee empty-handed.");
    }

  } else {
    console.log("You get hopelessly lost in the forest. Maybe better luck next time.");
  }
} else {
  console.log("You decide not to risk it and set up camp. Maybe it's safer that way.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
