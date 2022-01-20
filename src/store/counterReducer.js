const GOOD_HANDLER = 'GOOD_HANDLER'
const NEUTRAL_HANDLER = 'NEUTRAL_HANDLER'
const BAD_HANDLER = 'BAD_HANDLER'

const defaultState = {
  good: 1,
  neutral: 1,
  bad: 1,
}

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GOOD_HANDLER:
      return { ...state, good: state.good + action.payload }
    case NEUTRAL_HANDLER:
      return { ...state, neutral: state.neutral + action.payload }
    case BAD_HANDLER:
      return { ...state, bad: state.bad + action.payload }
    default:
      return state
  }
}

export default counterReducer

export const goodCashAction = (payload) => ({ type: GOOD_HANDLER, payload })
export const neutralCashAction = (payload) => ({
  type: NEUTRAL_HANDLER,
  payload,
})
export const badAction = (payload) => ({ type: BAD_HANDLER, payload })
