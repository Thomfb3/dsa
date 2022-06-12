
const nonConstructibleChange = (coins) => {
    if (coins.length === 0) return 1;
    coins.sort((a,b) => a - b);

    let currentChange = 0;

    for (const coin of coins) {
        if (coin > currentChange + 1) return currentChange + 1;
        currentChange += coin;
    }

    return currentChange + 1;
}