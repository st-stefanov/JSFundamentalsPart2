function some(input) {
    let uniqueNames = {};
    input.array.forEach(element => {
        let keyValuePair = element.Split(" ")
        let name = keyValuePair[0];
        let phoneNumber = keyValuePair[1];

        uniqueNames[name] = phoneNumber;
    });
    for (let key in uniqueNames) {
        console.log(`${key} -> ${uniqueNames[key]}`)
    }
}