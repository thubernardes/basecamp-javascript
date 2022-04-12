function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item %2 === 0;
}

const meuArray = [1, 23, 30, 55, 67, 2, 3, 4];

console.log(filtraPares(meuArray));