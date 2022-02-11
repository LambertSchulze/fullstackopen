import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        giveGoodFeedback={setGood}
        giveNeutralFeedback={setNeutral}
        giveBadFeedback={setBad}
      />  
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.giveGoodFeedback(num => num + 1)}>good</button>
      <button onClick={() => props.giveNeutralFeedback(num => num + 1)}>neutral</button>
      <button onClick={() => props.giveBadFeedback(num => num + 1)}>bad</button>
    </div>
  )
}

const Statistics = (props) => {
  const feedbackCount = Object.values(props).reduce((a, b) => a + b)
  const feedbackAverage = (props.good - props.bad) / feedbackCount

  if (!feedbackCount) return <div>No feedback given</div>

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={feedbackCount} />
        <StatisticLine text='average' value={feedbackAverage} />
        <StatisticLine text='positive' value={props.good / feedbackCount * 100 + " %"} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App
