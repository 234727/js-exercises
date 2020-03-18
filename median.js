function median(data) {
    data.sort((a, b) => {
        return a - b;
    })

    if(data.length % 2 === 0) {
        let result = (data[data.length / 2 - 1] + data[data.length / 2]) / 2;
        return result;
    }
    let result = data[Math.floor(data.length / 2)]; 
    return result;
}