import React from 'react'
import FollowIcon from '../assets/add-user.png'
import dribble from '../assets/dribble.png'
import sketch1 from '../assets/sketch1.png'
import behance from '../assets/behance.svg'
import overlap from '../assets/overlap.png'
import medium from '../assets/medium.png'
import adobe from '../assets/adobe.png'
import stack from '../assets/stack.png'
const styles = {
    sidebarcontainer: {
        backgroundColor: 'white',
        width: '90%',
        
        marginTop: '125px',
        borderRadius: '8px',
        paddingLeft:'20px',
        paddingBottom:'20px'

    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        flexGrow: '30px'
    },
    eachContent: {
        display: 'flex',
        gap: '10px',
        flexGrow: '30px',

    },
    icon:{
        cursor: 'pointer',
        marginLeft:'40px'
    },
    sideContent:{
      fontSize:'13px',
      marginTop:'5px',

    }
}
function Sidebar() {
    return (
        <div style={styles.sidebarcontainer}>

            <div>
                <h3 style={{
                    paddingTop: '20px',
                    paddingLeft: '10px',
                    fontSize: '20px'
                }}>
                    Pages people also viewed
                </h3>

                <div style={styles.contentContainer}>
                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGJYECdovsA3w/company-logo_100_100/0/1635774141948?e=1648080000&amp;v=beta&amp;t=TFr3CYC3vQyekbLqi0iyciwnIEuv7tKImBNnYmDhNxA" loading="lazy" height="48" alt="" id="ember224" class="ivm-view-attr__img--centered EntityPhoto-square-3  lazy-image ember-view" />
                        </div>

                        <div>
                            <div>

                                InVision
                            </div>

                            <div style={styles.sideContent}>
                                Internet &nbsp;&nbsp;137K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>

                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src={sketch1} />
                        </div>

                        <div>
                            <div>

                                Sketch
                            </div>

                            <div style={styles.sideContent}>
                                Design &nbsp;&nbsp;33K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>
                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src={dribble} loading="lazy" height="48" alt="" id="ember224" class="ivm-view-attr__img--centered EntityPhoto-square-3  lazy-image ember-view" />
                        </div>

                        <div>
                            <div>

                                Dribbble
                            </div>

                            <div style={styles.sideContent}>
                                Design &nbsp;&nbsp;165K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>
                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src={behance} loading="lazy" height="48" alt="" id="ember224" class="ivm-view-attr__img--centered EntityPhoto-square-3  lazy-image ember-view" />
                        </div>

                        <div>
                            <div>

                                Behance
                            </div>

                            <div style={styles.sideContent}>
                                Internet &nbsp;&nbsp;67K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>
                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src={overlap} loading="lazy" height="48" alt="" id="ember224" class="ivm-view-attr__img--centered EntityPhoto-square-3  lazy-image ember-view" />
                        </div>

                        <div>
                            <div>

                                Overlap Studio
                            </div>

                            <div style={styles.sideContent}>
                                IT & S&nbsp;&nbsp;133K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>
                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src={medium} />
                        </div>

                        <div>
                            <div>

                                Medium
                            </div>

                            <div style={styles.sideContent}>
                                Online Media &nbsp;&nbsp;37K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>
                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src={adobe} />
                        </div>

                        <div>
                            <div>

                                Adobe
                            </div>

                            <div style={styles.sideContent}>
                                Computer Software &nbsp;&nbsp;900K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>
                    <div style={styles.eachContent}>
                        <div>
                            <img width="48" src={stack} />
                        </div>

                        <div>
                            <div>

                                Stack
                            </div>

                            <div style={styles.sideContent}>
                                Computer Software &nbsp;&nbsp;542K followers
                            </div>
                        </div>

                        <div style={styles.icon}>
                            <img src={FollowIcon} height={20} />
                        </div>

                    </div>

                </div>
            </div>
          
        </div>
    )
}

export default Sidebar
