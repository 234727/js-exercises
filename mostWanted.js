function mostWanted(data) {
    data = data.toLowerCase().split("").filter(a => a.match(/[a-z]/g)).sort((a, b) => a.localeCompare(b));

    let first = data[0];
    let counter = 0;
    let result = [first, 0];

    data.forEach(elem => {
        if(elem === first) {
            ++counter;
        } else {
            if(counter > result[1]) {
                result[0] = first;
                result[1] = counter;
            }
            first = elem;
            counter = 1;
        }
    });
    return result[0];
}