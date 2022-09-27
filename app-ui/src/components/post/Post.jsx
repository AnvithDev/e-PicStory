import React from 'react'
import './post.css'
import {MoreVert,ThumbUpAlt,ThumbUpOffAlt,FavoriteBorder,Favorite} from '@mui/icons-material'
import { useState } from 'react';

export default function Post() {

  const [isLikePost,setIsLikePost] = useState(false);

  const [likePost,setLikePost] = useState(false);
  const [heartPost,setHeartPost] = useState(false);

  const [noOfLikesInPost,setNoOfLikesInPost] = useState(0);

  const likeHandler = ()=>{
        setNoOfLikesInPost(isLikePost?noOfLikesInPost-1:noOfLikesInPost+1)
        setIsLikePost(!isLikePost)
        setLikePost(!likePost)
  }

  const heartHandler= ()=>{
        // setNoOfLikesInPost(isLikePost?noOfLikesInPost-1:noOfLikesInPost+1)
        // setIsLikePost(!isLikePost)
        setHeartPost(!heartPost)
  }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/assets/persons/3.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Anvith</span>
                <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey its my post</span>
                <img src="/assets/posts/1post.jpeg" alt="" className='postImg' />
            </div>
            <div className="postBottom">
                 <div className="postBottomLeft">
                    {(likePost)?<ThumbUpAlt onClick={()=>{return likeHandler()}} />:<ThumbUpOffAlt onClick={()=> likeHandler()} />}

                    {(heartPost)?<Favorite onClick={()=>heartHandler()} />:<FavoriteBorder onClick={()=>heartHandler()} />}

                    <span className="postLikeCounter">{noOfLikesInPost} people like it</span>
                 </div>
                 <div className="postBottomRight">
                    <div className="postCommentText">9 Comments</div>
                 </div>

            </div>
        </div>
    </div>
  )
}
