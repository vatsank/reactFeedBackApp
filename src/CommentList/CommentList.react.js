import React from 'react';
import Comment from '../Comment/Comment.react'


class CommentList extends React.Component {
    render() {
        return (
            
            <div >
<h2>Comment List ❤</h2>
 
{this.props.comments.map( (comment,index)=>{
   return ( <Comment key={index} comments={comment}/>
   );
})};
            </div>
        );
    }
}

export default CommentList;