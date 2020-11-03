import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = (props) => {

    let inpText = React.createRef();

    let postTextUpdate = () => {
        let text = inpText.current.value;
        props.dispatch({ type: 'UPDATE-POST-TEXT', text: `${text}`})
    }

    let postAdd = () => {
        props.dispatch({ type: 'ADD-POST' });     
    }

    let allPosts = props.posts.posts.map( (elem,index) => <Post key={index} text={elem.text} />)

    return (
        <div className='posts'>
            <textarea onChange={postTextUpdate} ref={inpText} value={props.posts.postText} className='posts__input' />
            <button onClick={postAdd} className='posts__add'>Add Post</button>
            {allPosts}
        </div>
    )
}

export default Posts;