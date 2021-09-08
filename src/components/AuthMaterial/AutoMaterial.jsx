import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Login from '../../pages/Login/Login'
import { FaUser } from 'react-icons/fa';

const AutoMaterial = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [profileSet, setProfile] = React.useState(false)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }
    
    const logoutProfil = () => {
        setProfile(false)
    }
    return (
        <>
           <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <FaUser style={{color:'#ffe8d6',marginTop:'10px'}}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                        !profileSet ? 
                        <MenuItem onClick={handleClose}>
                            <Login setProfile={setProfile}/>
                        </MenuItem> :
                        <MenuItem onClick={handleClose}>
                            <Button variant='contained' color='primary' onClick={() => logoutProfil()}>
                                Logout
                            </Button>
                        </MenuItem>
                }
                
            </Menu> 
        </>
    );
}

export default AutoMaterial
