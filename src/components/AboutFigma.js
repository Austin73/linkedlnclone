import React from 'react'

const styles={
    box:{
        width:'300px',
        height:'60px',
        backgroundColor:'solid grey',
        borderRadius:'6px'
    }
}
function AboutFigma() {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',

            marginLeft: '70px',
            marginTop: '10px',
            marginRight: '70px',
            marginBottom: '10px',
            display: 'flex',
            paddingLeft: '25px',
            flexDirection: 'column',
            alignItems: 'start'
        }}>
            <div>
                <h3>About</h3>
            </div>
            <div>
                <span>
                    Figma is the first professional-grade online tool created specifically for interface design ,
                    Born on the Web ,Figma helps  the entire products  team create ,test ,and ship better designs,faster.
                </span>
            </div>
            <br/>
            <div style={{
                display:'flex',
                gap:'20px',
                justifyContent:'space-evenly',
                marginBottom:'20px'
            }}>

                <div style={styles.box}>
                    <br/>
                   <div>
                     Website URL
                     <br/>
                   </div>
                   <div>
                        <br/>
                       <a href=''>Figma.com</a>
                   </div>
                </div>
                <div style={styles.box}>
                    <div>
                        Funding via Crunchbase

                    </div>
                    <div>
                        Series D
                    </div>
                    <div>
                        <br/>
                       <a href=''>US $50 M</a> 
                    </div>
                </div>
            </div>
           
           <div style={{
               padding:'30px',
               textAlign:'center',
               width:'75%'
           }}>
              <a href=''> See All details</a>
           </div>
        </div>
    )
}

export default AboutFigma
