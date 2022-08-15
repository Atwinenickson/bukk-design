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
import { Driverdeductionstate } from '../../slices/driverdeductionsSlice';


export const DriverDeductionsListResults = ({driverdeductions}: {driverdeductions: Driverdeductionstate[]}) => {
  let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
  return (
    <TableContainer component={Paper}>
          <Table size="small" aria-label="Driver Wallets Table">
            <TableHead style={{ backgroundColor: '#251A40' }}>
              <TableRow >
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Driver</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Country</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>City</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Earnings</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Deductions</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{backgroundColor:'#251A40'}}>
              {driverdeductions?.map((driverdeduction: Driverdeductionstate) => (
                <TableRow
                  hover
                  key={driverdeduction.driver + uniqueId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}> {~~driverdeduction?.driver} </Typography>
                  </TableCell>
                 
                  <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverdeduction?.country}  </Typography>
                  </TableCell>
                  <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverdeduction?.city}  </Typography>
                  </TableCell >
                  <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {~~driverdeduction?.earnings}  </Typography>
                  </TableCell>
                  <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {~~driverdeduction?.deductions}  </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
  );
};

DriverDeductionsListResults.propTypes = {
  driverdeductions: PropTypes.array.isRequired
};