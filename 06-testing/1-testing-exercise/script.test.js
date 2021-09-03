const googleSearch = require('./script');

dbMock = ['dogs.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

it('silly test', () => {
  expect('hello').toBe('hello');
});

it('is running', () => {
  expect(googleSearch('dog', dbMock)).toExist;
});

it('is searching google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com']);
});
