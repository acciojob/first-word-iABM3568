function firstWord(s) {
  // your code here

	// Step 1: Create a variable to store the first word (will change, so use let)
  let word = '';
  
  // Step 2: Create a flag to track if we've started finding the word
  let wordStarted = false;
  
  // Step 3: Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    
    // Step 4: Get the current character (doesn't change, so use const)
    let character = s[i];
    
    // Step 5: Check if the character  is a space
    if (character === ' ') {
      // If we already started building the word, stop here
      if (wordStarted) {
        break;
      }
      // If we haven't started the word yet, skip this space
      continue;
    }
    
    // Step 6: If it's not a space, add the character to our word
    word = word + character;
    wordStarted = true;
  }
  
  // Step 7: Return the first word
  return word;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
