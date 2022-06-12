
const minimumWaitingTime = (queries) => {
    queries.sort((a,b) => a - b);

    let waitTime = 0;

    for (let i = 0; i < queries.length; i++) {
        waitTime = queries[i] * (queries.length - 1 - i) + waitTime; 
    };

    return waitTime;
};
  