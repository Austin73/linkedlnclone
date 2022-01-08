import React, { useState } from 'react'
import home from '../assets/icons8-home.svg'
import network from '../assets/network.png'
import myprofile from '../assets/myprofile.png'
import joboffers from '../assets/joboffer.png'
const navLink = {
    textAlign: "center",
    fontSize: "15px",
    minWidth: "80px",
    marginLeft: "20px",
    padding: "2px",
    cursor: "pointer"
}
const selected = {
    borderBottom: "2px solid black",
    textAlign: "center",
    fontSize: "15px",
    minWidth: "60px",

    marginLeft: "20px",
    padding: "2px",
    cursor: "pointer"
}

function NavBar(props) {
    const [text, setText] = useState("")
    return (
        <div style={{
            backgroundColor: 'white',
            position: 'fixed',
            width: '100%', height: '60px',
            padding: "10px",
        }}>
            <div style={{

                display: 'flex',
                alignItems: 'center',
                top: "0px",
                justifyContent:"space-evenly",
                alignContent:"space-around"
            }}>
               

                <div style={props.content === 'home' ? selected : navLink} onClick={() => props.setContent('home')}>
                    <img src={home} height="20" alt="home" />
                    <br />
                    <br/>
                    Home
                </div>
                <div style={props.content === 'network' ? selected : navLink} onClick={() => props.setContent('network')}>
                <img src={network} height="40" alt="home" />
                <br/>
                   My Network
                </div>
                <div style={props.content === 'jobs' ? selected : navLink} onClick={() => props.setContent('jobs')}>
                    <img src={joboffers} height="30" alt="home" />
                    <br />
                    Jobs
                </div>
                <div style={props.content === 'messaging' ? selected : navLink} onClick={() => props.setContent('messaging')}>
                    <img src={myprofile} height="20" alt="home" />
                    <br />
                    <br/>
                    My Profile
                </div>
            </div>
        </div>
    )
}

export default NavBar
