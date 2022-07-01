

function zigzagTraverse(array) {
    let height = array.length - 1;
    let width = array[0].length - 1;
    let output = [];
    let row = 0;
    let col = 0;
    let goingDown = true;
    
  
    while(!isOutOfBounds(row, col, height, width)) {
      output.push(array[row][col]);
      // going down
      if (goingDown) {
        
        if(col === 0 || row === height) {
          goingDown = false;
          //if in the last row not first column
          if(row === height) {
          // go down
            col++;
          } else {
            row++;
          }
        } else {
          // down and left
          row++;
          col--;
        }
  
      //going up
      } else {
  
        if(row === 0 || col === width) {
          goingDown = true;
  
          if (col === width) {
            // go down
            row++;
          } else {
            col++;
          }
          
        } else {
          // up and right
          row--;
          col++; 
        }
      }
    }
    return output;
  };
  