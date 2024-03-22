import { Box, Button, FormGroup, Typography } from "@mui/material";
import { addProductModalStyle } from "./addProductModalStyle";
import { LegacyRef, MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import TextArea from "../TextArea/TextArea";
import WrapperSelect from "../WrapperSelect/WrapperSelect";
import DatePickerWrapper from "../DatePickerWrapper/DatePickerWrapper";
import { Rules, ValidationRegexRules } from "../../utils/regex/validationRegexRules";
import WrapperInput from "../WrapperInput/WrapperInput";
import { Product } from "../../utils/interfaces/product.interface";
import { postProduct } from "../../api/api";
import { Params, useParams } from "react-router-dom";

declare type AddProductModalProps = {
    closeModal: () => void,
    listOfSupliers: string[]
}

declare type AddProductForm = {
    productName: boolean,
    phoneNumber: boolean,
    date: boolean,
    suplier: boolean,
}

const AddProductModal:React.FC<AddProductModalProps> = ({closeModal,listOfSupliers}): JSX.Element => {

    const {id}: Readonly<Params<string>> = useParams();

    const productInputRef: LegacyRef<HTMLInputElement | undefined> = useRef<HTMLInputElement | undefined>();
    const dateInputRef: LegacyRef<HTMLDivElement> | undefined  = useRef() as LegacyRef<HTMLDivElement> | undefined ;
    const contactInputRef: LegacyRef<HTMLInputElement | undefined> = useRef<HTMLInputElement | undefined>();
    const suplierInputRef: LegacyRef<HTMLInputElement | undefined> = useRef<HTMLInputElement | undefined>();
    const descriptionInputRef: RefObject<HTMLTextAreaElement | undefined>  = useRef();
    const notesInputRef: RefObject<HTMLTextAreaElement | undefined>  = useRef();

    const [touchedForm, setTochedForm] = useState<boolean>(false);
    const [disableSaveButton, setDisableSaveButton] = useState<boolean>(true);
    const [addProductForm, setAddProductForm] = useState<AddProductForm>({
        productName: false,
        phoneNumber: false,
        date: false,
        suplier: false,
    });

    const resetProductNameErrorHandler = () => {
        setAddProductForm( (prevState: AddProductForm) => {
            return {
                ...prevState,
                productName: false
            }
        })
    }

    const checkProductName = (): void =>{
        if(productInputRef.current){
            if(productInputRef.current.value.length <= 4){
                setAddProductForm( (prevState: AddProductForm) =>{
                    return {
                        ...prevState,
                        productName: true
                    }
                })
            }
        }
    }
    
    const resetContactPhoneErrorHandler = () => {
        setAddProductForm( (prevState: AddProductForm) => {
            return {
                ...prevState,
                phoneNumber: false
            }
        })
    }

    const checkContactNumber = (): void =>{
        if(contactInputRef.current){
            if(!ValidationRegexRules.get(Rules.PHONE_NUMBER)?.test(contactInputRef.current.value)){
                setAddProductForm( (prevState: AddProductForm) =>{
                    return {
                        ...prevState,
                        phoneNumber: true
                    }
                })
            }
        }
    }

    useEffect(() => {
        if(touchedForm){
            if( !(addProductForm.productName ||
                addProductForm.date ||
                addProductForm.suplier ||
                addProductForm.phoneNumber)){
                    console.log(addProductForm);
                setDisableSaveButton(false);
            }else {
                setDisableSaveButton(true);
            }
        }else {
            setTochedForm(true);
        }
    },[addProductForm])

    const saveHandler = (): void => {
        if( productInputRef.current?.value &&
            dateInputRef?.toString &&
            suplierInputRef.current?.value &&
            contactInputRef.current?.value){
                const product: Product = {
                    id: 100,
                    name: productInputRef.current?.value,
                    date: new Date(dateInputRef.toString()),
                    suplier: suplierInputRef.current.value,
                    contactSuplier: contactInputRef.current.value
                }
                postProduct(id, product);
            };
    }

    const cancelHandler = (): void => {
        closeModal();
    }

    return(
        <Box sx={addProductModalStyle.container}>
            <Typography sx={addProductModalStyle.header}>
                Add New Product
            </Typography>
            <FormGroup>
                <Box sx={addProductModalStyle.firstRow}>
                    <WrapperInput 
                        inputContainer={addProductModalStyle.inputContainer} 
                        required={true} 
                        label={"Product Name"}
                        type={"text"} 
                        checkInput={checkProductName}
                        resetErrorHandler={resetProductNameErrorHandler}
                        helperText={"product name invalid"}
                        error={addProductForm.productName}
                        inputRef={productInputRef}/>
                     <WrapperInput 
                        inputContainer={addProductModalStyle.inputContainer} 
                        required={true} 
                        label={"Contact Number"}
                        type={"text"} 
                        checkInput={checkContactNumber}
                        resetErrorHandler={resetContactPhoneErrorHandler}
                        helperText={"Phone number invalid"}
                        error={addProductForm.phoneNumber}
                        inputRef={contactInputRef}/>
                </Box>
                
                <DatePickerWrapper datePickerRef={dateInputRef}/>

                <WrapperSelect 
                    label="Suplier" 
                    placeholder="Suplier"
                    selectRef={suplierInputRef}
                    listToShow={listOfSupliers}/>
                
                <TextArea 
                    label="Enable Description" 
                    placeholder="Description"
                    textareaRef={descriptionInputRef}/>
                <TextArea 
                    label="Enable Notes" 
                    placeholder="Notes"
                    textareaRef={notesInputRef}/>

                <Box sx={addProductModalStyle.buttonsContainer}>
                    <Button 
                        variant="outlined"
                        onClick={cancelHandler}> 
                        Cancel 
                    </Button>
                    <Button 
                        disabled = {disableSaveButton}
                        variant="contained"
                        onClick={saveHandler}> 
                        Save 
                    </Button>
                </Box>
            </FormGroup>
        </Box>
    )
};

export default AddProductModal