import logo from './logo.svg'
import profile_image from './assets/profile.jpg'
import post_image from './assets/post.jpg'
import './App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {

  // const [profile, set_profile] = useState([])
  // const [name, set_name] = useState('')

  // const get_user_data =({first_name})=>{
  //   return new Promise((resolve)=>{
      
  //     let config = {
  //       method: 'get',
  //       maxBodyLength: Infinity,
  //       url: 'http://202.29.80.45:4013/users?firstname' + first_name,
  //       headers: {},
  //     };
      
  //     axios.request(config)
  //       .then((response) => {
  //         console.log(JSON.stringify(response.data));
  //         set_profile(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });      
  //   })
  // }

  // get_user_data("Nichakan")

  const data = {
    user_name: "Neko Tamji",
    tag: "NekoTamaji",
    first_name: "Nichakan",
    last_name: "Supphaphol",
    phone: "0961852751"
  }
  return (
    <div className="box">
      <div className="content-box">
        <div className="image-box"></div>
        <div className="profile-box mb5">
          <img className="profile-image" src={profile_image}></img>
          <nav className="profile-nav">
            <button className="follow-button fz7 fw600"></button>
          </nav>
          <p className="user-name fz11 fw600">{data.user_name}</p>
          <p className="tag mb5 fz7 fw400 g">@{data.tag}</p>
          <div className="bio mb5 fz7 fw400">
            <p>くねっとしてるのがすきいうらくがき</p>
          </div>
          <div className="join-date fz7 mb5">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="join-date-icon mr2">
            <g>
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
            </g>
          </svg>
          <p className="g">Joined September 2005</p>
          </div>
          <nav className="follow fz7">
            <p className="fw600 mr2">1.5k</p>
            <p className="g mr8">Following</p>
            <p className="fw600 mr2">145k</p>
            <p className="g">Followers</p>
          </nav>
        </div>
        <nav className="content-nav ul mb5 fz7">
          <a style={{color: 'white',fontWeight: 600}}>Posts
            <span></span>
          </a>
          <a>Replies</a>
          <a>Media
          </a>
        </nav>
        <div className="main-content">
          <div className="content-main">
            <div className="post fz7">
              <div className="post-header mb5">
                <img className="post-profile mr4" src={profile_image}></img>
                <div className="post-text-section">
                  <div className="post-user-info">
                    <p className="post-username fw600 mr2">{data.user_name}</p>
                    <p className="post-tag mr2 g">@{data.tag}</p>
                    <p className="post-date g">· Feb 14, 2024</p>
                  </div>
                  <p className="post-descriptions">没ったけど頑張ったから供養TT</p>
                </div>
              </div>
              <div className="post-content">
                <img className="post-image" src={post_image}></img>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
