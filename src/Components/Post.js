import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined'
import NearMeIcon from '@material-ui/icons/NearMe'
import AmmountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

const Post = ({profilePic, imgName, username, timestamp, message}) => {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
                {
                imgName ? (
                    <div className="post__image">
                        <img src={`https://facebook-mern-build.herokuapp.com/retrieve/images/single?name=${imgName}`} alt="uploaded"/> 
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            }
            </div>
            <div className="post__options">
                    <div className="post__option">
                        <ThumbUpIcon />
                        <p>Like</p>
                    </div>
                    <div className="post__option">
                        <ChatBubbleOutlinedIcon />
                        <p>Comment</p>
                    </div>
                    <div className="post__option">
                        <NearMeIcon />
                        <p>Share</p>
                    </div>
                    <div className="post__option">
                        <AmmountCircleIcon />
                        <ExpandMoreOutlined />
                        <p>Like</p>
                    </div>
                </div>
        </div>
    )
}

export default Post
