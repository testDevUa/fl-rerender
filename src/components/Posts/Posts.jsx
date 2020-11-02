import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = (props) => {

    let inpText = React.createRef();

    let postTextUpdate = () => {
        let text = inpText.current.value;
        props.postTextUpdate(text);
    }

    let postAdd = () => {
        props.postAdd();        
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