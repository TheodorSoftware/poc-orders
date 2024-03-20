import { styled } from "@mui/material";
import { openedMixin } from "../../utils/theme/openedMixin";
import { closedMixin } from "../../utils/theme/closedMixin";
import MuiDrawer from '@mui/material/Drawer';

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: 340,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
      '& .MuiPaper-root.MuiDrawer-paper': {
        position: "unset",
      }
    }),
  );

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const sidebarStyle = {
  drawerContainer: {
    height: "100% !important",
  },
  listItem: {
    textDecoration: 'none',
    color: 'black',
    margin: '20px'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px'
  },
  listItemLabel:{
    fontSize:'18px'
  },
  errorMessage:{
    color: 'red'
  }
}
