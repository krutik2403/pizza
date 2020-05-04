import React from 'react'
import RootRouter from './utils/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  )
}

export default App
