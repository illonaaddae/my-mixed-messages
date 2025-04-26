console.log("Welcome to the Mixed Messages program!");

let messageGenerator = {
  techQuotes: [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
  ],

  advice: [
    "Keep practicing every day.",
    "Break big problems into smaller ones.",
    "Never stop learning new languages.",
  ],

  inspiration: [
    "You’re closer to your goals than you think.",
    "Great things take time and effort.",
    "Trust the process and enjoy the journey.",
  ],
};
//  Create an array to store the random messages
let randomMessage = [];

//  Iterate through each property (each array inside the object)
for (let category in messageGenerator) {
  let messages = messageGenerator[category];

  // Generate a random index for each category
  let randomIndex = Math.floor(Math.random() * messages.length);
  randomMessage.push(messages[randomIndex]);
}

console.log(`You know what?🤔  ${randomMessage.join("\n")} 🥂`);
