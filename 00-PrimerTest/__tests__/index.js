const add = require('../index');

describe('add', () => {
  it('debería retornar 3 cuando incluimos en argumentos 1 y 2', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });

  it('debería retornar 5 cuando incluimos en argumentos 10 y -5', () => {
    const result = add(10, -5);
    expect(result).toEqual(5);
  });

  it('debería retornar 1 cuando incluimos en argumentos 1 y 0', () => {
    const result = add(1, 0);
    expect(result).toEqual(1);
  });
});