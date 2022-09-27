import React from 'react'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'
import './share.css'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            
            <div className="shareTop">
                <img src="/assets/persons/3.jpeg" alt="" className="shareProfileImg" />
                <input type="text" className="shareInput" placeholder="What's on your mind?"/>
            </div>

            <hr className="shareHr" />

            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>

        </div>
    </div>
  )
}
