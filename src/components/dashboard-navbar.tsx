import PropTypes  from "prop-types";
import styled from '@emotion/styled'
import { AppBar, Toolbar } from "@mui/material";

const RootDahboardNavbar = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props: any) => {
const {onSidebarOpen, ...other} = props;

return (
    <RootDahboardNavbar
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
    </RootDahboardNavbar>
)
}

DashboardNavbar.propTypes = {
    onSidebarOpen: PropTypes.func
}