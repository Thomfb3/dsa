const runLengthEncoding = (string) => {
    let encodedString = ""
    let counter = 1;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1] && counter < 9) {
        counter++;
      } else {
        encodedString += `${counter}${string[i]}`;
        counter = 1;
      };
    };
    return encodedString;
  };
  
/// "AAABBBCCD"

/// "3A3B2C1D"

// "AAAAAAAAAAAA"
// "9A3A"