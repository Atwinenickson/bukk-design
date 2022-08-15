import React, { useState, useEffect } from 'react'
import {
    Box, Typography, Container, Stack, CircularProgress, Alert, Collapse, IconButton
  } from '@mui/material';
  
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DriverDeductionsListResults } from '../tables/driver-deductions';

import { useSelector, useDispatch } from 'react-redux'
import { fetchDeductions, selectDeductions } from '../../slices/driverdeductionsSlice';
import { BaseFareListResults } from '../tables/base-fare-prices';
import { fetchBusFares, selectBusFares } from '../../slices/busfareSlice';
import { AppDispatch } from '../../store';

import CloseIcon from '@mui/icons-material/Close';

import ProfitabilityChart from '../../graphs/profitability'
  
  
  export const SectionThreeComponent = (props: any) => {
    const [open, setOpen] = useState(true);

    const {driverdeductions} = useSelector(selectDeductions)
    const {busfares} = useSelector(selectBusFares)
    const dispatch = useDispatch<AppDispatch>();
  
    
    useEffect(() => {
        dispatch(fetchDeductions()) 
        dispatch(fetchBusFares())  
    }, [])
  
  return(
    <>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom:'1'
        }}
      >

        <Typography variant="h6" sx={{
          color: 'white',
          textAlign: "center",
          fontSize: 13
        }}>Basefare Pricess</Typography>
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
              bgcolor: "#251A40"
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

      <Box>
      {busfares.loading &&  <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
      {!busfares.loading && busfares.error ?  <Box sx={{ display: 'flex' }}>

      <Collapse in={open}>
        <Alert   action={
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
          } severity="error">{busfares.error}</Alert>
            </Collapse>
      </Box> : null}
      {!busfares.loading && busfares.busfares.length ? (
            <BaseFareListResults basefareprices={busfares.busfares}/>
          
      ) : null}
</Box>




      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >

        <Typography variant="h6" sx={{
          color: 'white',
          textAlign: "center",
          fontSize: 13
        }}>Prrofitability</Typography>
        </Box>

<Box >

      <ProfitabilityChart/>

      </Box>
      




      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          marginBottom: 1,
          // bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        <Typography variant="h6" sx={{
          color: 'white',
          textAlign: "center",
          fontSize: 13
        }}>Driver Deductions</Typography>
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
              bgcolor: "#251A40"
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


     
<Box>
      {driverdeductions.loading &&  <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
      {!driverdeductions.loading && driverdeductions.error ?  <Box sx={{ display: 'flex' }}>
      <Collapse in={open}>
        <Alert   action={
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
          } severity="error">{driverdeductions.error}</Alert>
            </Collapse>
        </Box> : null}
      {!driverdeductions.loading && driverdeductions.driverdeductions.length ? (
            <DriverDeductionsListResults driverdeductions={driverdeductions.driverdeductions}/>
          
      ) : null}
</Box>

    {/* </Container> */}
    </>

)};