import React from 'react';

const Circle = (props) => {
  const { fillColor } = props;

  return (
    <>
        <svg height="20" width="20">
        <circle cx="10" cy="10" r="10" fill={fillColor} />
        Sorry, your browser does not support inline SVG.  
        </svg> 
    </>
  )
}

export default Circle;