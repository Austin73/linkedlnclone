import React from 'react'

function Information() {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            marginTop:'20px'
        }}>
            <div>
                <span>
                    About
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    Accessiblity
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Help Center
                </span>
            </div>
            <div>
                <span>
                    Privacy & Terms
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    Ad Choices
                  
                </span>
            </div>
            <div>
                <span>
                    Advertising
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    Buisness Services
                   
                </span>
            </div>
            <div>
                <span>
                    Get the linkedln app
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    ....
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                </span>
            </div>

            <div style={
                {
                    alignItems:'center',
                    display:'flex',
                    justifyContent:'space-between',
             
                }
            }>
                <div>
                    <h2>Linkedin</h2>
                </div>
                <div style={
                    {
                        marginRight:'20px'
                    }
                }>
                    Linkedin @ 2021
                </div>
            </div>
        </div>
    )
}

export default Information
