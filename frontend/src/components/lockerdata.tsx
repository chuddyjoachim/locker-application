import React from "react"
import { Link } from "react-router-dom";

export interface LockerDataProps{
    locker: {size?: string
    name?: string
    price?: number
    width?: number
    height?: number
    depth?: number
    quantity?: number}
}

const LockerData:React.FC<LockerDataProps> = ({locker}) => {
    
    return (
        <div>
            <div className="lockerdata-row ">
                <div className="wrapper mb-1.5 p-4 py-5 bg-gray-200 flex flex-row font-semibold">
                    <div className="size flex-grow">
                        {locker.size} H{locker.height}*W{locker.width}*D{locker.depth}mm
                    </div>
                    <div className="prie flex-grow">N{locker.price} per Item/month</div>
                    <div className="rentper flex-grow">1N For First Rent</div>
                    <div className="available flex-grow">{locker.quantity} Available</div>
                    <div className="btn flex-grow">
                        <Link to="/rental" >
                        <span className="px-3 py-1 bg-green-400 text-white font-semibold cursor-pointer ">Rent Now
                        </span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LockerData
