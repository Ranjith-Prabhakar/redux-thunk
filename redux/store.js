import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './features/user/userReducer'

const store = createStore(userReducer, applyMiddleware(thunk))
export default store



// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// // import { composeWithDevTools } from 'redux-devtools-extension'
// import userReducer from './features/user/userReducer'

// const store = createStore(userReducer, applyMiddleware(thunk))
// // const store = createStore(userReducer, composeWithDevTools(applyMiddlware(thunk)))
// export default store

