
// const generateAllBinaryStrings = (str) => {
//     let result = [];
//     let q = [];
//     q.push(str);

//     while (q.length > 0) {
//         let str = q[0];
//         let idx = str.indexOf('?');

//         if (idx !== -1) {
//             str = str.replace(str[idx], '0');
//             q.push(str);

//             str = str.replace(str[idx], '1');
//             q.push(str);
//         } else {
//             result.push(str)
//         };
//         q.shift();
//     };

//     return result;
// }

const generateAllBinaryStrings = (str) => {

    if (index === str.length) {
        document.write(str.join("") + "<br>");
        return;
    };


    if (str[index] === "?") {
        // replace '?' by
        // '0' and recurse
        str[index] = "0";
        print(str, index + 1);
  
        // replace '?' by
        // '1' and recurse
        str[index] = "1";
        print(str, index + 1);
  
        // NOTE: Need to backtrack
        // as string is passed by
        // reference to the function
        str[index] = "?";
    } else {
        print(str, index + 1);
    };
};

 

// Input str = "1??0?101"
// Output: 
//         10000101
//         10001101
//         10100101
//         10101101
//         11000101
//         11001101
//         11100101
//         11101101


function print(str, index) {
    if (index === str.length) {
      document.write(str.join("") + "<br>");
      return;
    }

    if (str[index] === "?") {
      // replace '?' by
      // '0' and recurse
      str[index] = "0";
      print(str, index + 1);

      // replace '?' by
      // '1' and recurse
      str[index] = "1";
      print(str, index + 1);

      // NOTE: Need to backtrack
      // as string is passed by
      // reference to the function
      str[index] = "?";
    } else print(str, index + 1);
  }

  // Driver Code

  var input = "1??0?101";
  var str = input.split("");
  print(str, 0);



function Print(Str){
 
    let q = []
    q.push(Str)
 
    while (q.length > 0){
        let Str = q[0]
 
        // find position of first occurrence of wildcard
        let index = Str.indexOf('?')
     
        // If no matches were found,
        // find returns -1
        if(index != -1)
        {
         
            // replace '?' by '0' and push string into queue
            Str = Str.replace(Str[index] , '0')
            q.push(Str)
 
            // replace '?' by '1' and push string into queue
            Str = Str.replace(Str[index] , '1')
            q.push(Str)
        }
 
        else {
         
            // If no wildcard characters are left,
            // print the string.
            document.write(Str,"</br>")
        }
 
        q.shift()
    }
}
 
// Driver code to test above function
let Str = "1??0?101"
Print(Str)
 