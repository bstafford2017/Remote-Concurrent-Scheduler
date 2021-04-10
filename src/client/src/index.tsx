import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client/react'
import client from './apollo'

const Application = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'))
