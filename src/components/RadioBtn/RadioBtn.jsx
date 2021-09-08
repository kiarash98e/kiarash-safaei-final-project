import React from 'react';
import {
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio
} from '@material-ui/core'
import { useField } from 'formik';

const RadioBtn = ({
    value,
    handleRadioChange,
    name,
    label,
    ...otherProps   
}) => {
    const [feild,meta] = useField(name)
    const configRadio ={
        ...feild,
        onChange:handleRadioChange,
        value:value,
    }
    const configControl ={}
    if (meta && meta.touched && meta.error) {
        configControl.error = true
    }
    return (
        <>
           <FormControl {...configControl} component="fieldset">
                <FormLabel component="legend" style={{color:'#333'}}>جنسیت خود را انتخاب کنید</FormLabel>
                    <RadioGroup aria-label={label} style={{display: 'flex',flexDirection:'row'
                    }} {...configRadio}>
                        <FormControlLabel xs={6} value="female" control={<Radio />} label="زن" />
                        <FormControlLabel xs={6} value="male" control={<Radio />} label="مرد" />
                    </RadioGroup>
            </FormControl>
                       
        </>
    );
}

export default RadioBtn;
