import React from "react";
import "./youtubeclone.css"
const Slidebar = ({change,vary}) => {
    if(vary == 0){
        return (
            <>
            <div className="mainside">
                <div className="point" onClick={() => {
                     change(1)
                }}>
                  <div className="border1"></div>
                  <div style={{marginTop: "1vh"}} className="border1"></div>
                  <div style={{marginTop: "1vh"}}  className="border1"> </div>
                </div>
               <div className="mainhome">
               <div className="home">
                    <img className="imgs" src="home.PNG" alt="" />
                    <p>Home</p>
                </div>
               </div>
               <div className="mainhome">
               <div style={{width:"3vw", height: "5.7vh"}} className="home">
                    <img className="imgs" src="explore.PNG" alt="" />
                    <p style={{marginLeft:"-0.3vh"}}>Explore</p>
                </div>
               </div>
    
               <div className="mainhome">
               <div style={{width:"3vw", height: "5.7vh"}} className="home">
                    <img className="imgs" src="your-video.PNG" alt="" />
                    <p style={{marginLeft:"-0.3vh"}}> &nbsp;Shorts</p>
                </div>
               </div>
               <div className="mainhome">
               <div style={{width:"3vw", height: "5.7vh"}} className="home">
                    <img className="imgs" src="subscription.PNG" alt="" />
                    <p style={{marginLeft:"-2.8vh"}}>Subscription</p>
                </div>
               </div>
               <div className="mainhome">
               <div style={{width:"3vw", height: "5.7vh"}} className="home">
                    <img className="imgs" src="library.PNG" alt="" />
                    <p style={{marginLeft:"-0.3vh"}}> Library</p>
                </div>
               </div>
            </div>
            </>
        )
    }
    else if (vary == 1)
    {
        return (
            <>
            <div className="mainonclickside">
                <div className="onclickpoint">
               
               <div className="onpoint" onClick={() => 
            {
                change(0)
            }}>
                  <div className="border1"></div>
                  <div style={{marginTop: "1vh"}} className="border1"></div>
                  <div style={{marginTop: "1vh"}}  className="border1"> </div>
                </div>
               
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
    
}
export default Slidebar