import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { wrapperSelectStyle } from './wrapperSelectStyle';

declare type SelectProps = {
    label: string;
    placeholder: string,
    selectRef: any,
    listToShow: string[]
}

const WrapperSelect: React.FC<SelectProps>= ({label, placeholder,selectRef,listToShow}): JSX.Element => {
    
    const selectSuplierHandler = ():void => {
        
    }
    
    return (
        <FormControl sx={wrapperSelectStyle.container}>
            <InputLabel id="selectSuplier"> {placeholder} </InputLabel>
            <Select 
                label={label}
                labelId="selectSuplier"
                inputRef={selectRef}
                onChange={selectSuplierHandler}>
                    {
                        listToShow && listToShow.map( (item: string , index:number) => {
                            return (
                                <MenuItem 
                                    key={index}
                                    value={item}>
                                    {item}
                                </MenuItem>
                            )
                        })
                    }
                    {
                        listToShow.length === 0 && <MenuItem value={undefined}> ERROR TO UPLOAD DATA !</MenuItem>
                    }
            </Select>
        </FormControl>
    )
};

export default WrapperSelect