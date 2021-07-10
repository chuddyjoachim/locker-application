import create from "zustand";
import { combine } from "zustand/middleware";


export const useInputDataStore = create(
    combine(
        {   
            inputData:"" as string
        },
        (set) => ({
        setinputData : (inputData:any) => {
            set({inputData})
        }
    })
    )
)