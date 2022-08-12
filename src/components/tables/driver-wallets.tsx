import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

export const DriverWalletsListResults = ({ driverwallets, ...rest }) => {

  return (
    <Card {...rest}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Earnings(R)
                </TableCell>
                <TableCell>
                  Trips
                </TableCell>
                <TableCell>
                  Country
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Take Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverwallets.map((driverwallet: any) => (
                <TableRow
                  hover
                  key={driverwallet.id}
                >

                  <TableCell>
                        {driverwallet.name}
                  </TableCell>
                  <TableCell>
                    {driverwallet.earnings}
                  </TableCell>
                  <TableCell>
                    {driverwallet.trips}
                  </TableCell>
                  <TableCell>
                    {driverwallet.country}
                  </TableCell>
                  <TableCell>
                    {driverwallet.status}
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
        </Box>
    </Card>
  );
};

DriverWalletsListResults.propTypes = {
  driverwallets: PropTypes.array.isRequired
};