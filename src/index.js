// You should implement your task here.

module.exports = function towelSort(matrix) {
    const towel = [];
    for (let i = 0; i < (matrix || []).length; i++) {
        if (i % 2) {
            towel.push(...matrix[i].reverse());
        } else {
            towel.push(...matrix[i]);
        }
    }
    return towel;
};
