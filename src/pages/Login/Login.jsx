/* eslint-disable no-undef */
import React from 'react';
import {makeStyles,Button} from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import {FaUser} from 'react-icons/fa'

const useStyles = makeStyles(() => ({
    modal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
    },
    paper: {
        position: 'absolute',
        width: 350,
        backgroundColor: 'transparent',
        padding: "2px 4px 3px",
    },
}))

const ModalBox = ({setProfile}) => {
    const classes = useStyles()
    const [isLogin, setIsLogin] = React.useState(true)
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button variant="contained"type="button" onClick={handleOpen} style={{
              background:'transparent'
            }}>
              <FaUser style={{color:'#ffe8d6'}}/>          
            </Button> 
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                       {
                           isLogin ? <SignIn setProfile={setProfile} setIsLogin={setIsLogin}/> : <SignUp setProfile={setProfile}/>
                       }
                    </div>
                </Fade>
            </Modal> 
        </>
    )
}

export default ModalBox
