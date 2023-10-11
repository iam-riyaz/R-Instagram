import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export  function BackdropLoading() {
  
  

  return (
    <div>
      
      <Backdrop
        sx={{ color: '#00bfff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}