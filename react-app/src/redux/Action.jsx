import axios from 'axios'

export const dataFetching = (dispatch) => {
    return(dispatch)=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res)
            dispatch(fetchingDataFunction(res.data))
        })
        .catch((err) => {
            console.log("not found", err)
        })
    }
   
}

export const fetchingDataFunction = (payload) => {
    return { type : "fetchData" , payload}
}