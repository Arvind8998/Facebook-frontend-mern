import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import './Feed.css'
import db from '../Firebase'
import Axios from 'axios'
import Pusher from 'pusher-js'

const pusher = new Pusher('ca1418f90778bb8f1d38', {
    cluster: 'ap2'
  });


const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(()=>{
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed()
        });
    },[])

    const syncFeed = ()=>{
        Axios.get('https://facebook-mern-build.herokuapp.com/retrieve/posts')
        .then((res)=>{
            console.log(res.data)
            setPostsData(res.data)
        })
    }

    useEffect(()=>{
        syncFeed()
    },[])

        return (
            <div className='feed'>
                <StoryReel />
                <MessageSender />
                {
                    postsData.map(entry => {
                        return <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                    })
                }
            </div>
        )
    }

export default Feed
