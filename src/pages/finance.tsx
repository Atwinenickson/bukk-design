import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { SectionOneComponent } from '../components/sections/section-one';
import { SectionTwoComponent } from '../components/sections/section-two';
import { SectionThreeComponent } from '../components/sections/section-three';
import { fetchWallets, selectWallets } from '../slices/driverwalletsSlice';
import { AppDispatch } from '../store';
import { useSelector, useDispatch } from 'react-redux';




const Finance = () => {

  const {wallets} = useSelector(selectWallets)

  const dispatch = useDispatch<AppDispatch>();
  
  // useEffect(() => {
  //     dispatch(fetchWallets())    
  // }, [dispatch])

  useEffect(() => {
    // if (wallets.loading === 'idle') {
      dispatch(fetchWallets())
    // }
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

         <div>
      <h2>List of Wallets</h2>
      {wallets.loading && <div>Loading...</div>}
      {!wallets.loading && wallets.error ? <div>Error: {wallets.error}</div> : null}
      {!wallets.loading && wallets.driverwallets.length ? (
        <ul>
          {wallets.driverwallets.map(wallet => (
            <li key={wallet.name}>{wallet.name} {wallet.earnings} {wallet.trips} {wallet.country}</li>
          ))}
        </ul>
      ) : null}
    </div> 
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