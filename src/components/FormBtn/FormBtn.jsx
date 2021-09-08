import React from 'react';
import {Button} from '@material-ui/core'
import {useFormikContext} from 'formik'




const FormBtn = ({
    children,
    ...otherProps
}) => {
    const {submitForm} = useFormikContext()

    const handleSubmit = () => {
        submitForm()
    }

    const configButtonSubmit = {
        onClick:handleSubmit,
        variant:'contained',
        color:'primary',
        fullWidth:true,

    }

    return (
        <>
            <Button {...configButtonSubmit}>
                {children}
            </Button>
        </>
    );
}

export default FormBtn;
