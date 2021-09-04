const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people with done', (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    done();
  });
});

it('calls swapi to get people', () => {
  //expect.assertions(number) verifies that a
  // certain number of assertions are called during a
  // test. This is often useful when testing asynchronous
  //code, in order to make sure that assertions in a
  //callback actually got called.

  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});

it('calls swapi to get people with promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
