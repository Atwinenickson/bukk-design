import { useEffect } from 'react';
import NextLink from 'next/link';

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Drawer, Divider, useMediaQuery, Toolbar, IconButton, Typography  } from '@mui/material';




import GridViewIcon from '@mui/icons-material/GridView';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { NavItem } from './nav-item';
import { Logo } from './logo';


const items = [
    {
      href: '/',
      icon: (<GridViewIcon fontSize="small" />),
      title: 'Dashboard'
    },
    {
      href: '/administration',
      icon: (<SupervisorAccountIcon fontSize="small" />),
      title: 'Administration'
    },
    {
      href: '/management',
      icon: (<AssuredWorkloadIcon fontSize="small" />),
      title: 'Management'
    },
    {
      href: '/fleetmanagement',
      icon: (<LocalShippingIcon fontSize="small" />),
      title: 'FleetManagement'
    },
    {
      href: '/ticketing',
      icon: (<LocalActivityIcon fontSize="small" />),
      title: 'Ticketing'
    },
    {
      href: '/tasking',
      icon: (<TaskAltIcon fontSize="small" />),
      title: 'Tasking'
    },
    {
      href: '/finance',
      icon: (<AccountBalanceIcon fontSize="small" />),
      title: 'Finance'
    },
    {
      href: '/profiles',
      icon: (<ManageAccountsIcon fontSize="small" />),
      title: 'Profiles'
    },
    {
        href: '/account',
        icon: (<AccountCircleIcon fontSize="small" />),
        title: 'MyAccount'
      },
  ];
  




  export const DashboardSidebar = (props: any) => {
    const { open, onClose, ...other  } = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
      defaultMatches: true,
      noSsr: false
    });
  
    useEffect(
      () => {
        if (!router.isReady) {
          return;
        }
  
        if (open) {
          onClose?.();
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [router.asPath]
    );
  
    const content = (
      <>
        <Box
          sx={{
            backgroundColor: '#120E1F',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >


<Box sx={{ p: 3 }}

>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink>


          
        <Box sx={{ flexGrow: 1 }}>
      <IconButton
            onClick={onClose}
            sx={{
              display: {
                xs: 'none',
                lg: 'inline-flex'
              },
              color: 'white'
            }}
          >
            <DoubleArrowIcon fontSize="small" />
          </IconButton>
          </Box>
         
          </Box>


<Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />


          <Box sx={{ flexGrow: 1 }}>
            {items.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
              />
            ))}
          </Box>
        </Box>
      </>
    );
  
    if (lgUp) {
      return (
        <Drawer
          anchor="left"
          open
          PaperProps={{
            sx: {
              backgroundColor: 'neutral.900',
              color: '#FFFFFF',
              width: 200
            }
          }}
          variant="permanent"
        >
          {content}
        </Drawer>
      );
    }
  
    return (
      <Drawer
        anchor="left"
        onClose={onClose}
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 200
          }
        }}
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
        variant="temporary"
      >
        {content}
      </Drawer>
    );
  };
  
  DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
  };