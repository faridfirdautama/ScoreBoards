import React from 'react';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

function Reset(props) {
   const handleReset = () => props.onReset(props.id);
   return (
      <button className="reset" onClick={handleReset}><RotateLeftIcon fontSize="large" /></button>
   )
}

export default Reset;