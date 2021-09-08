/* eslint-disable no-undef */
import React from 'react';
import { makeStyles } from '@material-ui/styles'
import FormInput from '../FormInput/FormInput'
import FormBtn from '../FormBtn/FormBtn'
import '../SignUp/SignUp.style.css'
import {
    Grid,
    Container,
    Typography,
    Link
} from '@material-ui/core'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        color: '#333',
        background: '#a6d4fa',
        padding: '1rem .75rem',
        borderRadius:8
    },
    formWrapper: {
        marginTop: 5,
        marginBottom: 8,
    },
    btnSubmit: {
        marginBottom: '4rem'
    }
}))

const initialFormState = {
    phone: '',
    codePhone: '',
}

const FormValidtion = Yup.object().shape({
    phone: Yup.string()
        // eslint-disable-next-line no-useless-escape
        .matches(/^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/, 'شماره همراه نامعتبر است')
        .typeError('شماره همراه درست وارد کنید')
        .required('لطفا فیلد بالا پر کنید'),
    codePhone: Yup.number()
        .integer()
        .typeError('کد تایید اشتباه است')
        .required('لطفا فیلد بالا پر کنید'),
})




const SignIn = ({setIsLogin,setProfile}) => {
    const classes = useStyles()
    const IsSignUp = () =>{
        setIsLogin(false)
    }
    const Profile =() => {
        setProfile(true)
    }
    const history = useHistory()
    return (
        <>
            <Grid container >
                <Grid item xs={12}>
                    <Container maxWidth='xs' className={classes.root}>
                        <div className={classes.formWrapper}>
                            <Formik
                                initialValues={{
                                    ...initialFormState
                                }}
                                validationSchema={FormValidtion}
                                onSubmit={(values,{ setSubmitting, resetForm }) => {
                                    setTimeout(() => {
                                        console.log(JSON.stringify(values), null, 2)
                                        setSubmitting(true)
                                        resetForm()
                                        Profile()
                                        history.push('/')
                                    }, 2000)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <FormInput label='شماره همراه' name='phone' />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormInput name="codePhone" label="کد ارسال شده" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormBtn className={classes.btnSubmit}>
                                                ورود
                                            </FormBtn>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                <Link style={{cursor: 'pointer',
                                                }} onClick={() => IsSignUp()}>ثبت نام نکردید؟</Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                <Link style={{cursor: 'pointer',
                                                }}>ارسال کد مجدد</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>
                        </div>
                    </Container>
                </Grid>
            </Grid>

        </>
    );
}

export default SignIn;
