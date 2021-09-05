import * as actions from './actions'
import * as types from './constants'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

export const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
  it('should create an action to search', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe("Fetch robots action", () => {
  it("should creat a Pending action on request Robots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
  });

  it('should creat a Success action after two seconds', async () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    await new Promise((r) => setTimeout(r, 2000));
    const action = store.getActions();
    expect(action[1].type).toEqual('REQUEST_ROBOTS_SUCCESS');
  });
  
  it('should creat a Failed action on request Robots', async () => {
    nock('https://jsonplaceholder.typicode.com').get('/users').reply(200, [{
      id: '123',
      name: 'test',
      email: 'j@jmail.com'
    }]);
  
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    await new Promise((r) => setTimeout(r, 2000));
    const action = store.getActions();
    expect(action[1].type).toEqual('REQUEST_ROBOTS_FAILED');
  });
});