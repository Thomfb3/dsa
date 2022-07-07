describe("Snake to Camel Case function", function () {

    let result1 = snakeToCamelCase("snake_case_test");
    let result2 = snakeToCamelCase("snake_case");
    let result3 = snakeToCamelCase("snakeCase");
    let result4 = snakeToCamelCase("snake");
    let result5 = snakeToCamelCase("");
    let result6 = snakeToCamelCase("snake_");

    it("should convert snake_case to camelCase", function () {
        expect(result1).toBe("snakeCaseTest");
        expect(result2).toBe("snakeCase");
        expect(result3).toBe("snakeCase");
        expect(result4).toBe("snake");
        expect(result5).toBe("");
        expect(result6).toBe("snake");
    });
});


describe("JSON snake_case to camelCase", function () {
    let json = {
        "hello_world": 45,
        "array_of_stuff": [
            {
                "stuff_one": "one",
                "stuff_two": "one",
                "stuff_three": ["one", "two", "three"],
            }
        ],
        "this_stuff": ["one", "two", "three"],
        "that_stuff": { "one_num": 1, "two_num": 2, "three_num": 3 }
    };

    let jsonConverted = {
        "helloWorld": 45,
        "arrayOfStuff": [
            {
                "stuffOne": "one",
                "stuffTwo": "one",
                "stuffThree": ["one", "two", "three"],
            }
        ],
        "thisStuff": ["one", "two", "three"],
        "thatStuff": { "oneNum": 1, "twoNum": 2, "threeNum": 3 }
    };

    it("should convert the snake case of json object keys to camel case", function () {
        let newJson = convertCaseOfJSON(json);
        expect(newJson).toEqual(jsonConverted);
    });
});


