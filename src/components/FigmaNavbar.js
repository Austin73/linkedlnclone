import { height } from '@mui/system'
import React from 'react'

function FigmaNavbar() {
    return (
        <div style={{
            cursor:'pointer',
            backgroundColor: 'white',borderRadius:'8px',alignItems:'center',paddingLeft:'25px', height: '60px', display: 'flex', marginLeft: '70px', marginTop: '10px', marginRight: '70px', gap:'40px',marginBottom: '10px'}}>
                < div style={
                    {
                        borderBottom:'2px solid black'
                    }
                }>
                Overview
                
            </div>
            <div>
                About
            </div>
            <div>
                Products
            </div>
            <div>
                Posts
            </div>

            <div>
                Jobs
            </div>
            <div>
                People
            </div>
            <div>
                Videos
            </div>
        </ div>
            )
}

            export default FigmaNavbar
