import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout'


const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | GETBUKK
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>DASHBOARD
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;