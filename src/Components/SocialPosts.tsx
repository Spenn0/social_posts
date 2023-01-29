import React, { useState } from 'react';
import PostInList from './PostInList';


interface Post{
    title: string,
    thought: string
}

function SocialPosts(){
    let [posts, setPosts] = useState([
        {
            title:"wow",
            thought: "i just can't believe it"
        },
        {
            title:"Hurry up",
            thought: "it's time to go to the party"
        },
        {
            title:"cats and dogs",
            thought: "are so coool."
        }
    ])
let newThought = () => {

}
return(
    <div className="socialPostsContainer">
       <button >New Thought</button>
     {posts.map((x:Post, index)=>{
       return <PostInList title= {x.title} thought= {x.thought}/>
})}
    </div>
)
}
export default SocialPosts