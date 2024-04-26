import React from 'react'

const VideoCard = ({info}) => {
  
    const {snippet,statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    
    const viewsMillion = (x) => {
        if(x >= 1000000) {
            return `${(x / 1000000).toFixed(1)} M`
        } else if (x >= 1000) {
            return `${(x / 1000).toFixed()} K`;
        } else {
            return x
        }
    };


    return (
    <div className='m-2 p-2 w-72 rounded-lg'>
        <img className="rounded-lg" 
        src = {thumbnails.medium.url} alt='video-thumbnail'/>
        <ul>
            <li className='text-lg font-semibold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewsMillion(statistics.viewCount)} views</li>
        </ul>        

    </div>
  )
};

export default VideoCard