import React from 'react'
import Story from './Story'
import './StoryReel.css'
const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image='https://i.ytimg.com/vi/zs_UrYH_rhs/maxresdefault.jpg'
                profileSrc='https://cdn.newsapi.com.au/image/v1/83e4d2c353687fe3893c3fa577a689c4'
                title='Arvind Sangwan'
            />
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/1200px-Tom_Cruise_by_Gage_Skidmore_2.jpg'
                title='John Clues '
            />
            <Story
                image='https://filmgoblin.com/wp-content/uploads/2020/03/mark-wahlberg-training.jpg'
                profileSrc='https://pbs.twimg.com/media/EfEq1QTXsAI5eAa.jpg'
                title='Tom Hanks'
            />
            <Story
                image='https://www.mensjournal.com/wp-content/uploads/mf/1280-mark-wahlberg-main.jpg?quality=86&strip=all'
                profileSrc='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mark-wahlberg-is-sighted-on-the-set-of-pain-and-gain-on-news-photo-142433873-1536758748.jpg?crop=1.00xw:0.538xh;0,0.130xh&resize=480:*'
                title='Mark Wahlberg'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://static.toiimg.com/thumb/msid-70908917,imgsize-179486,width-800,height-600,resizemode-75/70908917.jpg'
                title='Justin Bieber'
            />
            <Story
                image='https://i.insider.com/5b7ecccfb354cdbe318b554f?width=994&format=jpeg'
                profileSrc='https://pbs.twimg.com/media/EfEq1QTXsAI5eAa.jpg'
                title='Justin Bieber'
            />
        </div>
    )
}

export default StoryReel
