import React from 'react'

const External_render = ({link, title, width, height}) => {
  return (
    //
    <div style={{ width: width, height: height, border: '1px solid black' }}> 
          <iframe
            src={link}
            title={title}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
  )
}

export default External_render