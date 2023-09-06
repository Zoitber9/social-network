import profileReducer, {addPostAC, deletePost} from './profile-reducer'
let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Hou are you?', likesCount: 7},
        {id: 3, message: 'Im fain', likesCount: 5},
    ],
    profile: null,
    status: ''
}
it('length of post should be incremented', ()=> {
    let action = addPostAC('test')

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
})
it('message of post should be correct', ()=> {
    let action = addPostAC('test')

    let newState = profileReducer(initialState, action)

    expect(newState.posts[3].message).toBe('test')
})

it('after deleting of message should be decrement', ()=> {
    let action = deletePost(1)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
})
it(`after deleting length should not be decrement if id is uncorrected`, ()=> {
    let action = deletePost(454)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
})