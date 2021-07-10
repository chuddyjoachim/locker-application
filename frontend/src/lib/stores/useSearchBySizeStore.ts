import create from "zustand";
import { combine } from "zustand/middleware";
import { searchOpt } from "../types/types";

export const useStoreBySizeStore = create(
    combine(
        {
            searchBySize: {value:"all", label:"all"} as searchOpt
        },
        (set) => ({
            setSearchBySize: (searchBySize:searchOpt) => {
                set({searchBySize})
            }
        })
    )
)