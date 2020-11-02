import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className='post'>
            {props.text}
        </div>
    )
}

export default Post;