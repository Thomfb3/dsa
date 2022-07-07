// {
//     "python_naming_convention" : "hello_world",
// }

// {
//     "pythonNamingConvention" : "hello_world",
// }

//change snake case to camel case
const snakeToCamelCase = (snakeStr) => {
    if (snakeStr[snakeStr.length - 1] === "_") {
        return  snakeStr.slice(0, snakeStr.length - 1);
    };

    let camelStr = "" 
    for (let i = 0; i < snakeStr.length; i++) {
        if (snakeStr[i] === "_") {
                camelStr += snakeStr[i + 1].toUpperCase();
            i++;
        } else {
            camelStr += snakeStr[i]
        };
    };
    return camelStr;
};



// objects are nested recursive
// JSON types include nested Objects, arrays, or primitives 

//Convert JSON from python case to JavaScript case
const convertCaseOfJSON = (json) => {
    if (Array.isArray(json)) {
        return json.map(el => convertCaseOfJSON(el));

    } else if (typeof json === "object") {

        let keys = Object.keys(json);
        let newJson = {};

        for (const key of keys) {
            newJson[snakeToCamelCase(key)] = convertCaseOfJSON(json[key]);
        }
        return newJson;
    };

    return json;
}