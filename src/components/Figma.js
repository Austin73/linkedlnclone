import React from 'react'
import figmaicon from '../assets/Figma.jpeg'
import { Button } from '@mui/material'
function Figma() {
    return (
        <div style={{ marginLeft: '1' }}>
            <div style={{
               
                borderRadius: '4px',
                marginTop:'120px',
                marginLeft: '70px',
                position: 'static',
                marginRight: '70px',
                borderRadius: '8px',
                
            }}>
                <img src={figmaicon} height={200} width={750} />
            </div>
            <div style={{
                backgroundColor: 'white',
                marginLeft: '70px',
              
                marginRight: '70px',
                marginBottom: '10px',
                borderRadius: '8px'
            }}>
                <div style={{
                    display: 'flex',
                    padding: '10px',
                    marginLeft: '30px',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    alignItems: 'start',
                    backgroundColor: 'white'
                }}>
                    <div>
                        <h2>Figma</h2>
                    </div>
                    <div>
                        A design platform for teams who build products together.
                    </div>
                    <div style={{
                        color: 'grey',
                        fontSize: '14px',
                        marginTop: '2px'
                    }}>Design San Francisco, California 278,257 followers</div>

                    <div>
                        <a href="" ><h3>See all 661 employees on LinkedIn</h3></a>
                    </div>
                    <div>
                        <Button variant="contained">Follow</Button>&nbsp;&nbsp;
                        <Button variant="outlined">Visit Website</Button>&nbsp;&nbsp;
                        <Button variant="outlined">...</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Figma
