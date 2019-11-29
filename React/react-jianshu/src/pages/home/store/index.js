import reducer from './reducer'
import * as actionCreators from './actionCreate'
import * as constants from './constant'
// common js node 


// es module 
// name export
// 1. 
// export const CHANGE_HOME_DATA = 'home/CHANGE_HOME_DATA'
// import { CHANGE_HOME_DATA } from './index'
// 2
// export {  }
export {
  reducer,
  actionCreators,
  constants
}