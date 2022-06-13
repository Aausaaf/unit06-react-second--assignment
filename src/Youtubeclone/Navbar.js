import React from "react";
import "./youtubeclone.css"
const Navbar = () => {
    return(
        <>
        <div className="mainnavbar">
            <div className="firstnavbar">
                <div className="youtublogo">
                    <img className="imgs" src="logo.PNG" alt="" />
                </div>
                <div className="searchbox">
                    <input type="text" id="search" placeholder="Search"/>
                    <div className="searchiconbox">
                        <img className="imges" src="search.PNG" alt="" />
                    </div>
                </div>
                <div className="vidoicon">
                    <img className="imgv" src="video.PNG" alt="" />
                </div>
                <div  className="vidoicons">
                    <img className="imgv" src="grid.PNG" alt="" />
                </div>
                <div  className="bellicons">
                    <img className="imgv" src="bell.PNG" alt="" />
                </div>
                <div  className="profile">
                    <img className="imgv" src="logo192.png" alt="" />
                </div>

            </div>
            <div className="secondnavbar">
                <div className="linksbar"><p>All</p></div>
                <div className="linksbar"><p>Course</p></div>
                <div className="linksbar"><p>Premieres</p></div>
                <div className="linksbar"><p>Childreen Music</p></div>
                <div className="linksbar"><p>Education</p></div>
                <div className="linksbar"><p>Body BUildling</p></div>
                <div className="linksbar"><p>Facts</p></div>
                <div className="linksbar"><p>Hindi</p></div>
            </div>
        </div>
        
        </>
    )
}
export default Navbar;