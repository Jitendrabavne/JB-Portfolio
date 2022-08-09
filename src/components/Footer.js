import React from 'react'
import '../App.css'
import { Link  } from 'react-router-dom'
const Footer = () => {
  return (
    
      <div class=" center foot">
          <span class="center spn">
              © 2022 Created By M-Group Moodify.com

          </span>
          <div  >
              <Link target="_blank" to="https://www.instagram.com/helltoheavn/" rel="noopener noreferrer">
                  <img class="footImg" src="covers/insta.png" alt="www.insta.com" srcset=""/></Link>
              <Link target="_blank" to="https://www.instagram.com/helltoheavn/" rel="noopener noreferrer">
                  <img class="footImg" src="covers/twtr.png" alt="twtr.com" srcset="" /></Link>
              <Link target="_blank" to="https://www.instagram.com/helltoheavn/" rel="noopener noreferrer">
                  <img class="footImg" src="covers/fb.png" alt="facebook.com" srcset="" /></Link>
              <Link target="_blank" to="https://www.instagram.com/helltoheavn/" rel="noopener noreferrer">
                  <img class="footImg" src="footer/11.png" alt="Link edIn.com" srcset="" /></Link>
              <Link target="_blank" to="https://open.spotify.com/user/qxrvt78ozdkgsqtvr50d69sz9?si=7mSE0t-KRUKkoHpeZsZCEQ&utm_source=copy-Link " rel="noopener noreferrer">
                  <img class="footImg" src="122.png" alt="spotify.com" srcset="" /></Link>
              <Link target="_blank" to="https://open.spotify.com/user/qxrvt78ozdkgsqtvr50d69sz9?si=7mSE0t-KRUKkoHpeZsZCEQ&utm_source=copy-Link " rel="noopener noreferrer">
                  <img class="footImg" src="footer/12.png" alt="spotify.com" srcset="" /></Link>
              <Link target="_blank" to="https://open.spotify.com/user/qxrvt78ozdkgsqtvr50d69sz9?si=7mSE0t-KRUKkoHpeZsZCEQ&utm_source=copy-Link " rel="noopener noreferrer">
                  <img class="footImg" src="footer/13.png" alt="spotify.com" srcset="" /></Link>
              {/* <!-- <img src="covers/logon1.png" alt="" srcset=""/> --> */}
          </div>
 
              <div class="footg">
                  <Link target="_blank" to="https://www.instagram.com/helltoheavn/" rel="noopener noreferrer">
                      <img class="footImg2" src="covers/aps.png" alt="insta.com" srcset="" /> </Link>
                  <Link target="_blank" to="https://www.instagram.com/helltoheavn/" rel="noopener noreferrer">
                      <img class="footImg2" src="../covers/gp.png" alt="insta.com" srcset="" /></Link>


              </div>
          </div>
       
  )
}

export default Footer;