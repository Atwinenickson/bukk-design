import PropTypes  from "prop-types";
import styled from '@emotion/styled'
import { AppBar, Toolbar, Badge,Typography, Box, Container,  Tooltip, IconButton  } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



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
          lg: 200
        },
        width: {
          lg: 'calc(100% - 200px)'
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
            
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <DoubleArrowIcon fontSize="small" />
          </IconButton>
          <Typography>
            Dashboard
          </Typography>
        
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="User">
            <IconButton sx={{ ml: 1 }}>
              <PersonOutlineIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Logged In User">
          <Typography>
            Hello John
          </Typography>
          </Tooltip>
          <Tooltip title="Account">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <PermContactCalendarIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Toolbar>
    </RootDashboardNavbar>
)
}

DashboardNavbar.propTypes = {
    onSidebarOpen: PropTypes.func
}