import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

export default function Profile() {
  return (
    <>
        <Navbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="assets/posts/3post.jpeg" alt="" className="profileCoverImg" />
                <img src="assets/persons/10.jpeg" alt="" className="profileUserImg" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">profname</h4>
                <p className="profileInfoDesc">Some desc</p>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed/>
              <Rightbar profile/>
            </div>
          </div>
        </div>
    </>
  )
}
