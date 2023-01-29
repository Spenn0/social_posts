import React, { useState } from 'react';

function PostInList(props:any){
    console.log(props)
    return(
        <div className="postInListContainer">
            <h4>{props.title}</h4>
            <p>{props.thought}</p>
        </div>
    )
}
export default PostInList