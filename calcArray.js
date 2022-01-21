function getMinMaxArray(arr) {
    const orderedArray = [];
    let cont = 0;
    let existStringOnArray = false;
    let existNumberOnArray = false;

    if (typeof arr === 'string') {
        return null;
    }

    // comprueba si hay un string dentro del array
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            existStringOnArray = true;
        } else if (typeof arr[i] === 'number') {
            cont++;
        }
    }

    if (cont === arr.length) {
        existNumberOnArray = true;
    }
    // Si hay almenos un numero o tiene la misma longitud del array
    if (existStringOnArray) {
        return false;
    }

    if (typeof arr === 'number') {
        orderedArray.push(arr);
        orderedArray.push(arr);
        return orderedArray;
    }

    if (existNumberOnArray) {
        orderedArray.push(Math.min(...arr));
        orderedArray.push(Math.max(...arr));
        return orderedArray;
    }
}

module.exports = getMinMaxArray;

/*
getMinMaxArray([1, 2, 3, -5, -10]);

getMinMaxArray(‘cualquier_cosa’)➞ null
getMinMaxArray([2, 4, 10, -2, 1])➞[-2, 10]console.log(Math.min(...array));
getMinMaxArray([2, ’trece’, 56])➞ false
getMinMaxArray(17)➞[17, 17]

if (existNumberOnArray) {

        return true;
    }

*/