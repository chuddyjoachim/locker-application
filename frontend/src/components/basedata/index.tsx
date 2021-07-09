import React from "react"
import Select from "react-select";
import LockerData from "../lockerdata";
import locker from '../../assets/images/lockerge.jpeg'

export const Star = (style:any) =>{
    return(
        <svg 
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill=" rgba(251, 191, 36,1)"
            stroke="#393939"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
            className="text-yellow-400 "
        >
            <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
        </svg>
    )
}

const BaseData = () => {
    const [selected, setSelect] = React.useState({value:"Featured", label:"Featured"});

    

    const handleChange = (selected:any) =>{
        setSelect(selected)
    }
    const selectArray = [
        {value:"Small", label:"Small"},
        {value:"Medium", label:"Medium"},
        {value:"Large", label:"Large"}
    ]
    return (
        <div>
            <div className="wrapper p-4 flex-row flex">
                <div className="left_bx w-60">
                    <div className="data_wrapper">
                        <div className="data_bx flex-col flex">
                            <div className="img w-full h-40 bg-gray-500">
                                <img src={locker} className="h-full" alt="" />
                            </div>
                            <div className="addr my-1 text-blue-700 font-medium">
                                22A Adeola Odeku Street, VI, Lagos.
                            </div>
                            <div className="rating text-yellow-400 flex flex-row">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <div className="mile-away text-blue-700 font-medium">0.3 Miles Away</div>
                        </div>
                    </div>
                </div>
                <div className="right_dr flex-grow pl-3">
                    <div className="top-sort flex flex-row justify-between items-center">
                        <div className="select_bx max-w-xs flex-grow mb-1.5">
                        <Select options={selectArray} className="flex-grow bg-gray-300 text-gray-700" value={selected} onChange={handleChange} />
                        </div>
                        <a href="http://" className="text-blue-700 underline font-semibold">view style guide</a>
                    </div>
                    <LockerData/>
                    <LockerData/>
                    <LockerData/>
                    <LockerData/>
                    <LockerData/>

                </div>
            </div>
            
        </div>
    )
}

export default BaseData
