import create from "zustand";
import { combine } from "zustand/middleware";
import { bullNull } from "../types/types";


export const useFetchData = create(
    combine(
        {
            fetchData : [],
            dataLoading: false as boolean,
            dataError: null as bullNull,
        },
        (set) => ({
            setFetchData: (fetchData:[]) => {
                set({fetchData})
            },
            setDataLoading: (dataLoading:boolean) => {
                set({dataLoading})
            },
            setDataError: (dataError:bullNull) => {
                set({dataError})
            }
        })
    )
)