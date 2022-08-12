import {
    Box, Typography, Button, Container, Stack
  } from '@mui/material';

  import WorkIcon from '@mui/icons-material/Work';
  import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
  import PersonIcon from '@mui/icons-material/Person';
  
  
  export const SectionTwoComponent = (props: any) => (
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
        <Container
        sx={{
          display: 'flex-col',
          alignItems: 'center',
          p: 1,
          m: 1,
          bgcolor: 'blue',
          width: '90%',
          height: '70%',
        }}
      >
       <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
             
                        <Typography variant="h6" sx={{
        color: 'white',
        textAlign: "center"
      }}>Transactions</Typography>
                        <Stack direction="row" alignItems="center" spacing={0}>
                            <Button
                                size="small"
                                color='primary'
                                variant= 'text'
                            >
                                Daily
                            </Button>
                            <Button
                               size="small"
                               color='primary'
                               variant= 'text'
                            >
                                Monthly
                            </Button>
                            <Button
                               size="small"
                               color='primary'
                               variant= 'text'
                            >
                                Yearly
                            </Button>
                        </Stack>
                </Box>



      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
         <Stack direction="column" alignItems="center" spacing={0}>

         <Stack direction="row" alignItems="center" spacing={1}>
         <WorkIcon sx={{
        color: '#B16903',
        fontSize: 10
      }}/><Typography variant="h6" sx={{
        color: 'white',
        textAlign: "center",
        fontSize: 8
      }}>Business</Typography>
      </Stack>

<Typography variant="subtitle2" sx={{
        color: '#B16903',
        textAlign: "center",
        fontSize: 10
      }}>R. 8,908.04</Typography>
</Stack>

<Stack direction="column" alignItems="center" spacing={0}>

<Stack direction="row" alignItems="center" spacing={1}>
         <DirectionsBusFilledIcon sx={{
        color: '#429733',
        fontSize: 10
      }}/>
       <Typography variant="h6" sx={{
        color: 'white',
        textAlign: "center",
        fontSize: 8
      }}>Drivers</Typography>

      </Stack>
<Typography variant="subtitle2" sx={{
        color: '#429733',
        textAlign: "center",
        fontSize: 10
      }}>R. 81,908.04</Typography>
</Stack>

<Stack direction="column" alignItems="center" spacing={0}>

<Stack direction="row" alignItems="center" spacing={1}>
         <PersonIcon sx={{
        color: '#D92C7A',
        fontSize: 10
      }}/>
      <Typography variant="h6" sx={{
        color: 'white',
        textAlign: "center",
        fontSize: 8
      }}>Customers</Typography>
</Stack>
<Typography variant="subtitle2" sx={{
        color: '#D92C7A',
        textAlign: "center",
        fontSize: 10
      }}>R. 108,908.04</Typography>
</Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 2</Typography>
      </Box>
        </Container>
      <Container
        sx={{
          display: 'flex-col',
          alignItems: 'center',
          p: 1,
          m: 1,
          bgcolor: 'blue',
          width: '90%',
          height: '30%',
        }}
      >
        <Typography  variant="subtitle2" sx={{
          color: 'white',
          align: "center"
        }}>TABLE</Typography>
      </Container>
    </Box>
  
  );