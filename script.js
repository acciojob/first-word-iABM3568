function firstWord(s) {
  // your code here

	Here's the code using let and const wherever applicable:
javascriptfunction firstWord(s) {
  // Step 1: Create a variable to store the first word (will change, so use let)
  let word = '';
  
  // Step 2: Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    
    // Step 3: Get the current   character (doesn't change, so use const)
    let character = s[i];
    
    // Step 4: Check if the character is a space
    if (character === ' ') {
      // Step 5: If we find a space, stop the loop (we found the end of first word)
      break;
    }
    
    // Step 6: If it's not a space, add the character to our word
    word = word + character;
  }
  
  // Step 7: Return the first word
  return word;
 
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
