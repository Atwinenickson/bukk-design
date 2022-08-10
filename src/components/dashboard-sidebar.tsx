import GridViewIcon from '@mui/icons-material/GridView';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
  