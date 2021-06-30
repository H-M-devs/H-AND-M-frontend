import react from 'react';
import Header from './Header';

import Footer from './Footer';
class AboutUs extends react.Component {

  render() {

    return (
<>
      <Header />

  <div >
<div className="Ourteam" >
  <h2>Meet Our Team</h2>
  <p>"Teamwork is the ability to work together toward a common vision, the ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results"</p>
<p>"as we are a pationate developers we believe that No matter how brilliant your mind or strategy, if you’re playing a solo game, you’ll always lose out to a team , so we work as team and we always win"</p>
</div>
        
      
              <div className="wrapper">
                <div className="outer">
                  <div className="Our-card" style={{"--delay":"-1"}}>
                    <div className="content">
                      <div className="img"><img src="https://avatars.githubusercontent.com/u/63788477?v=4" alt=""/></div>
                        <div className="details">
                          <span className="name">Humam Mkhzoumi</span>
                          <p>Civil Engineering</p>
                        </div>
                       <a href="https://github.com/Mkhzoumi">Follow</a>
                      </div>
                    </div>

                    <div className="Our-card" style={{"--delay":"-1"}}>
                            <div className="content">
                              <div className="img"><img src="https://avatars.githubusercontent.com/u/80677034?v=4" alt=""/></div>
                                <div className="details">
                                  <span className="name">khaled al shishani</span>
                                  <p>
                                    Business Information Technology</p>
                                </div>
                               <a href="https://github.com/khaledshishani32">Follow</a>
                              </div>
                              
                            </div>
                    <div className="Our-card" style={{"--delay":"0"}}>
                      <div className="content">
                        <div className="img"><img src="https://avatars.githubusercontent.com/u/81553931?v=4" alt=""/></div>
                          <div className="details">
                            <span className="name">Laith Hussein</span>
                            <p>Developer</p>
                          </div>
                         <a href="https://github.com/laithfayizhussein">Follow</a>
                        </div>
                      </div>
                      <div className="Our-card" style={{"--delay":"1"}}>
                        <div className="content">
                          <div className="img"><img src="https://avatars.githubusercontent.com/u/66292996?v=4" alt=""/></div>
                            <div className="details">
                              <span className="name">Shatha Smadi</span>
                              <p>Software Engineering</p>
                            </div>
                           <a href="https://github.com/shathasmadi">Follow</a>
                          </div>
                        </div>
                        <div className="Our-card" style={{"--delay":"2"}}>
                          <div className="content">
                            <div className="img"><img src="https://avatars.githubusercontent.com/u/81151287?v=4" alt=""/></div>
                              <div className="details">
                                <span className="name">Maram Ankir</span>
                                <p>Computer Engineering</p>
                              </div>
                             <a href="https://github.com/Maram-Ankir?tab=repositories">Follow</a>
                            </div>
                          </div>
                          <div className="Our-card" style={{"--delay":"2"}}>
                            <div className="content">
                              <div className="img"><img src="https://avatars.githubusercontent.com/u/81149143?v=4" alt=""/></div>
                                <div className="details">
                                  <span className="name">Osama al-shararbeh</span>
                                  <p>Accounting</p>
                                </div>
                               <a href="https://github.com/Ossamaaa">Follow</a>
                              </div>
                              
                            </div>
                          </div>
                         
                         
                          </div>
                        
                 <Footer/>
                     </div>

                     </>

        )
    }
}

export default AboutUs;