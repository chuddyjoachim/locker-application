import React from 'react'
import Select from 'react-select'
import axios from "axios"
import {useSearchByStore} from "../../lib/stores/useSearchByStore"
import { serachLocationArray } from '../../lib/constant'
import { baseUrl } from '../../lib/basUrl'
import { useInputDataStore } from '../../lib/stores/useInputDataStore'
import { useFetchData } from '../../lib/stores/useFetchData'


const Search:React.FC = () => {

    const {searchBy, setSearchBy} = useSearchByStore()
    const {inputData, setinputData} = useInputDataStore()
    const {setDataLoading, setFetchData, setDataError} = useFetchData()

    const fetchalldata = async () => {
        
        let url_ = `${baseUrl}/getlockerby${searchBy.value}/${inputData}`;     

        setDataLoading(true)

        if(!inputData || (inputData.length <= 0)) {
            setDataLoading(false)
            setDataError(false)
            setDataError(null)
            setFetchData([])
            return alert("please Enter city or state")
         }

         const {data} = await axios.get(url_);
         
         if(data && (data.length > 0)){
             setDataLoading(false)
             setDataError(false)           
             setFetchData(data)
         }
         if(data.length <= 0){
             setDataError(true)
            return setDataLoading(false)        
         }
         
    }

    const handleChange = (searchBy:any) =>{
        setSearchBy(searchBy)
    }
    const changeInputData = (inputData:any) => {
        setinputData(inputData)
    }


    const searchForm = (e: { preventDefault: () => void; }) =>{
        e.preventDefault(); 
        fetchalldata()  
    }

    return (
        <div className="max-w-md mt-auto mb-auto top-52 left-10 relative">
            <form onSubmit={searchForm} className="wrpper bg-white h-14 flex flex-row items-center flex-grow">
                <div className="leftbox flex-grow ml-2">
                <Select options={serachLocationArray} value={searchBy} onChange={handleChange} />
                </div>
                <div className="input_container flex-grow ml-2 h-full">
                    <input className="flex-grow w-full h-full outline-none" value={inputData} onChange={(e)=>{changeInputData(e.target.value)}} type="text" name="" id="" placeholder="Enter city or state" />
                </div>
                <div className="submit_button h-full float-right p-1">
                    <input className="h-full bg-red-500 cursor-pointer text-white font-semibold p-3" type="submit" value="Find Locker" />
                </div>
            </form>
            
        </div>
    )
}

export default Search
