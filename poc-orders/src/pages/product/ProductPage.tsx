import { Params, useParams } from "react-router-dom";
import { useQuery, UseQueryResult } from "react-query";
import { Order } from "../../utils/interfaces/order.interface";
import { Product } from "../../utils/interfaces/product.interface";
import { useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Typography } from "@mui/material";
import { productPageStyle } from "./productPageStyle";
import { getProducts } from "../../api/api";
import AbstractModal from "../../utils/AbstractModal/AbstractModal";
import Spinner from "../../utils/spinner/spinner";

const ProductPage:React.FC = ():JSX.Element => {
    const {id}: Readonly<Params<string>> = useParams();

    const [products,setProducts] = useState<Product[]>([]);
    const [openModal, isOpenModal] = useState<boolean>(false);

    const columns: GridColDef<(typeof products)[number]>[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 120
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 150
        },
        {
            field: 'suplier',
            headerName: 'Suplier',
            width: 200
        },
        {
            field: 'contactSuplier',
            headerName: 'Contact Suplier',
            width: 120,
        }   
    ]
    
    
    const { data, isLoading, error }: UseQueryResult<Order, string> = useQuery(['productData', id], ()=> fetchProducts());
        
    const fetchProducts = async () => {
        if(id){
            const response: Product[] = await getProducts(id.toString());
            setProducts(response);
            return response;
        }
    }

    const addProductHandler= ():void => {
        isOpenModal(true);
    }

    const closeProductHandler = (): void => {
        isOpenModal(false)
    }


    return(
        <Box sx={productPageStyle.productPageContainer}>
            <Button 
                onClick={addProductHandler}
                sx={productPageStyle.addButton} 
                variant="outlined">
                Add Product
            </Button>
            {
                data && <DataGrid
                    rows={products}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 9,
                        },
                    },
                    }}
                    pageSizeOptions={[9]}/> 
            }
            {
                error && <Typography sx={productPageStyle.errorMessage}> The data failed to load !</Typography>
            }
            {
                isLoading && <Spinner />
            }
            <AbstractModal isOpen={openModal} closeModal={closeProductHandler}>
                <p> lol </p>
            </AbstractModal>
        </Box>
    )
};

export default ProductPage;