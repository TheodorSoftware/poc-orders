import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Drawer, DrawerHeader, sidebarStyle } from './sidebarStyle';
import { List, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/loginSlice/loginSlice.selectors';
import { Order } from '../../utils/interfaces/order.interface';
import { useQuery, UseQueryResult } from "react-query";
import { getOrdersListForUser } from '../../api/api';
import Spinner from '../../utils/spinner/spinner';

const Sidebar: React.FC = ():JSX.Element => {

  const userEmail: string = useSelector(selectUserEmail);
  const [open, setOpen] = useState<boolean>(false);
  const [orders, setOrders] = useState<Order[]>([]);
  
  const { data, isLoading, error }: UseQueryResult<Order, string> = useQuery('orderData', ()=> fetchOrders());

  const fetchOrders = async () => {
    getOrdersListForUser(userEmail, orders,setOrders)
  };

  const handleDrawer = (): void => {
    setOpen(!open);
  }

  return (
    <Box height={'90%'} sx={{ display: 'flex' }}>
      <Drawer sx={sidebarStyle.drawerContainer} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {
                open ?  <ChevronLeftIcon /> : <ChevronRightIcon /> 
            }
          </IconButton>
        </DrawerHeader>
        <List sx={sidebarStyle.listContainer}>
        {
          orders.map((order: Order,index:number) => {
            return (
              <NavLink 
                style={sidebarStyle.listItem}
                to={`/products/${order.id}`} 
                key={index}> 
                  <Typography sx={sidebarStyle.listItemLabel}>
                    {order.name.toUpperCase()} 
                  </Typography>
                </NavLink>
            )
          })
        }
      </List>
      </Drawer>
      {
        isLoading && <Spinner />
      }
      {
        error && <Typography sx={sidebarStyle.errorMessage}> The data failed to load </Typography>
      }
    </Box>
  );
};

export default Sidebar;
