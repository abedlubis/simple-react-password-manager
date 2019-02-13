import * as actions from '../store/reducers/password/actionsreducers/auth/actions'

it('should set data filter', () => {
    const passwordDummy = ['dummy', 'fummy2']
    const expectedAction = { type: 'SET_NEW_PASSWORDS', payload: passwordDummy}
    const actualAction = actions.setFilterSearch(passwordDummy)
    expect(actualAction).toEqual(expectedAction)
})

it("handles delete password", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await actions.deletePassword({key: 'something'})(dispatch, getState);
    expect(dispatch).toBeCalledTimes(0)
}); 
it("handles listenData ", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await actions.listenData()(dispatch, getState);
    expect(dispatch).toBeCalledTimes(0)
}); 

const data = {
    id: 'data'
}
it("handles edit password", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await actions.editPassword(data)(dispatch, getState);
    expect(dispatch).toBeCalledTimes(0)
}); 

it("handles add password", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await actions.addNewPassword(data)(dispatch, getState);
    expect(dispatch).toBeCalledTimes(0)
}); 