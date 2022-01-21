const calcArray = require('./calcArray');

test('Comprobar que no es una string', () => {
    expect(calcArray('cualquier_cosa')).toBeNull();
});

test('Resuelve min -2 y max 10', () => {
    expect(calcArray([2, 4, 10, -2, 1])).toEqual([-2, 10]);
});

test('Comprobar que ningun index es una string, al tener uno es falso', () => {
    expect(calcArray([2, 'trece', 56])).toBeFalsy();
});

test('Pasas un numero y el min y max es dicho numero', () => {
    expect(calcArray(17)).toEqual([17, 17]);
});




/*
getMinMaxArray(‘cualquier_cosa’)➞ null
getMinMaxArray([2, 4, 10, -2, 1])➞[-2, 10]
getMinMaxArray([2, ’trece’, 56])➞ false
getMinMaxArray(17)➞[17, 17]
*/