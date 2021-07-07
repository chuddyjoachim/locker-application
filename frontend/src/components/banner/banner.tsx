import React from 'react'
import './banner.css'

interface BannerProps{}
const Banner:React.FC<BannerProps> = ({children}) => {
    return (
        <>
        <div className="w-full bg-red-500 img_holder_">
        <div className="absolute z-10 bg-black bg-opacity-10 h-full w-full">
        {children}
        </div>
        </div>
        <>
        </>
        </>
    )
}

export default Banner
