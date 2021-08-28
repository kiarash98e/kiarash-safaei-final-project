import React from 'react'
import {Toast} from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import {useSelector} from 'react-redux'

interface Toasts{
    showToast:Function,
    hideToast:Function,
    toast:{
        show:boolean,
        text:string,
        title:string,
    }
}

const MyToast:React.FC<Toasts> = ({toast:{show,title,text},showToast,hideToast}) => {
    const toastMe = useSelector((state:any) => state.toast)
    console.log(toastMe)
    return (
        <div
      style={{
        position: 'fixed',
        bottom: '5%',
        right: '2%',
        zIndex: 3,
      }}
    >
      <Toast
        onClose={() => hideToast()}
        show={show}
        delay={3000}
        animation={true}
        autohide
      >
        <Toast.Header>
          <FaCheck
            style={{ width: 20, height: 20, objectFit: 'cover' }}
            className="rounded mr-2"
            
          />
          <strong className="mr-auto">{title}</strong>
          <small>right now</small>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </div>
    )
}

export default MyToast
