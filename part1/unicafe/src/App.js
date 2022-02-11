import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackInput
        giveGoodFeedback={setGood}
        giveNeutralFeedback={setNeutral}
        giveBadFeedback={setBad}
      />  
      <h2>statistics</h2>
      <FeedbackStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const FeedbackInput = (props) => {
  return (
    <div>
      <button onClick={() => props.giveGoodFeedback(num => num + 1)}>good</button>
      <button onClick={() => props.giveNeutralFeedback(num => num + 1)}>neutral</button>
      <button onClick={() => props.giveBadFeedback(num => num + 1)}>bad</button>
    </div>
  )
}

const FeedbackStatistics = (props) => {
  return (
    <div>
      good {props.good}<br/>
      neutral {props.neutral}<br/>
      bad {props.bad}
    </div>
  )
}

export default App
