import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LegacyRef } from "react";

declare type DatePickerWapperProps = {
    datePickerRef: LegacyRef<HTMLDivElement> | undefined 
}

const DatePickerWrapper: React.FC<DatePickerWapperProps> = ({datePickerRef}): JSX.Element =>{
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker ref={datePickerRef}/>
        </LocalizationProvider>
    )
};

export default DatePickerWrapper