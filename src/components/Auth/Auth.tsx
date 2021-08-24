import React from 'react';
import {FaUsers} from 'react-icons/fa'
const Auth = () => {
    return (
        <div>
            <button className="btn btn-auth">
                <FaUsers style={{color:'#ffe8d6'}}/>
            </button>
        </div>
    );
}

export default Auth;
