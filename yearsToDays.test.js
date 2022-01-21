const yearsToDays = require('./yearsToDays');

test('Pasa los años a día', () => {
    expect(yearsToDays(1)).toBe(365);
});

test('Devuelve 0 cuando no es un número', () => {
    expect(yearsToDays("Hola mundo")).toBe(0);
    expect(yearsToDays([1, 2, 3])).toBe(0);
});

test('Devuelve cuando years es menor de 0', () => {
    expect(yearsToDays(-1)).toBe(0);
});