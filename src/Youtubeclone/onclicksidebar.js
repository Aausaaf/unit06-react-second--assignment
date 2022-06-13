import React from "react";
import "./youtubeclone.css"
const Onclickslidebar = () => {
    return (
        <>
        <div className="mainonclickside">
            <div className="onclickpoint">
           <a href="/">
           <div className="onpoint">
              <div className="border1"></div>
              <div style={{marginTop: "1vh"}} className="border1"></div>
              <div style={{marginTop: "1vh"}}  className="border1"> </div>
            </div>
           </a>
            <div className="onclickyoutublogo">
                    <img className="imgs" src="logo.PNG" alt="" />
                </div>
            </div>
           <div className="onclickmainhome">
           <div className="onclickhome">
                <img className="imgs" src="home.PNG" alt="" />
               
            </div>
            <p>Home</p>
           </div>
           <div className="onclickmainhome">
           <div style={{width:"3vw", height: "5.7vh"}} className="onclickhome">
                <img className="imgs" src="explore.PNG" alt="" />
               
            </div>
            <p >Explore</p>
           </div>

           <div className="onclickmainhome">
           <div style={{width:"3vw", height: "5.7vh"}} className="onclickhome">
                <img className="imgs" src="your-video.PNG" alt="" />
               
            </div>
            <p >Shorts</p>
           </div>
           <div className="onclickmainhome">
           <div style={{width:"3vw", height: "5.7vh"}} className="onclickhome">
                <img className="imgs" src="subscription.PNG" alt="" />
                
            </div>
            <p >Subscription</p>
           </div>
           <div className="onclickmainhome">
           <div style={{width:"3vw", height: "5.7vh"}} className="onclickhome">
                <img className="imgs" src="library.PNG" alt="" />
               
            </div>
            <p >Library</p>
           </div>
           <div className="onclickmainhome">
           <div style={{width:"3vw", height: "5.7vh"}} className="onclickhome">
                <img className="imgs" src="liked video.PNG" alt="" />
               
            </div>
            <p >Liked Video</p>
           </div>
           <div className="onclickmainhome">
           <div  className="onclickhome">
                <img className="imgs" src="watch-later.PNG" alt="" />
               
            </div>
            <p >Watch later</p>
           </div>
           <div className="onclickmainhome">
           <div  className="onclickhome">
                <img className="imgs" src="history.PNG" alt="" />
               
            </div>
            <p > &nbsp;History</p>
           </div>
        </div>
        </>
    )
}
export default Onclickslidebar