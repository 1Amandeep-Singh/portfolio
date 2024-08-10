import React from 'react'

const ShinyEffect = ({left, right, top, size = 500}) => {

    const positionStyles = {
        top: `${left}px`,
        width: `${size}px`,
        height: `${size}px`,
        zindex: -1
    }

    if(left != undefined)
        positionStyles.left = `${left}px`

    if(right != undefined)
        positionStyles.left = `${right}px`
  return (
    <div className='shiny-effect' style={positionStyles}>
      
    </div>
  )
}

export default ShinyEffect
