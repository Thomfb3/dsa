const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    blueShirtSpeeds.sort((a,b) => a - b);
    if (fastest) {
        redShirtSpeeds.sort((a,b) => a - b);
    } else {
        redShirtSpeeds.sort((a,b) => b - a);
    };

    let totalSpeed = 0;

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        totalSpeed += Math.max(
                redShirtSpeeds[i], 
                blueShirtSpeeds[blueShirtSpeeds.length - i - 1]
            ); 
    };

    return totalSpeed;
};
  