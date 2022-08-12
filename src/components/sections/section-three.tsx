import React, { useState, useEffect } from 'react'
import {
    Box, Typography, Button, Container, Stack, Divider
  } from '@mui/material';
  
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DriverDeductionsListResults } from '../tables/driver-deductions';

import { useSelector, useDispatch } from 'react-redux'
import { getdeductions, getDeductionValues } from '../../slices/driverdeductionsSlice';
  
  
  export const SectionThreeComponent = (props: any) => {


    const driverdeductions = useSelector(getDeductionValues)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getdeductions())    
    }, [])
  
  return(
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
        }}>Prrofitability</Typography>
        {/* <Stack direction="row" alignItems="center" spacing={0}> */}
          {/* <Box
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
          </Box> */}
        {/* </Stack> */}
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

<DriverDeductionsListResults driverdeductions={driverdeductions}/>

    </Container>

)};