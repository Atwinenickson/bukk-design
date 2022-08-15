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
              <TableRow sx={{backgroundColor:'rgb(65,68,155)', height:'1px'}}>
                <TableCell>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(207,208,227)'}}>Name</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(207,208,227)'}}>Earnings</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(207,208,227)'}}>Trips</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(207,208,227)'}}>Country</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(207,208,227)'}}>Status</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(207,208,227)'}}>Take Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{backgroundColor:'rgb(54,52,116)'}}>
              {driverwallets?.map((driverwallet: DriverWalletState, index) => (
                <TableRow
                  hover
                  key={driverwallet.name + index}
              sx={{ '&:last-child td, &:last-child th': { border: 0, m:1,p:1},  border: '0.5px solid #2E2957'} }
                >

                  <TableCell sx={{border: 'none'}}>
                  <Typography sx={{width: 2, fontSize: 6, fontWeight:600, color:'rgb(138,137,171)'}}> {driverwallet?.name} </Typography>
                  </TableCell>
                 
                  <TableCell sx={{border: 'none'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(138,137,171)'}}>  {driverwallet?.earnings}  </Typography>
                  </TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(138,137,171)'}}>  {driverwallet?.trips}  </Typography>
                  </TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(138,137,171)'}}>  {driverwallet?.country}  </Typography>
                  </TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(138,137,171)'}}>  {driverwallet?.status}  </Typography>
                  </TableCell>
                  <TableCell sx={{border: 'none'}}>
                      <Typography
                      sx={{width: 2, fontSize:6, fontWeight:600, color:'rgb(138,137,171)'}}
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