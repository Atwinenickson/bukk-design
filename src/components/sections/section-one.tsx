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
      bgcolor: '#2E2957',
      borderRadius: 1,
      flexGrow: 1
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
        flexGrow: 1
      }}
    >
      <Typography sx={{
        flexGrow: 1,
        color: 'white',
        textAlign: "center",
        fontSize:10,
        fontWeight:300
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
        flexGrow: 1
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
        flexGrow: 1
      }}
    >
      <Box component="div" display="flex"  sx={{
        color: 'white',
        textAlign: "center",
        marginLeft:3,
        paddingBottom:1,
        // m:5,
         flexGrow: 1
      }}>Prrofitability</Box>
      <Box>
      <Typography variant="subtitle2" sx={{
        color: 'white',
        textAlign: "center",
        fontSize:10,
        fontWeight:300
      }}>Total Earning Profits</Typography>

        <Typography variant="h4" sx={{
        color: 'white',
        textAlign: "center"
      }}>R. 809K</Typography>
      </Box>
      <Typography variant="subtitle2" sx={{
        color: 'white',
        textAlign: "center",
        fontSize:10,
        fontWeight:300
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
        flexGrow: 1
      }}
    >
      <Box component="div" display="inline"  sx={{
        color: 'white',
        textAlign: "center",
        fontSize:10,
        fontWeight:300,
        paddingBottom:2
      }}>Maker Checkers</Box>
      <Box>
      <Typography variant="subtitle2" sx={{
        color: 'white',
        textAlign: "center"
      }}>Graph Here</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          paddingTop:2,
          flexGrow: 1
        }}
      >
      <Button
        size='small'
        sx={{ width: 150, height:30, alignContent:"center", backgroundColor:"yellow", color:"black"}}
      >
      <Typography variant="button" display="block"  sx={{
        color: 'black',
        align: "center",
        m:1,
        fontSize:8
      }}>
        View All
      </Typography>
      </Button>

      </Box>


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
        flexGrow: 1
      }}
    >
      <Typography  variant="subtitle2" sx={{
        color: 'white',
        align: "center",
        fontSize:10,
        fontWeight:300,
        paddingBottom:2
      }}>Payment History</Typography>
        <Box
        sx={{
          display: 'flex',
          paddingTop:2,
          flexGrow: 1
        }}
      >
      <Button
        size='small'
        sx={{ width: 150, height:30, alignContent:"center", backgroundColor:"yellow", color:"black"}}
      >
      <Typography variant="button" display="block"  sx={{
        color: 'black',
        align: "center",
        m:1,
        fontSize:8
      }}>
        View All
      </Typography>
      </Button>

      </Box>
    </Container>
  </Box>

);