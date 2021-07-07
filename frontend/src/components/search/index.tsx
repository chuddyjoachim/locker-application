import React from 'react'
import Select from 'react-select'

const Search:React.FC = () => {
    const [selected, setSelect] = React.useState({value:"city", label:"city"});
    React.useEffect(() => {
        console.log(selected);        
    }, [selected])

    const handleChange = (selected:any) =>{
        setSelect(selected)
    }
    const selectArray = [
        {value:"city", label:"city"},
        {value:"state", label:"state"}
    ]

    return (
        <div className="max-w-md mt-auto mb-auto top-52 left-10 relative">
            <div className="wrpper bg-white h-14 flex flex-row items-center flex-grow">
                <div className="leftbox flex-grow ml-2">
                <Select options={selectArray} value={selected} onChange={handleChange} />
                </div>
                <div className="input_container flex-grow ml-2 h-full">
                    <input className="flex-grow w-full h-full outline-none" type="text" name="" id="" placeholder="Enter city or state" />
                </div>
                <div className="submit_button h-full float-right p-1">
                    <input className="h-full bg-red-500 text-white font-semibold p-3" type="submit" value="Find Locker" />
                </div>
            </div>
            
        </div>
    )
}

export default Search
