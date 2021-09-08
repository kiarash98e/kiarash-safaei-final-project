/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import FormInput from '../FormInput/FormInput'
import FormBtn from '../FormBtn/FormBtn'
import './SignUp.style.css'
import {
  Grid,
  Container,
} from '@material-ui/core'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import RadioBtn from '../RadioBtn/RadioBtn'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root:{
    color:'#333',
    background: '#a6d4fa',
    padding:'1rem .75rem',
    borderRadius:8
  },
  formWrapper:{
    marginTop: 5,
    marginBottom: 8,
  },
  btnSubmit:{
    marginBottom:'4rem'
  }
}))

const initialFormState = {
  phone:'',
  codePhone:'',
  name:'',
  age:"",
  hieght:"",
  gender:''
}

const FormValidtion = Yup.object().shape({
  phone:Yup.string()
  // eslint-disable-next-line no-useless-escape
  .matches(/^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,'شماره همراه نامعتبر است')
  .typeError('شماره همراه درست وارد کنید')
  .required('لطفا فیلد بالا پر کنید'),
  codePhone:Yup.number()
  .integer()
  .typeError('کد تایید اشتباه است')
  .required('لطفا فیلد بالا پر کنید'),
  name:Yup.string()
  .typeError('نام و نام خانوادگی نامعتبر است')
  .trim()
  .required("فیلد بالا پر کنید")
  .min(8,'نام و نام خانوادگی باید 8 کاراکتر باشد')
  .max(16,'نام و نام خانوادگی بزرگتر از 16 کاراکتر باشد'),
  age:Yup.number()
  .integer()
  .min(5,"سن نباید کمتر از 5 سال باشد")
  .max(120,'سن نباید بیشتر از 120 سال باشد')
  .typeError('سن درست وارد کنید')
  .required('لطفا فیلد بالا پر کنید'),
  hieght:Yup.number()
  .integer()
  .min(30,'قد نباید کمتر از 30 سانتی متر باشد')
  .max(250,'قد نباید بیشتر از 250 سانتی متر باشد')
  .typeError('قد درست وارد کنید')
  .required('لطفا فیلد بالا پر کنید'),
  gender:Yup.string()
  .required('فیلد بالا پر کنید'),
})


function SignUp({setProfile}) {
    const [value, setValue] = React.useState('')
    const classes = useStyles()
    const handleRadioChange = (event) => {
        setValue(event.target.value);
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
                  onSubmit={(values,{setSubmitting,resetForm}) => {
                   setTimeout(() => {
                    console.log(JSON.stringify(values),null,2)
                    setSubmitting(false)
                    resetForm()
                    setProfile(true)
                    history.push('/')
                   }, 2000);
                  }}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormInput label='شماره همراه' name='phone'/>  
                      </Grid>
                      <Grid item xs={12}>
                        <FormInput name="codePhone" label="کد ارسال شده" />
                      </Grid>
                      <Grid item xs={12}>
                        <FormInput name="name" label="نام و نام خانوادگی" />
                      </Grid>
                      <Grid item xs={12}>
                        <RadioBtn value={value} handleRadioChange={handleRadioChange} lable={'gender'} name='gender'/>
                      </Grid>
                      <Grid item xs={12}>
                        <FormInput name="age" label="سن" />
                      </Grid>
                      <Grid item xs={12}>
                        <FormInput name="hieght" label="قد" />
                      </Grid>
                      <Grid item xs={12}>
                        <FormBtn className={classes.btnSubmit}>
                          ثبت نام
                        </FormBtn>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </div>
            </Container>
          </Grid>
        </Grid>
    </>
  )
}

export default SignUp
