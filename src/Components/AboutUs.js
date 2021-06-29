import react from 'react';
import Footer from './Footer';
class AboutUs extends react.Component {

  render() {

    return (

  <div >
<div className="Ourteam" >
  <h2>Meet Our Team</h2>
  <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
</div>
        
      
              <div className="wrapper">
                <div className="outer">
                  <div className="card" style={{"--delay":"-1"}}>
                    <div className="content">
                      <div className="img"><img src="https://avatars.githubusercontent.com/u/63788477?v=4" alt=""/></div>
                        <div className="details">
                          <span className="name">Humam Mkhzoumi</span>
                          <p>Civil Engineering</p>
                        </div>
                       <a href="https://github.com/Mkhzoumi">Follow</a>
                      </div>
                    </div>

                    <div className="card" style={{"--delay":"-1"}}>
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
                    <div className="card" style={{"--delay":"0"}}>
                      <div className="content">
                        <div className="img"><img src="https://avatars.githubusercontent.com/u/81553931?v=4" alt=""/></div>
                          <div className="details">
                            <span className="name">Laith Hussein</span>
                            <p>YouTuber  Blogger</p>
                          </div>
                         <a href="https://github.com/laithfayizhussein">Follow</a>
                        </div>
                      </div>
                      <div className="card" style={{"--delay":"1"}}>
                        <div className="content">
                          <div className="img"><img src="https://avatars.githubusercontent.com/u/66292996?v=4" alt=""/></div>
                            <div className="details">
                              <span className="name">Shatha Smadi</span>
                              <p>Software Engineering</p>
                            </div>
                           <a href="https://github.com/shathasmadi">Follow</a>
                          </div>
                        </div>
                        <div className="card" style={{"--delay":"2"}}>
                          <div className="content">
                            <div className="img"><img src="https://avatars.githubusercontent.com/u/81151287?v=4" alt=""/></div>
                              <div className="details">
                                <span className="name">Maram Ankir</span>
                                <p>Computer Engineering</p>
                              </div>
                             <a href="https://github.com/Maram-Ankir?tab=repositories">Follow</a>
                            </div>
                          </div>
                          <div className="card" style={{"--delay":"2"}}>
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

        )
    }
}

export default AboutUs;