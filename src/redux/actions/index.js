import axios from 'axios';

// Get Exchange1 List
export const getExchange1List = (date) => {
    axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
      .then(res => {
        const persons = res.data;
      })

      return async dispatch => {
        dispatch({ type: "GET_EXCHANGE1_REQUEST" })
        return axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
            .then(res => {
                if(res.status === 200){
                dispatch({ type: "GET_EXCHANGE1_SUCCESS", payload: res.data})
                }
            })
            .catch(error => { dispatch({ type: "GET_EXCHANGE1_FAILURE", payload: error.res }) })
    }
}

// Get Exchange2 List
export const getExchange2List = (date) => {
    axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
      .then(res => {
        const persons = res.data;
      })

      return async dispatch => {
        dispatch({ type: "GET_EXCHANGE2_REQUEST" })
        return axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
            .then(res => {
                if(res.status === 200){
                dispatch({ type: "GET_EXCHANGE2_SUCCESS", payload: res.data})
                }
            })
            .catch(error => { dispatch({ type: "GET_EXCHANGE2_FAILURE", payload: error.res }) })
    }
}