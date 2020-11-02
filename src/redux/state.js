let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    postsPage: {
        posts: [
            { text: 'Text example' },
            { text: 'Text example 2' },
            { text: 'Text example 4' },
            { text: 'Text example 6' }
        ],
        postText: ''
    }
}

export let postTextUpdate = (text) => {
    state.postsPage.postText = text;
    rerenderEntireTree();
}

export let postAdd = (textPost) => {
    state.postsPage.posts.push({text: state.postsPage.postText});
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

window.state = state;

export default state;