import React from 'react';

const External_render = React.forwardRef(({ link, title, width, height }, ref) => {
  return (
    <div ref={ref} style={{ width: width, height: height, border: '1px solid black' }} className='flex justify-center items-center'>
      <iframe
        src={link}
        title={title}
        style={{ width: '100%', height: '100%', border: 'none' }}
        
      />
    </div>
  );
});

export default External_render;
