// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */


const canCompleteCircuit = (gas, cost) => {
    let start = total = cur = 0; 

    for (let i = 0; i < gas.length; i++) {
        cur += gas[i] - cost[i];
        total += gas[i] - cost[i];

        if(cur < 0) {
            start = i + 1;
            cur = 0;
        }
    }

    return total >= 0 ? start : -1;
};


// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3