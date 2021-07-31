import React from 'react';
import {FaUsers} from 'react-icons/fa'
const Auth = () => {
    return (
        <div>
            <button className="btn btn-auth">
                <FaUsers style={{color:'#E59C2C'}}/>
            </button>
        </div>
    );
}

export default Auth;
