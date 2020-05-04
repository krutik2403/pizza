import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import homeReducers from 'views/home/_reducers'

const config = {
  key: 'root',
  storage,
}

const rootReducer = persistCombineReducers(config, {
  homeReducers,
})

export default rootReducer
