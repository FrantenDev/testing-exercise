const urlCheck = require('./urlCheck');

test('Pasa un dominio finaliza .es y retorna \'.es\'', () => {
    expect(urlCheck('https://tahichemena.es/')).toEqual('es');
});

test('Pasa un dominio finaliza .es y retorna \'.es\'', () => {
    expect(urlCheck('https://www.epicgames.com/store/es-ES/')).toEqual('com');
});

test('Pasa un número y devuelve null', () => {
    expect(urlCheck(5666)).toBeNull();
});


/*
test('Pasa una string y devuelve null', () => {
    expect(urlCheck('mojo_picón')).toBe(true);
})*/