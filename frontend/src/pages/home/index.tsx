import React from 'react'
import Banner from '../../components/banner/banner'
import Search from '../../components/search'

const Home = () => {
    return (
        <>
            <Banner>
                <div className="relative w-full h-full">
                <Search/>
                </div>
            </Banner>
        </>
    )
}

export default Home
