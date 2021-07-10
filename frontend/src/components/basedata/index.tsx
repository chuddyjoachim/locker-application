import React from "react"
import Select from "react-select";
import LockerData from "../lockerdata";
import locker from '../../assets/images/lockerge.jpeg'
import { sortBySizeArray} from "../../lib/constant";
import { Star } from "../star";
import { useStoreBySizeStore } from "../../lib/stores/useSearchBySizeStore";
import { useFetchData } from "../../lib/stores/useFetchData";
import { useInputDataStore } from "../../lib/stores/useInputDataStore";


const BaseData:React.FC = () => {
    const {searchBySize, setSearchBySize} = useStoreBySizeStore()
    const {fetchData, dataError, dataLoading} = useFetchData()
    const {inputData} = useInputDataStore()

    const handleChange = (searchBySize:any) =>{
        setSearchBySize(searchBySize)
    }

    const dataX = () => {
        if(dataLoading){
            return (<div className="flex flex-row justify-center items-center w-screen h-screen p-4">
            <div className="flex flex-row justify-center items-center text-center font-bold text-black">Loading...</div>
        </div>)
            
        }
        if(dataError){
            return(
            <div className="flex flex-row justify-center items-center w-screen h-screen p-4">
            <div className="flex flex-row justify-center items-center text-center font-bold text-black">No Locker Found in {inputData}</div>
        </div>)
        }
        if(fetchData){
            if(searchBySize.value==="small"){
            const fdata = fetchData.filter((a)=>{
                const {size} = a;
                return size === "small"
            }).map(locker=>{     
             const{id} = locker
                return <LockerData key={id} locker={locker} />
            })
                return fdata
            }

            if(searchBySize.value==="medium"){
            const fdata = fetchData.filter((a)=>{
                const {size} = a;
                return size === "medium"
            }).map(locker=>{    
             const{id} = locker
                return <LockerData key={id} locker={locker} />
            })
                return fdata
            }

            if(searchBySize.value==="large"){
            const fdata = fetchData.filter((a)=>{
                const {size} = a;
                return size === "large"
            }).map(locker=>{  
             const{id} = locker
                return <LockerData key={id} locker={locker} />
            })
                return fdata
            }
            if(searchBySize.value==="all"){
                const mappedData = fetchData.map(locker=>{      
                 const{id} = locker
                    return <LockerData key={id} locker={locker} />
                })
                    return mappedData
            }
            
        }
    }
   
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
                        <Select options={sortBySizeArray} className="flex-grow bg-gray-300 text-gray-700" value={searchBySize} onChange={handleChange} />
                        </div>
                        <a href="http://" className="text-blue-700 underline font-semibold">view style guide</a>
                    </div>
                    {
                        dataX()
                    }

                </div>
            </div>
            
        </div>
    )
}

export default BaseData
