import React from "react";
import Select from "react-select";

const Bottomhead = () => {
    const [selected, setSelect] = React.useState({value:"closest", label:"closest"});

    

    const handleChange = (selected:any) =>{
        setSelect(selected)
    }
    const selectArray = [
        {value:"closest", label:"closest"},
        {value:"lowest price", label:"lowest price"}
    ]

    let available = null
    return (
        <div>
            <div className="wrapper flex flex-row flex-initial justify-between items-center p-4 bg-gray-100 text-gray-700 font-semibold">
                <div className="availability flex-grow">
                    {available? available: 0} <span>Open Lockers Available</span> 
                </div>
                <div className="dropdown-container flex flex-row mr-2 items-center">
                <span>Sort By</span>
                <div className="dropdown w-28 ml-4">
                <Select options={selectArray} className="flex-grow" value={selected} onChange={handleChange} />
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Bottomhead
