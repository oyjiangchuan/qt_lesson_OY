import * as CONSTANT from './constants'
// JSON 
export const searchFocus = (status) => {
  return {
    type: CONSTANT.SEARCH_FOCUS,
    status
  }
}