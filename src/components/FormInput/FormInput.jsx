import React from 'react';
import {TextField} from '@material-ui/core'
import {useField} from 'formik'


    const TextFiledWrapper =({
        name,
        label,
        ...otherProps
    }) => {
        const [feild,meta] = useField(name)
        const configTextFeild = {
            ...feild,
            ...otherProps,
            fullWidth:true,
            
        }
        if (meta && meta.touched && meta.error) {
            configTextFeild.error = true
            configTextFeild.helperText = meta.error
        }
    return (
        <>
            <TextField label={label} {...configTextFeild} />
            
        </>
    )
}

export default TextFiledWrapper
