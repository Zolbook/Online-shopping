import React from 'react';

const Scroll = (props) => {
  return( 
    <div className='scroll' style={{overflowY: 'scroll',  width: '210px',
    height:'180px'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;