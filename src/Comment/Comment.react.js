import React from 'react';



const Comment = (props) => {

    console.log(props.comments);
    const { name, image,time,comment} = props.comments;

    return (
        <div >

           <img src={`images/${image}`} alt='doctor'></img>
           <p>{time}</p>
           <span>{comment}</span>
           <p>{name}</p>
        </div>
    );

}

export default Comment;