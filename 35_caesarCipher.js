
//a - 97 - z - 122
// String.fromCharCode(1) -> code to letter
// "".charCodeAt() -> letter to code

// ternary version

const caesarCipherEncryptor = (string, key) => {
    const newKey = key % 26;
    let result = "";
  
    for (const char of string) {
      result += char.charCodeAt() + newKey > 122 ?
        String.fromCharCode((char.charCodeAt() + newKey) - 26) :
        String.fromCharCode((char.charCodeAt() + newKey)); 
    };
    return result;    
};



// const caesarCipherEncryptor = (string, key) => {
//     const newKey = key % 26;
//     let result = "";
  
//     for (const char of string) {
//       if (char.charCodeAt() + newKey > 122) {
//         result += String.fromCharCode((char.charCodeAt() + newKey) - 26)
//       } else  {
//         result += String.fromCharCode((char.charCodeAt() + newKey)); 
//       };
//     };
//     return result;    
// };

