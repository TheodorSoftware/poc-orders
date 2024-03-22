import { Order } from "../../utils/interfaces/order.interface";
import { useState } from "react";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useQuery, UseQueryResult } from "react-query";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../store/loginSlice/loginSlice.selectors";
import { getOrdersListForUser } from "../../api/api";
import Spinner from "../../utils/spinner/spinner";
import { Box, Typography } from "@mui/material";
import { orderPageStyle } from "./orderPageStyle";
import { NavigateFunction, useNavigate } from "react-router-dom";

const OrderPage: React.FC = ():JSX.Element => {

    const navigate: NavigateFunction = useNavigate();
    const userEmail: string = useSelector(selectUserEmail);
    const [orders,setOrders] = useState<Order[]>([]);
    
    const columns: GridColDef<(typeof orders)[number]>[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
        },
        {
            field: 'userEmail',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'orderName',
            headerName: 'Order Name',
            width: 150,
        },
        {
            field: 'receiver',
            headerName: 'Receiver',
            width: 150,
        },
        {
            field: 'sender',
            headerName: 'Sender',
            width: 150,
        },
        {
            field: 'actions',
            headerName: "Actions",
            width: 100,
            sortable: false,
            editable: false,
            
        }
    ];

    const { isLoading, error }: UseQueryResult<Order, string> = useQuery('orderData', ()=> fetchOrders());

    const fetchOrders = async () => {
        getOrdersListForUser(userEmail, orders,setOrders);
    };
    
    const rowClickHandler: GridEventListener<'rowClick'> = (params): void => {
        navigate(`/orders/${params.id}`)
    }

    return (
        <Box sx={orderPageStyle.orderPageContainer}>
            {
                orders && <DataGrid
                    rows={orders}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 4,
                            },
                        },
                    }}
                    onRowClick={rowClickHandler}
                    pageSizeOptions={[4]}/> 
            }
            {
                isLoading && <Spinner />
            }
            {
                error && <Typography sx={orderPageStyle.errorMessage}> The data failed to load </Typography>
            }
        </Box>
    )
};

export default OrderPage;