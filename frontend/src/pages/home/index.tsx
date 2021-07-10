import React from 'react'
import Banner from '../../components/banner/banner'
import BaseData from '../../components/basedata'
import BottomData from '../../components/bottomdata'
import Search from '../../components/search'

const Home = () => {
    return (
        <>
            <Banner>
                <div className="relative w-full h-full">
                <Search/>
                </div>
            </Banner>
            <BottomData/>
            <BaseData/>
        </>
    )
}

export default Home
