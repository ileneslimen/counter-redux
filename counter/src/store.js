import {createStore} from 'redux'
import CountReducer from './Reducer'
const store =createStore (CountReducer)
export default store 