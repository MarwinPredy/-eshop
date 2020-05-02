import React from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'

const Index =({children})=>{
    return(
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Index;