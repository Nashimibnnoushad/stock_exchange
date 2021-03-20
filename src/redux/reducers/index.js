const ExchangeReducer = (state = {}, action) => {
    switch (action.type) {

        // Get Exchange1 data
        case "GET_EXCHANGE1_REQUEST":
            return { ...state, Loading: true }

        case "GET_EXCHANGE1_SUCCESS":
            return { ...state, exchangeList1: action.payload.data, Loading: false, exchangeList1Error: "" }

        case "GET_EXCHANGE1_FAILURE":
            return { ...state, exchangeList1Error: action.payload, exchangeList1: "", Loading: false }

        // Get Exchange2 data
        case "GET_EXCHANGE2_REQUEST":
            return { ...state, Loading: true }

        case "GET_EXCHANGE2_SUCCESS":
            return { ...state, exchangeList2: action.payload.data, Loading: false, exchangeList2Error: "" }

        case "GET_EXCHANGE2_FAILURE":
            return { ...state, exchangeList2Error: action.payload, exchangeList2: "", Loading: false }

        default: {
            return state
        }
    }

}

export default ExchangeReducer