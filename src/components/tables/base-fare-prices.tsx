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
import { Busfarestate } from '../../slices/busfareSlice';


export const BaseFareListResults = ({basefareprices}: {basefareprices: Busfarestate[]}) => {
  let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
  return (
    <TableContainer component={Paper}>
          <Table size="small" aria-label="Driver Wallets Table">
            <TableHead>
              <TableRow sx={{backgroundColor:'#2E2957'}}>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Country</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>City</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Rate</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Discount</Typography>
                </TableCell>
                <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>Tax</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{backgroundColor:'#251A40'}}>
              {basefareprices?.map((basefareprice: Busfarestate) => (
                <TableRow
                  hover
                  key={basefareprice.city+ uniqueId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell sx={{ border: '0.1px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}> {basefareprice?.country} </Typography>
                  </TableCell>
                 
                  <TableCell sx={{ border: '0.5px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {basefareprice?.city}  </Typography>
                  </TableCell>
                  <TableCell sx={{ border: '0.5px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {basefareprice?.rate}  </Typography>
                  </TableCell >
                  <TableCell sx={{ border: '0.5px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {basefareprice?.discount}  </Typography>
                  </TableCell>
                  <TableCell sx={{ border: '0.5px solid rgb(41,34,76)'}}>
                  <Typography sx={{width: 2, fontSize:6, fontWeight:600, color:'white'}}>  {basefareprice?.tax}  </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
  );
};

BaseFareListResults.propTypes = {
  basefareprices: PropTypes.array.isRequired
};