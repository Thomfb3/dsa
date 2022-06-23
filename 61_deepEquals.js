function deepEquals(valueOne, valueTwo) {
    if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
        const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number';
        const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === 'number';

        if (isValueOneNaN && isValueTwoNaN) return true;    
        return valueOne === valueTwo;
    };

    if (typeof valueOne !== typeof valueTwo) return false;
    if (valueOne === null && valueTwo === null) return true;
    if (valueOne === null || valueTwo === null) return false;
    if (valueOne === valueTwo) return true;

    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
        if (valueOne.length !== valueTwo.length) return false;
        for (let i = 0; i < valueOne.length; i++) {
            if (!deepEquals(valueOne[i], valueTwo[i])) return false;
        };
        return true;
    };

    if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

    const valueOneKeys = Object.keys(valueOne);
    const valueTwoKeys = Object.keys(valueTwo);
    if (valueOneKeys.length !== valueTwoKeys.length) return false;
    if(!deepEquals(valueOneKeys, valueTwoKeys)) return false;

    for (let i = 0; i < valueOneKeys.length; i++) {
        const key = valueOneKeys[i];
        if (!deepEquals(valueOne[key], valueTwo[key])) return false;
    };

    return true;
}