const reverseWords = (s) => {
    const words = s.trim().split(" ");
    let output = "";
    
    while (words.length) {
        let char = words.pop();
        output += char === "" ? "" : `${char} `;
    }
    
    return output.slice(0, output.length - 1);
};