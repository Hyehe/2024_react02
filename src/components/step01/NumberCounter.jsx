import { Button } from '@mui/material';
import React from 'react';

function NumberCounter(props) {
  function handleClick() {
    console.log('EventOne');
  }
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>버튼하나</Button><br/><br/>
      <Button variant="outlined" onClick={()=>{console.log('EventTwo')}}>버튼둘</Button><br/><br/>
    </div>
  );
}

export default NumberCounter;