import React, { Component } from 'react';
import Router from './routes'
import { Provider } from 'react-redux'
import configureStore from './configureStore.js'
import { PersistGate } from 'redux-persist/integration/react'
import history from './history.js'
import Loading from '@components/Loading'

const { store, persistor } = configureStore()

function App() {
  return (
  	<div
  		style={{height: "100vh", width: "100vw"}}
  	>
			<React.Suspense fallback={<Loading logo/>}>
		  	<Provider store={store}>
		  		<PersistGate loading={null} persistor={persistor}>
		    		<Router history={history} />
		  		</PersistGate>
		  	</Provider>
		  </React.Suspense>
  	</div>
  )
}

export default App;
