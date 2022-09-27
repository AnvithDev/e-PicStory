import './navbar.css'
import {Search,Person, Chat, Notifications } from "@mui/icons-material"

export default function Navbar() {
  return (
    <div className="NavbarContainer">
        <div className="NavbarLeft">
          <span className="logo">Social Logo</span>
        </div>
        <div className="NavbarCenter">
          <span className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search for friend, post or any video' className='searchInput'/>
          </span>
        </div>
        <div className="NavbarRight">
          <div className="NavbarLinks">
            <span className="NavbarLink">Homepage</span>
            <span className="NavbarLink">TimeLine</span>
          </div>
          <div className="NavbarIcons">
            <div className="NavbarIconItem">
              <Person/>
              <span className="NavbarIconBadge">1</span>
            </div>
            <div className="NavbarIconItem">
              <Chat/>
              <span className="NavbarIconBadge">2</span>
            </div>
            <div className="NavbarIconItem">
              <Notifications/>
              <span className="NavbarIconBadge">3</span>
            </div>
          </div>
          <img src="/assets/persons/1.jpeg" alt="" className="NavbarProfileImg" />
        </div>
    </div>
  )
}
