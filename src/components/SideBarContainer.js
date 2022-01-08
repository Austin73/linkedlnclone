import React from 'react'
import Information from './Information'
import Sidebar from './Sidebar'
function SideBarContainer() {
    return (
        <div style={{flex:'3 ' }}>
            <Sidebar/>
            <Information/>
        </div>
    )
}

export default SideBarContainer
