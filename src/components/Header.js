import React from 'react'
import linkedln from '../assets/lin.png'
import notification from '../assets/notification.jpg'
import message from '../assets/message.png'
import profile from '../assets/profile.jpeg'
// import SearchBar from './SearchBar'
function Header() {

    const styles = {
        headerContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',

            backgroundColor: 'blue',
            width: '100vw'
        },
        eachContainer: {
            margin: '25px',
            cursor: 'pointer'
        }
    }
    return (

        <div style={styles.headerContainer}>
            <div style={{ marginRight: '15px', marginLeft: '45px' }}

            ><img src={linkedln} width={30} height={30} alt='text'/></div>
            <div style={{
                flex: '1'
            }}>
                <input style={{
                    height: '25px',
                    backgroundColor: 'lightblue',
                    borderRadius: '5px',
                    width: '95%'

                }} />
            </div>
            <div style={styles.eachContainer}><img src={notification} width={30} height={25} alt='text'/></div>
            <div style={styles.eachContainer}><img src={message} width={30} height={25} alt='text'/></div>
            <div style={styles.eachContainer}><img src={profile} width={30} height={25} alt='text'/></div>
            <div
                style={{
                    marginRight: '75px'
                }}
            ><button
                style={{
                    backgroundColor: 'yellow',
                    width: 'maxContent',
                    height: '35px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
            >Upgrade to Premium</button></div>
        </div>

    )
}

export default Header
