import { Box, SxProps, TextField, Theme } from "@mui/material";
import { Ref } from "react";

declare type WrapperInputProps = {
    inputContainer: SxProps<Theme> | undefined,
    required: boolean | undefined
    label: string,
    type: string;
    checkInput:  () => void;
    resetErrorHandler: () => void;
    helperText: string;
    error: boolean;
    inputRef: any
}
 
const WrapperInput:React.FC<WrapperInputProps> = ({
    inputContainer,
    required,
    label,
    type,
    checkInput,
    resetErrorHandler,
    helperText,
    error,
    inputRef,
}): JSX.Element => {

    const checkValidity = (): void => {
        checkInput()
    }

    const resetProductNameErrorHandler = () => {
        resetErrorHandler()
    };

    return (
        <Box sx={inputContainer}>
            <TextField 
                required= {required}
                label={label}
                variant="outlined"
                type={type}
                onBlur={checkValidity}
                onChange={resetProductNameErrorHandler}
                helperText={error ? <>{helperText}</>: null}
                error={error ? true : false}
                inputRef={inputRef}/>
        </Box>
    )
}

export default WrapperInput;