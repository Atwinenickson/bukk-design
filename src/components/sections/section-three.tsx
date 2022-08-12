import {
    Box, Typography, Button, Container, Stack, Divider
  } from '@mui/material';
  
  import WorkIcon from '@mui/icons-material/Work';
  import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
  import PersonIcon from '@mui/icons-material/Person';
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  
  
  export const SectionTwoComponent = (props: any) => (
<Container
sx={{
  display: 'flex-col',
  alignItems: 'center',
  bgcolor: '#2E2957',
}}
>


<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          // bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        <Typography variant="h6" sx={{
          color: 'white',
          textAlign: "center",
          fontSize: 13
        }}>Driver Wallets</Typography>
        <Stack direction="row" alignItems="center" spacing={0}>
          <Box
            sx={{
              size: "small",
              variant: 'text',
              borderRadius: 5,
              border: 1,
              width: '4rem',
              height: '1.15rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#5B4D48"
            }}
          >
            <Typography variant="subtitle2" sx={{
              color: 'white',
              textAlign: "center",
              fontSize:8
            }}>See all <ArrowForwardIosIcon sx={{fontSize:8}}/>  </Typography>
          </Box>
        </Stack>
      </Box>

    </Container>

);