// You should implement your task here.

const compareNumbersByAsc = (a, b) => {
    return a - b;
};

const compareNumbersByDesc = (a, b) => {
    return b - a;
};

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.reduce((resultArray, item, index) => {
        const currentArray =
            index % 2 === 0
                ? item.sort(compareNumbersByAsc)
                : item.sort(compareNumbersByDesc);
        resultArray.push(...currentArray);
        return resultArray;
    }, []);
};
