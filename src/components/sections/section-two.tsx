import {
    Box, Typography, Button, Container, Stack
  } from '@mui/material';

  import WorkIcon from '@mui/icons-material/Work';
  import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
  import PersonIcon from '@mui/icons-material/Person';
import { AddBoxTwoTone } from '@mui/icons-material';
  
  
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
          bgcolor: '#2E2957',
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
          // bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
             
                        <Typography variant="h6" sx={{
        color: 'white',
        textAlign: "center"
      }}>Transactions</Typography>
                        <Stack sx={{m:1}} direction="row" alignItems="center" spacing={0}>
                            <Box
                               sx={{
                                size:"small",
                                // color:'primary',
                                variant: 'text',
                                borderRadius:5,
                                border: 1,
                                width: '4rem',
                                height: '1.15rem',
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                bgcolor:"#5B4D48"
                               }}
                            >
                                <Typography variant="subtitle2" sx={{
        color: '#b0bec5',
        textAlign: "center"
      }}>Daily</Typography>
                            </Box>
                            <Box
                               sx={{
                                size:"small",
                                color:'primary',
                                variant: 'text',
                                borderRadius:5,
                                border: 1,
                                width: '4rem',
                                height: '1.15rem',
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                bgcolor:"#FFCF12"
                               }}
                            >
                                <Typography variant="subtitle2" sx={{
        color: '#7C7581',
        textAlign: "center"
      }}>Monthly</Typography>
                            </Box>
                            <Box
                               sx={{
                                size:"small",
                                color:'primary',
                                variant: 'text',
                                borderRadius:5,
                                border: 1,
                                width: '4rem',
                                height: '1.2rem',
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                bgcolor:"#5B4D48"
                               }}
                            >
                                <Typography variant="subtitle2" sx={{
        color: '#cfd8dc',
        textAlign: "center"
      }}>Yearly</Typography>
                            </Box>
                        </Stack>
                </Box>



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