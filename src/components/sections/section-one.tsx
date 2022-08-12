import {
  Box, BoxProps, Typography, Button, Container
} from '@mui/material';


export const SectionOneComponent = (props: any) => (
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        m: 1,
        bgcolor: '#283593',
        width: '90%',
        height: '14%',
      }}
    >
      <Typography sx={{
        flexGrow: 1,
        color: 'white',
        textAlign: "center"
      }}>COLLECTIONS</Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        m: 1,
        bgcolor: '#283593',
        width: '90%',
        height: '24%',
      }}
    >
      <Typography sx={{
        flexGrow: 1,
        color: 'white',
        textAlign: "center"
      }}>GRAPH HERE</Typography>
    </Box>
          <Container
      sx={{
        display: 'flex-col',
        alignItems: 'center',
        p: 1,
        m: 1,
        bgcolor: '#283593',
        width: '90%',
        height: '24%',
      }}
    >
      <Box component="div" display="inline"  sx={{
        color: 'white',
        textAlign: "center",
        m:5
      }}>Profitability</Box>
      <Box>
      <Typography variant="subtitle2" sx={{
        color: 'white',
        textAlign: "center"
      }}>Total Earning Profits</Typography>

        <Typography variant="h4" sx={{
        color: 'white',
        textAlign: "center"
      }}>R. 809K</Typography>
      </Box>
      <Typography variant="subtitle2" sx={{
        color: 'white',
        textAlign: "center"
      }}>{`Margin +50%`}</Typography>
      </Container>
      <Container
      sx={{
        display: 'flex-col',
        alignItems: 'center',
        p: 1,
        m: 1,
        bgcolor: '#283593',
        width: '90%',
        height: '24%',
      }}
    >
      <Box component="div" display="inline"  sx={{
        color: 'white',
        textAlign: "center",
      }}>Maker Checkers</Box>
      <Box>
      <Typography variant="subtitle2" sx={{
        color: 'white',
        textAlign: "center"
      }}>Graph Here</Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{ width: 150, height:30, alignContent:"center", backgroundColor:"yellow", color:"black"}}
      >
      <Typography variant="button" display="block"  sx={{
        color: 'black',
        align: "center",
        m:1
      }}>
        View All
      </Typography>
      </Button>
      </Container>
    <Container
      sx={{
        display: 'flex-col',
        alignItems: 'center',
        p: 1,
        m: 1,
        bgcolor: '#283593',
        width: '90%',
        height: '14%',
      }}
    >
      <Typography  variant="subtitle2" sx={{
        color: 'white',
        align: "center"
      }}>COLLECTIONS</Typography>
      <Button
        variant="outlined"
        sx={{ width: 150, height:30, alignContent:"center", backgroundColor:"yellow", color:"black"}}
      >
      <Typography variant="button" display="block"  sx={{
        color: 'black',
        align: "center",
        m:1
      }}>
        View All
      </Typography>
      </Button>
    </Container>
  </Box>

);