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
    // postTextUpdate(text) {
    //     this._state.postsPage.postText = text;
    //     this._rerenderEntireTree();
    // },
    // postAdd(textPost) {
    //     this._state.postsPage.posts.push({text: this._state.postsPage.postText});
    //     this._rerenderEntireTree();
    // },
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

window.store = store;

// let rerenderEntireTree = () => {
//     console.log('State changed');
// }

// let state = {
//     postsPage: {
//         posts: [
//             { text: 'Text example' },
//             { text: 'Text example 2' },
//             { text: 'Text example 4' },
//             { text: 'Text example 6' }
//         ],
//         postText: ''
//     }
// }

// export let postTextUpdate = (text) => {
//     state.postsPage.postText = text;
//     rerenderEntireTree();
// }

// export let postAdd = (textPost) => {
//     state.postsPage.posts.push({text: state.postsPage.postText});
//     rerenderEntireTree();
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

// window.state = state;

export default store;