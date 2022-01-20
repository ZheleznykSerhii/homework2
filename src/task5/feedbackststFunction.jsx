import style from './task5.module.css'
import Button from './button'
import Notification from './notification'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
  badAction,
  goodCashAction,
  neutralCashAction,
} from '../store/counterReducer'

const FeedbackStatFunc = () =>
  // {
  // goodhandler,
  // neutralhandler,
  // badhandler,
  // good,
  // neutral,
  // bad,
  // }
  {
    const counter = useSelector((state) => state.counter)
    const { good, neutral, bad } = counter

    const dispatch = useDispatch()
    const goodhandler = () => {
      dispatch(goodCashAction(1))
    }
    const neutralhandler = () => {
      dispatch(neutralCashAction(1))
    }

    const badhandler = () => {
      dispatch(badAction(1))
    }

    let totalCount = good + neutral + bad
    return (
      <>
        <header className={style.header}>Please leave your feedback</header>
        <div className="flex">
          <Button onclick={goodhandler} value="Good" />
          <Button onclick={neutralhandler} value="Neutral" />
          <Button onclick={badhandler} value="Bad" />
        </div>
        {totalCount === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <>
            <header className={style.header}>Statistic</header>
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {totalCount}</li>
              <li>
                Positive feedback:{` `}
                {Math.floor((good / totalCount) * 100 || 0)}%
              </li>
            </ul>{' '}
          </>
        )}{' '}
      </>
    )
  }

export default FeedbackStatFunc
