import create from "zustand";
import { combine } from "zustand/middleware";
import { searchOpt } from "../types/types";


export const useSearchByStore = create(
    combine(
        {   
            searchBy: {value:"city", label:"city"} as searchOpt
        },
        (set) => ({
        setSearchBy : (searchBy:searchOpt) => {
            set({searchBy})
        }
    })
    )
)