const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
    _state: {
        postsPage: {
            posts: [
                { text: 'Text example' },
                { text: 'Text example 2' },
                { text: 'Text example 4' },
                { text: 'Text example 6' }
            ],
            postText: ''
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    _rerenderEntireTree() {
        console.log('State changed');
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._state.postsPage.posts.push({'text': this._state.postsPage.postText});
            this._rerenderEntireTree();
        }   else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.postsPage.postText = action.text;
            this._rerenderEntireTree();
        }
    }
}

export const postAddActionCreator = () => ({type: ADD_POST});
export const postTextUpdateActionCreator = (newText) => ({type: UPDATE_POST_TEXT, text: newText})

window.store = store;

export default store;