import { connect } from 'react-redux'
import {
  badAction,
  goodCashAction,
  neutralCashAction,
} from '../store/counterReducer'
import FeedbackStat from './feedbackstst'

let mapStatetoProps = (state) => {
  debugger
  return {
    good: state.counter.good,
    neutral: state.counter.neutral,
    bad: state.counter.bad,
  }
}
debugger
let mapDispatchtoProps = (dispatch) => {
  return {
    goodhandler: () => {
      dispatch(goodCashAction(1))
    },
    neutralhandler: () => {
      dispatch(neutralCashAction(1))
    },
    badhandler: () => {
      dispatch(badAction(1))
    },
  }
}

const ExchangeContainer = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(FeedbackStat)

export default ExchangeContainer
