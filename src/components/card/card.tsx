import {
    Box,
    Card,
    CardContent,
     Typography
  } from '@mui/material';
  
  export const CardComponent = (props: any) => (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Card
        </Typography>
       
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
           <p>Hello</p>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );