import {createContext, useReducer} from "react"

export const DatesContext = createContext({
    startDate: undefined,
    months: undefined,
    endDate: undefined,
    current: undefined,
    sum: undefined,
    served: undefined,
    remain: undefined,
    setStartDate: () => {},
    setEndDate: () => {}
})

function datesReducer(state, action){
    switch (action.type){
        case "SET_START_DATE":
            return {
              ...state,
              startDate: action.payload,
            //   endDate: new Date(action.payload.setMonth(
            //     action.payload.getMonth() + state.months
            //   )),
            };
        case "SET_MONTHS_END_DATE":
            return {
              ...state,
              months: action.payload,
            //   endDate: new Date(state.startDate.setMonth(
            //     state.startDate.getMonth() + action.payload
            //   )),
            };
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

// eslint-disable-next-line react/prop-types
export default function DatesContextProvider({children}){
  const [datesState, datesDispatcher] = useReducer(datesReducer, initialState);

  const ctxValue = {
    startDate: datesState.startDate,
    months: datesState.months,
    endDate: datesState.endDate,
    current: datesState.current,
    sum: datesState.sum,
    served: datesState.served,
    remain: datesState.remain,
    setStartDate: (startDate) =>  datesDispatcher({ type: "SET_START_DATE", payload: startDate }),
    setEndDate: (months) =>
      datesDispatcher({ type: "SET_MONTHS_END_DATE", payload: months }),
  };

  return (
    <DatesContext.Provider value={ctxValue}>{children}</DatesContext.Provider>
  );
}