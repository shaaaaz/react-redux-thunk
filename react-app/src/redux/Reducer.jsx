const initialState = {
    data : []
}

export const Reducer = (state = initialState, {type,payload}) => {
    switch(type){
        case "fetchData":
            return {...state,data : payload}
        default :
            return state
    }
}