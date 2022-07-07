const classPhotos = (redShirtHeights, blueShirtHeights) => {
    redShirtHeights.sort((a,b) => a - b);
    blueShirtHeights.sort((a,b) => a - b);

    const firstRowColor = redShirtHeights[0] > blueShirtHeights[0] ? "RED" : "BLUE";

    for (let i = 0; i < redShirtHeights.length; i++) {
        if (firstRowColor === "RED") {
            if (redShirtHeights[i] >= blueShirtHeights[i]) return false;
        } else {
            if (blueShirtHeights[i] >= redShirtHeights[i]) return false;
        };
    };
    return true;
};