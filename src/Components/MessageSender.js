import React, { useState } from 'react'
import { Avatar, Input } from '@material-ui/core'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import firebase from 'firebase'
import { useStateValue } from '../StateProvider'
import db from '../Firebase'

import axios from '../axios'
import FormData from 'form-data'

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] = useState(null)
    const [{ user }, dispatch] = useStateValue()

    const handleChange = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const savePost = async (postData)=>{
        await axios.post('/upload/post',postData)
        .then((res)=>{
            console.log(res)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(image){
            const imgForm = new FormData();
            imgForm.append('file',image,image.name)

            let headers = {
                'accept' : '',
                'Accept-language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
            }

            axios.post('/upload/image', imgForm,{headers})
            .then((res)=>{
                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: user.displayName,
                    avatar: user.photoURL,
                    timestamp: Date.now()
                }
                console.log(postData)
                savePost(postData)
            })
        }

        else{
            const postData = {
                text: input,
                user: user.displayName,
                avatar: user.photoURL,
                timestamp: Date.now()
            }
            console.log(postData)
            savePost(postData)
        }

        setImageUrl('')
        setInput('')
        setImage(null)
    }

    return (
        <div className="messageSender">
            <div className='messageSender__top'>
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    className='messageSender__input' 
                    type='text'
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="What's on your mind?"
                    ></input>
                    <Input
                    type='file' 
                    className='messageSender__fileSelector'
                    onChange={handleChange} />
                    <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                    <div className='messageSender__option' >
                        <VideocamIcon style={{color:"red"}} />
                        <h3>Live Video</h3>
                    </div>
                    <div className='messageSender__option' >
                        <PhotoLibraryIcon style={{color:"green"}} />
                        <h3>Live Video</h3>
                    </div>
                    <div className='messageSender__option' >
                        <InsertEmoticonIcon style={{color:"orange"}} />
                        <h3>Live Video</h3>
                    </div>
            </div>
            
        </div>
    )
}

export default MessageSender
