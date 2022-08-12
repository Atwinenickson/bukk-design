import {
    Box,     BoxProps 
  } from '@mui/material';

  
  export const CardComponent = (props: any) => (
    <div style={{ width: '100%', bgc }}>
  <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
      </Box>
 </div>
        
  );