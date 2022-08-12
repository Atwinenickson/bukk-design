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

  return (
    <TableContainer sx={{width:'10'}} component={Paper}>
          <Table size="small" sx={{width:7}} aria-label="Driver Wallets Table">
            <TableHead>
              <TableRow sx={{backgroundColor:'#283593'}}>
                <TableCell  size='small' style={{ width: "10%" }}>
                  <Typography sx={{ fontSize:7, fontWeight:600, color:'white'}}>Name</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{ fontSize:7, fontWeight:600, color:'white'}}>Earnings</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{ fontSize:7, fontWeight:600, color:'white'}}>Trips</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{ fontSize:7, fontWeight:600, color:'white'}}>Country</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{ fontSize:7, fontWeight:600, color:'white'}}>Status</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{ fontSize:7, fontWeight:600, color:'white'}}>Take Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverwallets?.map((driverwallet: DriverWalletState) => (
                <TableRow
                  hover
                  key={driverwallet.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell>
                        {driverwallet?.name}
                  </TableCell>
                  <TableCell>
                    {driverwallet?.earnings}
                  </TableCell>
                  <TableCell>
                    {driverwallet?.trips}
                  </TableCell>
                  <TableCell>
                    {driverwallet?.country}
                  </TableCell>
                  <TableCell>
                    {driverwallet?.status}
                  </TableCell>
                  <TableCell>
                      <Typography
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