import React, { useState, useEffect } from 'react'
import {
  Box, Typography, Button, Container, Stack, Divider, CircularProgress, Alert, IconButton
} from '@mui/material';

import WorkIcon from '@mui/icons-material/Work';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DriverWalletsListResults } from '../tables/driver-wallets';
import { useSelector, useDispatch } from 'react-redux'
import { fetchWallets, selectWallets } from '../../slices/driverwalletsSlice';
import { AppDispatch } from '../../store';

import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';


import YearlyChart from '../../graphs/year-data'


export const SectionTwoComponent = (props: any) => {
  const [open, setOpen] = useState(true);

  const { wallets } = useSelector(selectWallets)

  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    console.log('running once')
    dispatch(fetchWallets())
  }, [])

  console.log(wallets.driverwallets)

  return (
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
          // p: 1,
          // m: 1,
          paddingTop: 1,
          borderRadius: 1,
          flexGrow: 1,
          flexWrap: 'wrap',
        }}
      >

        <Typography variant="h6" sx={{
          color: 'white',
          textAlign: "center",
          fontSize: 13
        }}>Transactions</Typography>
        <Stack direction="row" alignItems="center" spacing={0}>
          <Box
            sx={{
              size: "small",
              // color:'primary',
              variant: 'text',
              borderRadius: 5,
              border: 1,
              width: '4rem',
              height: '1.15rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#424242"
            }}
          >
            <Typography variant="subtitle2" sx={{
              color: '#b0bec5',
              textAlign: "center",
              fontSize: 10,
              fontWeight: 300
            }}>Daily</Typography>
          </Box>
          <Box
            sx={{
              size: "small",
              color: 'primary',
              variant: 'text',
              borderRadius: 5,
              border: 1,
              width: '4rem',
              height: '1.15rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#FFCF12"
            }}
          >
            <Typography variant="subtitle2" sx={{
              color: '#7C7581',
              textAlign: "center",
              fontSize: 10,
              fontWeight: 300
            }}>Monthly</Typography>
          </Box>
          <Box
            sx={{
              size: "small",
              color: 'primary',
              variant: 'text',
              borderRadius: 5,
              border: 1,
              width: '4rem',
              height: '1.2rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#977D34",
              flexGrow: 1
            }}
          >
            <Typography variant="subtitle2" sx={{
              color: '#cfd8dc',
              textAlign: "center",
              fontSize: 10,
              fontWeight: 300
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
          flexGrow: 1
        }}
      >
        <Stack direction="column" alignItems="center" spacing={0}>

          <Stack direction="row" alignItems="center" spacing={1}>
            <WorkIcon sx={{
              color: '#B16903',
              fontSize: 10
            }} /><Typography variant="h6" sx={{
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
            }} />
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
            }} />
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

      <Box>
        <YearlyChart />
      </Box>


      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
          p: 1,
          flexGrow: 1
        }}
      >
        <Box
          // size='small'
          sx={{ width: 130, height: 22, alignContent: "center", backgroundColor: "yellow", color: "black" }}
        >
          <Typography variant="subtitle2" sx={{
            color: '#424242',
            alignContent: "center",
            marginLeft: 2,
            paddingTop: 0.5,
            fontSize: 8
          }}>
            Generate excel sheet
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: '#38345B',
          my: 3
        }}
      />



      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          // bgcolor: 'background.paper',
          borderRadius: 1,
          flexGrow: 1
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
              bgcolor: "rgb(37,26,64)",
              flexGrow: 1
            }}
          >
            <Typography variant="subtitle2" sx={{
              color: 'white',
              textAlign: "center",
              fontSize: 8
            }}>See all <ArrowForwardIosIcon sx={{ fontSize: 8 }} />  </Typography>
          </Box>
        </Stack>
      </Box>


      <Box>
        {wallets.loading && <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>}
        {!wallets.loading && wallets.error ? <Box sx={{ display: 'flex' }}>
          <Collapse in={open}>
            <Alert action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            } severity="error">{wallets.error}</Alert>
          </Collapse>
        </Box> : null}
        {!wallets.loading && wallets.driverwallets.length ? (
          <DriverWalletsListResults driverwallets={wallets.driverwallets} />

        ) : null}
      </Box>





    </Container>

  )
};