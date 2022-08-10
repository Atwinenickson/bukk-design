import PropTypes  from "prop-types";
import styled from '@emotion/styled'
import { AppBar, Toolbar } from "@mui/material";

const RootDashboardNavbar = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props: any) => {
const {onSidebarOpen, ...other} = props;

return (
    <RootDashboardNavbar
    sx={{
        left: {
          lg: 280
        },
        width: {
          lg: 'calc(100% - 280px)'
        }
      }}
      {...other}
    >
        <Toolbar
           disableGutters
           sx={{
             minHeight: 64,
             left: 0,
             px: 2
           }}
        >
            <div>Hello</div>
        </Toolbar>
    </RootDashboardNavbar>
)
}

DashboardNavbar.propTypes = {
    onSidebarOpen: PropTypes.func
}