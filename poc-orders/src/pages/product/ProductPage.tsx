import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
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
import AddProductModal from "../../components/AddProductModal/AddProductModal";

const ProductPage:React.FC = ():JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const {id}: Readonly<Params<string>> = useParams();

    const [products,setProducts] = useState<Product[]>([]);
    const [supliers, setSupliers] = useState<string[]>([]);
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
            extractSupliersFromResponse(response);
            return response;
        }
    }

    const extractSupliersFromResponse = (response: Product[]):void => {
        let productSupliers: string[] = [];
        response.forEach( (product: Product) => {
            if(!productSupliers.find( suplier => suplier === product.suplier)){
                productSupliers.push(product.suplier);
            }
        });
        setSupliers(productSupliers);
    }

    const addProductHandler= ():void => {
        isOpenModal(true);
    }

    const closeProductHandler = (): void => {
        isOpenModal(false)
    }

    const goToOrdersTableHandler = (): void => {
        navigate('/orders')
    }


    return(
        <Box sx={productPageStyle.productPageContainer}>
            <Box sx={productPageStyle.buttonsContainer}>
                <Button
                    onClick={goToOrdersTableHandler}
                    sx={productPageStyle.goBackButton} 
                    variant="outlined">
                    Go Back
                </Button>
                <Button 
                    onClick={addProductHandler}
                    sx={productPageStyle.addButton} 
                    variant="contained">
                    Add Product
                </Button>
            </Box>
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
                <AddProductModal 
                    listOfSupliers={supliers}
                    closeModal={closeProductHandler}/>
            </AbstractModal>
        </Box>
    )
};

export default ProductPage;