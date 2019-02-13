import auth from '../store/reducers/auth';

const initialState = {
    isLogin: false,
    showModal: false
}

it('should change state isLogin to true', () => {
    const actualState = auth(initialState, {type: 'HANDLE_LOGIN', payload: true})
    expect(actualState.isLogin).toEqual(true)
})

it('should change state showModal to true', () => {
    const actualState = auth(initialState, {type: 'HANDLE_MODAL', payload: true})
    expect(actualState.showModal).toEqual(true)
})
