import React from 'react'
import '../App.css'
import twitter from '../ft/twitter.jpg'
import insta from '../ft/insta.png'
import facebook from '../ft/fb.png'
import youtube from '../ft/yt.png'
import spotify from '../ft/spotify.png'
import linked from '../ft/link.png'
import github from '../ft/github.png'

const Footer = () => {
    
    return (

        <div className=" center foot">
            <span className="center spn">
                © 2022 Created By JB-React Developer 
            </span>
            <div  >
                <a target="_blank" href='https://www.instagram.com/helltoheavn/' rel="noopener noreferrer">
                    <img className="footImg" title='Instagram' src={insta} alt="www.insta.com" /></a>

                <a target="_blank" href='https://www.instagram.com/helltoheavn/' rel="noopener noreferrer">
                    <img className="footImg" title='Twitter' src={twitter} alt="twtr.com" /></a>

                <a target="_blank" href='https://www.facebook.com/jitendra.bawne.585' rel="noopener noreferrer">
                    <img className="footImg" title='Facebook' src={facebook} alt="facebook.com" /></a>

                <a target="_blank" href='https://youtube.com/channel/UC4kdcAfQGZLbf2pvjwovs1A' rel="noopener noreferrer">
                    <img className="footImg" title='youtube' src={youtube} alt="LinkedIn.com" /></a>

                <a target="_blank" href='https://open.spotify.com/user/qxrvt78ozdkgsqtvr50d69sz9?si=7mSE0t-KRUKkoHpeZsZCEQ&utm_source=copy-Link' rel="noopener noreferrer">
                    <img className="footImg" title='Spotify' src={spotify} alt="spotify.com" /></a>

                <a target="_blank" href='https://www.linkedin.com/in/jitendra-bavne-aa8b931b4' rel="noopener noreferrer">
                    <img className="footImg" title='LinkedIn' src={linked} alt="spotify.com" /></a>

                <a target="_blank" href='https://github.com/Jitendrabavne' rel="noopener noreferrer">
                    <img className="footImg" title='Github' src={github} alt="spotify.com" /></a>
            </div>
        </div>

    )
}

export default Footer;