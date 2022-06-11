
const isValidSubsequence = (array, sequence) => {
    let seqIdx = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === sequence[seqIdx]) {
            seqIdx++;
            if (seqIdx === sequence.length) return true;
        }
    }
    return false;
}

// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sub = [1, 6, -1, 10]
// output: true