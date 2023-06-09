import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
          <div className="post__content">
            <strong>{props.number}. {props.post.title}</strong>
            <div className="text">
                {props.post.body}
            </div>
          </div>
          <div className="post_btns">
            <button>удалить</button>
          </div>
        </div>
    );
};

export default PostItem;