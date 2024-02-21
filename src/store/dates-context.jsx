import {createContext, useReducer} from "react"

export const DatesContext = createContext({
    startDate: undefined,
    months: undefined,
    endDate: undefined,
    current: undefined,
    sum: undefined,
    served: undefined,
    remain: undefined,
    setStartedDate: () => {},
    setEndDate: () => {}
})

function datesReducer(state, action){
    switch (action.type){
        case "SET_STARTED_DATE":
            return {
                ...state,
                startedDate: action.payload
            }
        case "SET_MONTHS_END_DATE":
            return {
                ...state,
                months: action.payload
                // endDate: startedDate + action.payload ?? smth like that will be configured
            }
    }
    return state;
}

const initialState = {
    startDate: 0, // may be init with a date that has passed
    months: 0,
    endDate: 0, // may be init with a date that has passed
    current: 0, // init current date
    served: 0,
    remain: 0,
}

export default function DatesContextProvider({children}){
    const [datesState, datesDispatcher] = useReducer(datesReducer, initialState)

    const ctxValue={
        startDate: datesState.startDate,
        months: datesState.months,
        endDate: datesState.endDate,
        current: datesState.current,
        sum: datesState.sum,
        served: datesState.served,
        remain: datesState.remain,
        setStartedDate: (startedDate) => datesDispatcher({type: "SET_STARTED_DATE", payload: startedDate}),
        setEndDate: (months) => datesDispatcher({type: "SET_END_DATE", payload: months}), 
    }

    return (
        <DatesContext.Provider value = {ctxValue}>
            {children}
        </DatesContext.Provider>
    )

}