import { combineReducers } from "redux";
import ExchangeReducer from "./index";


const appReducer = combineReducers({
  ExchangeList: ExchangeReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
