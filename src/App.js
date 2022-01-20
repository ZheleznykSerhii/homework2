import './App.css'
import React from 'react'
import Task5 from './task5/task5'
import ExchangeContainer from './task5/feedbackstatContainer'
import FeedbackStatFunc from './task5/feedbackststFunction'

let App = () => {
  return (
    <div>
      {/* <Task5 />  Варіант ЛИШЕ з класовою компонентою і її локальним стейтом*/}

      {/*  <ExchangeContainer /> Варіант с КЛАСОВОЮ компонентою у яку передаємо дані з Редаксу.*/}
      <FeedbackStatFunc />
    </div>
  )
}

export default App
