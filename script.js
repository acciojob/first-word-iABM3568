function firstWord(s) {
  // your code here

	// Case 1: empty string
  if (s.length === 0) {
    return "";
  }

  let word = "";
  let started = false; // track if first non-space started

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    // Ignore leading spaces 
    if (!started && ch === " ") {
      continue;
    }

    // If we hit a space *after* starting, stop
    if (started && ch === " ") {
      break;
    }

    // Add character to word
    word += ch;
    started = true;
  }

  return word;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
