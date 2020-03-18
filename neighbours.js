function countNeighbours(data, row, col) {
    const y = data.length;
    const x = data[0].length;

    let counter = 0; 
    let a = row - 1;
    let b = col - 1;
    for(i = a; i < a + 3; ++i) {
        for(j = b; j < b + 3; ++j) {
            if( (i < 0 || i >= y) ||
                (j < 0 || j >= x) ||
                (i == row && j == col)) {
                continue;
            }
            counter += data[i][j];
        }
    }
    return counter;
}
