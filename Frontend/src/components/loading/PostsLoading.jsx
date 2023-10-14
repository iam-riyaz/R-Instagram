import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export  function PostsLoading() {
  return (
    <Box sx={{ width: '100%' ,padding:"1px 7px 0px 7px" }}>
      <LinearProgress  />
    </Box>
  );
}