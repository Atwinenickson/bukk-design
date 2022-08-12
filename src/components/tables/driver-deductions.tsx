import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export const DriverDeductionsListResults = ({ driverdeductions, ...rest }) => {

  return (
    <Card {...rest}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Driver
                </TableCell>
                <TableCell>
                  Country
                </TableCell>
                <TableCell>
                  City
                </TableCell>
                <TableCell>
                  Earnings
                </TableCell>
                <TableCell>
                  Deductions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverdeductions.map((driverdeduction: any) => (
                <TableRow
                  hover
                  key={driverdeduction.id}
                >

                  <TableCell>
                        {driverdeduction.driver}
                  </TableCell>
                  <TableCell>
                    {driverdeduction.country}
                  </TableCell>
                  <TableCell>
                    {driverdeduction.city}
                  </TableCell>
                  <TableCell>
                    {driverdeduction.earnings}
                  </TableCell>
                  <TableCell>
                    {driverdeduction.deductions}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
    </Card>
  );
};

DriverDeductionsListResults.propTypes = {
    driverdeductions: PropTypes.array.isRequired
};