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

  return (
    <TableContainer component={Paper}>
          <Table size="small" aria-label="Driver Wallets Table">
            <TableHead style={{ backgroundColor: '#251A40' }}>
              <TableRow >
                <TableCell>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Driver</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Country</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>City</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Earnings</Typography>
                </TableCell>
                <TableCell>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Deductions</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{backgroundColor:'#251A40'}}>
              {driverdeductions?.map((driverdeduction: Driverdeductionstate) => (
                <TableRow
                  hover
                  key={driverdeduction.driver}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell sx={{ border: '0.5px solid white'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}> {driverdeduction?.driver} </Typography>
                  </TableCell>
                 
                  <TableCell sx={{ border: '0.5px solid white'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverdeduction?.country}  </Typography>
                  </TableCell>
                  <TableCell sx={{border: '0.5px solid white'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverdeduction?.city}  </Typography>
                  </TableCell >
                  <TableCell sx={{border: '0.5px solid white'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverdeduction?.earnings}  </Typography>
                  </TableCell>
                  <TableCell sx={{border: '0.5px solid white'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {driverdeduction?.deductions}  </Typography>
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