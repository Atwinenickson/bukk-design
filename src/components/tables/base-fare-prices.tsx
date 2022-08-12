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

export const BaseFareListResults = ({ basefareprices, ...rest }) => {

  return (
    <Card {...rest}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Country
                </TableCell>
                <TableCell>
                  City
                </TableCell>
                <TableCell>
                  %KM
                </TableCell>
                <TableCell>
                  %Discount
                </TableCell>
                <TableCell>
                  Tax
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basefareprices.map((basefareprice: any) => (
                <TableRow
                  hover
                  key={basefareprice.id}
                >

                  <TableCell>
                        {basefareprice.country}
                  </TableCell>
                  <TableCell>
                    {basefareprice.city}
                  </TableCell>
                  <TableCell>
                    {basefareprice.rate}
                  </TableCell>
                  <TableCell>
                    {basefareprice.discount}
                  </TableCell>
                  <TableCell>
                    {basefareprice.tax}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
    </Card>
  );
};

BaseFareListResults.propTypes = {
  basefareprices: PropTypes.array.isRequired
};