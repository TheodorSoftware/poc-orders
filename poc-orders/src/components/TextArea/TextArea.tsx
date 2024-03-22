import { Box, Checkbox, FormControlLabel, TextareaAutosize } from "@mui/material"
import { RefObject, useState } from "react";
import { textAreaStyle } from "./textAreaStyle";

declare type TextAreaProps = {
    label: string,
    placeholder: string,
    textareaRef: any 
}

const TextArea: React.FC<TextAreaProps> = ({label, placeholder,textareaRef}): JSX.Element => {

    const [enableTextArea,setEnableTextArea] = useState<boolean>(true);

    const checkboxHandler = ():void => {
        setEnableTextArea(!enableTextArea)
    }

    return (
        <Box sx={textAreaStyle.container}>
            <FormControlLabel 
                onClick={checkboxHandler}
                control={<Checkbox />} 
                label={label}/>
            <TextareaAutosize 
                style={textAreaStyle.textArea}
                placeholder={placeholder}
                ref={textareaRef}
                disabled= {enableTextArea ? true : false}
            />
        </Box>
    )
}

export default TextArea;