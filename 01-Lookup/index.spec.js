// Data
const users = [
  {
    login: 'knuth',
    firstName: 'Donald',
    lastName: 'Knuth',
    likes: ['C', 'Unix'],
  },
  {
    login: 'norvig',
    firstName: 'Peter',
    lastName: 'Norvig',
    likes: ['AI', 'Search', 'NASA', 'Mars'],
  },
  {
    login: 'mfowler',
    firstName: 'Martin',
    lastName: 'Fowler',
    likes: ['Design Patterns', 'Refactoring'],
  },
  {
    login: 'kent',
    firstName: 'Kent',
    lastName: 'Beck',
    likes: ['TDD', 'wikis', 'Design Patterns'],
  },
];

const lookup = (login, property) => {
  // Inicio

  const user = users.find(user => user.login === login);

  if(!user){
    throw new Error("Could not find user")
  }

  if(user.hasOwnProperty(property) === false){
    throw new Error('Could not find property');
  }
  
  return user[property];
  // Fin
};



// Tests
describe('lookup()', () => {
  it("lookup(<login>, 'likes') debería retornar los likes para el usuario especificado.", () => {
    const actual = lookup('norvig', 'likes'); // ['AI', 'Search', 'NASA', 'Mars']
    const expected = ['AI', 'Search', 'NASA', 'Mars'];

    expect(actual).toEqual(expected);
  });
  it("lookup(<login>, 'lastName') debería retornar el apellido del usuario específico", () => {
    const actual = lookup('knuth', 'lastName');
    const expected = 'Knuth';

    expect(actual).toEqual(expected);
  });
  it('con un usuario desconocido debería retornar un error con un mensaje específico', () => {
    expect(() => {
      lookup('nobody', 'likes');
    }).toThrow(/Could not find user/);
  });
  it('con una propiedad desconocida debería retornar un error con un mensaje específico', () => {
    expect(() => {
      lookup('mfowler', 'noprop');
    }).toThrow(/Could not find property/);
  });
});
