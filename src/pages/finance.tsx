import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { CardComponent } from '../components/card/card';

const Finance = () => (
  <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        backgroundColor: '#251A40'
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={3}
          >
          < CardComponent/>
          </Grid>
          <Grid
            item
            xs={5}
          >
          < CardComponent/>
          </Grid>
          <Grid
            item
            xs={4}
          >
            < CardComponent/>
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