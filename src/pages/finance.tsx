import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { CardComponent } from '../components/card/card';

const Finance = () => (
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
           <Typography sx={{
        color: 'white',
        textAlign: "center"
      }}>Finance</Typography>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={3}
            sx={{
              backgroundColor: 'red'
            }}
          >
          < CardComponent/>
          </Grid>
          <Grid
            item
            xs={5}
          >
          </Grid>
          <Grid
            item
            xs={4}
          >
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Finance.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Finance;