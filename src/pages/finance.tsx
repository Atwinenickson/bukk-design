import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { SectionOneComponent } from '../components/sections/section-one';
import { SectionTwoComponent } from '../components/sections/section-two';
import { SectionThreeComponent } from '../components/sections/section-three';

import { useSelector, useDispatch } from 'react-redux'
import {getwallets, getWalletValues} from '../slices/driverwalletsSlice'


const Finance = () => {

const wallets = useSelector(getWalletValues)
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getwallets())    
}, [])

return (

  <>
    <Head>
      <title>
        Finance
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        backgroundColor: '#251A40',
        width:'100%',
        height: '100%'
      }}
    >
      <Box  sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
        }}>
      <Typography sx={{
        color: 'white',
        textAlign: "center"
      }}>Finance Panel</Typography>
      </Box>  
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={3}
            sx={{
              // backgroundColor: 'red'
            }}
          >
          < SectionOneComponent/>
          </Grid>
          <Grid
            item
            xs={5}
          >
            <SectionTwoComponent/>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <SectionThreeComponent/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)};

Finance.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Finance;