import auth from '../store/reducers/password';

const initialState = {
    passwords: [],
    filterPasswords: [],
}

it('should change return state', () => {
    const actualState = auth(initialState, {type: 'ADD_PASSWORD_SUCCESS', payload: []})
    expect(actualState.passwords).toEqual([])
    expect(actualState.filterPasswords).toEqual([])
})

it('should change return state', () => {
    const actualState = auth(initialState, {type: 'GET_DATA_SUCCESS', payload: []})
    expect(actualState.passwords).toEqual([])
    expect(actualState.filterPasswords).toEqual([])
})
it('should return state', () => {
    const actualState = auth(initialState, {type: 'SET_NEW_PASSWORDS', payload: []})
    expect(actualState.passwords).toEqual([])
    expect(actualState.filterPasswords).toEqual([])
})
