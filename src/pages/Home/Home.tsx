import React from 'react'
import {Header,Footer} from '../../components/HomeComponent'
import Main from '../../components/Main/Main'
const homeStyle = {
    height:'100%',
    width:'100%'
}

const Home = () => {
    return (
        <div style={homeStyle}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}


export default Home
