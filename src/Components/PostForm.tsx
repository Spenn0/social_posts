import React, { useState } from 'react';


function PostForm(post){
    return(
        <div className="postFormContainer">
            <div className="closePostForm">X</div>
                <div className="formContainer">
                    <form action="">
                        <label htmlFor="title">
                            <input type="text" name="title"/>
                        </label>
                        <label htmlFor="thought">
                            <input type="text" name="thought"/>
                        </label>
                    </form>
                </div>
        </div>
    )
}
export default PostForm