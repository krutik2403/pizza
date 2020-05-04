import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, middleware)
const persistor = persistStore(store)

export { store, persistor }
