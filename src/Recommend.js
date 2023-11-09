import React from 'react'
import './Recommend.css'
import VideoCard from './VideoCard'
import Attractive from './images/Attractive.jpg'
import Video from './images/Video.jpeg'
import Puppy from './images/PuppyTraining.jpg'
import views from './images/Views.jpg'
import youtube from './images/youtubeLogo.jpg'
import pic1 from './images/User-Profile-PNG-Image.png'
import pic2 from './images/happy-young-cute-illustration-face-profile-png.webp'
import pic3 from './images/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png'
import pic4 from './images/images (1).jpeg'
import pic5 from './images/images.jpeg'
import pic6 from './images/images.png'

function Recommend() {
  return (
    <div className='recommend'>
      <h2>Recommended</h2>
      <div className='recommend-video'>
        <VideoCard 
        title="How to make a good thumbnail for YOUTUBE"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage={pic1}
        image={Attractive}
        channel="Mark"
        />
        <VideoCard 
        title="How to make YouTube VIDEO!!!"
        views="3M views"
        timestamp="20 days ago"
        channelImage={pic2}
        image={Video}
        channel="Kevin"
        />
        <VideoCard 
        title="How to Train the PUPPY"
        views="12.5M views"
        timestamp="6 days ago"
        channelImage={pic3}
        image={Puppy}
        channel="Sarah"
        />
        <VideoCard 
        title="How to get views on YOUTUBE"
        views="1.1M views"
        timestamp="4 days ago"
        channelImage={pic4}
        image={views}
        channel="Ana"
        />
        <VideoCard 
        title="How did youtube born"
        views="0.3M views"
        timestamp="4 days ago"
        channelImage={pic5}
        image={youtube}
        channel="Youtube"
        />
        <VideoCard 
        title="How to Train the PUPPY"
        views="0.8M views"
        timestamp="6 days ago"
        channelImage={pic6}
        image={Puppy}
        channel="Tanya"
        />
        <VideoCard 
        title="How did youtube born"
        views="1.9M views"
        timestamp="2 days ago"
        channelImage={pic1}
        image={youtube}
        channel="Google"
        />
        <VideoCard 
        title="How to make YouTube VIDEO!!!"
        views="18.5M views"
        timestamp="45 days ago"
        channelImage={pic2}
        image={Video}
        channel="Beast"
        />
        <VideoCard 
        title="How to make a good thumbnail for YOUTUBE"
        views="7.2M views"
        timestamp="7 days ago"
        channelImage={pic4}
        image={Attractive}
        channel="Chandler"
        />
        <VideoCard 
        title="How to get views on YOUTUBE"
        views="0.1M views"
        timestamp="15 days ago"
        channelImage={pic6}
        image={views}
        channel="David"
        />
        <VideoCard 
        title="How to make a good thumbnail for YOUTUBE"
        views="6.4M views"
        timestamp="7 days ago"
        channelImage={pic5}
        image={Attractive}
        channel="Mike"
        />
        <VideoCard 
        title="How to get views on YOUTUBE"
        views="4.0M views"
        timestamp="10 days ago"
        channelImage={pic4}
        image={views}
        channel="Hacker"
        />
        <VideoCard 
        title="How to Train the PUPPY"
        views="1.7M views"
        timestamp="3 days ago"
        channelImage={pic3}
        image={Puppy}
        channel="Olga"
        />
        <VideoCard 
        title="How did youtube born"
        views="0.5M views"
        timestamp="2 days ago"
        channelImage={pic2}
        image={youtube}
        channel="Edge"
        />
        <VideoCard 
        title="How to make YouTube VIDEO!!!"
        views="1.6M views"
        timestamp="3 days ago"
        channelImage={pic1}
        image={Video}
        channel="Anthony"
        />
      </div>
    </div>
  )
}

export default Recommend
