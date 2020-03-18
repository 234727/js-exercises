function weakPoint(matrix){
    const y = matrix.length;
    const x = matrix[0].length;

    const dataX = new Array(x);
    const dataY = new Array(y);
    dataX.fill(0);
    dataY.fill(0);

    for(let i = 0; i < y; ++i) {
        for(let j = 0; j < x; ++j) {
            dataX[i] += matrix[i][j];
            dataY[j] += matrix[i][j];
        }
    }
    return [dataX.indexOf(Math.min.apply(null, dataX)), dataY.indexOf(Math.min.apply(null, dataY))];
}

