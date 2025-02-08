const suma = require('./suma');

test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(suma(2, 2)).toBe(4);
});

test('adds 3 + 2 to equal 5', () => {
    expect(suma(3, 2)).toBe(5);
});