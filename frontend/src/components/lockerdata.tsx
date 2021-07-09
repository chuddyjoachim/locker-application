import React from "react"

const LockerData = () => {
    let size = "Small"
    let height = 295
    let width = 460
    let dept = 520
    let price = 450
    let available = 2
    return (
        <div>
            <div className="lockerdata-row ">
                <div className="wrapper mb-1.5 p-4 py-5 bg-gray-200 flex flex-row font-semibold">
                    <div className="size flex-grow">
                        {size} H{height}*W{width}*D{dept}mm
                    </div>
                    <div className="prie flex-grow">N{price} per Item/month</div>
                    <div className="rentper flex-grow">1N For First Rent</div>
                    <div className="available flex-grow">{2}{available} Available</div>
                    <div className="btn flex-grow">
                        <span className="px-3 py-1 bg-green-400 text-white font-semibold cursor-pointer ">Rent Now</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LockerData
