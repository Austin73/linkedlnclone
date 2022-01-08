import React from 'react'
import AboutFigma from './AboutFigma'
import Figma from './Figma'
import FigmaNavbar from './FigmaNavbar'
function FigmaContainer() {
    return (
        <div style={{ flex: '7' }}>
            <Figma />
            <FigmaNavbar />
            <AboutFigma />
        </div>
    )
}

export default FigmaContainer
