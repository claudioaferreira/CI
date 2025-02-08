const holaMundo = require('./HolaMundo');

test("Debe Retornar Hola Mundo", () => {
    expect(holaMundo()).toBe("Hola Mundo");
});