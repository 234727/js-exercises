function nonUniqueElements(data) {
    data = data.filter(elem  => {
        let counter = 0;
        data.forEach(occ => {
            if(elem === occ) {
                ++counter;
            }
        })
        return (counter > 1);
    })
    return data;
}