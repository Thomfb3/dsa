// {
//     "python_naming_convention" : "hello_world",
// }

// {
//     "pythonNamingConvention" : "hello_world",
// }




const convertSnakeToCamelCase = (snakeStr) => {
    let camelStr = snakeStr[0];

    for (let i = 1; i < snakeStr.length; i++) {
        if(snakeStr[i] === "_") {
            camelStr+= snakeStr[i + 1].toUpperCase();
            i++;
        } else {
            camelStr+= snakeStr[i];
        }
    }
    return camelStr;
}



const convertCaseOfJSON = (json) => {
    if (Array.isArray(json)) {
        return json.map(el => convertCaseOfJSON(el))
    } else if (typeof json === "object") {
        const keys = Object.keys(json);
        const newJson = {};

        for (const key of keys) {
            newJson[convertSnakeToCamelCase(key)] = convertCaseOfJSON(json[key]);
        }
        return newJson;
    }
    return json;

}






// const convertCaseOfJSON = (json) => {
//     if (Array.isArray(json)) {
//         return json.map(el => convertCaseOfJSON(el))
//     } else if (typeof json === "object") {

//         const keys = Object.keys(json);
//         const newJson = {};

//         for (const key of keys) {
//             newJson[convertSnakeToCamelCase(key)] = convertCaseOfJSON(json[key])
//         }
//         return newJson;
//     }
//     return json;
// }









let json = {
    snake_case : [
        {
            key_one : "hello",
            key_two : "bye"

        },
        {
            hello_world : [
                "hello",
                "world",
                "bye"
            ]
        }
    ]
}






//change snake case to camel case
const convertSnakeToCamelCase_1 = (snakeStr) => {
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
const convertCaseOfJSON_1 = (json) => {
    if (Array.isArray(json)) {
        return json.map(el => convertCaseOfJSON_1(el));

    } else if (typeof json === "object") {

        let keys = Object.keys(json);
        let newJson = {};

        for (const key of keys) {
            newJson[convertSnakeToCamelCase_1(key)] = convertCaseOfJSON_1(json[key]);
        }
        return newJson;
    };
    return json;
}




let snake1 = "snake_case";
let camel1 = "snakeCase";

let snake2 = "snake";
let camel2 = "snake";

let snake3 = "snake_case_two";
let camel3 = "snakeCaseTwo";

console.log(convertSnakeToCamelCase(snake1) === camel1);
console.log(convertSnakeToCamelCase(snake2) === camel2);
console.log(convertSnakeToCamelCase(snake3) === camel3);


console.log(convertCaseOfJSON_1(json))
console.log(convertCaseOfJSON(json))