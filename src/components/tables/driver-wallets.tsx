import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { DriverWalletState } from '../../slices/driverwalletsSlice';

export const DriverWalletsListResults = ({driverwallets}: {driverwallets: DriverWalletState[]}) => {
let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
  return (
    <TableContainer component={Paper}>
          <Table size="small" aria-label="Driver Wallets Table">
            <TableHead>
              <TableRow sx={{backgroundColor:'#283593'}}>
                <TableCell  size='small'>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Name</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Earnings</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Trips</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Country</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Status</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Take Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{backgroundColor:'#1565c0'}}>
              {driverwallets?.map((driverwallet: DriverWalletState) => (
                <TableRow
                  hover
                  key={driverwallet.name + uniqueId}
              sx={{ '&:last-child td, &:last-child th': { border: 0, m:1,p:1} }}
                >

                  <TableCell>
                  <Typography sx={{width: 2, fontSize: 6, fontWeight:600, color:'white'}}> {driverwallet?.name} </Typography>
                  </TableCell>
                 
                  <TableCell>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverwallet?.earnings}  </Typography>
                  </TableCell>
                  <TableCell>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverwallet?.trips}  </Typography>
                  </TableCell>
                  <TableCell>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverwallet?.country}  </Typography>
                  </TableCell>
                  <TableCell>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverwallet?.status}  </Typography>
                  </TableCell>
                  <TableCell>
                      <Typography
                      sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}
                        color="textPrimary"
                        variant="body1"
                      >
                        Take Action
                      </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
  );
};

DriverWalletsListResults.propTypes = {
  driverwallets: PropTypes.array.isRequired
};