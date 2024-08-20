import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import UserContainer from './components/UserContainer'

const ReduxHOCWrapperComponent005 = () => {
  return (
    <Provider store={store}>
      <UserContainer />
    </Provider>
  )
}

export default ReduxHOCWrapperComponent005