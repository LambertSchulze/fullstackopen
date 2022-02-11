import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const voteForAnecdote = () => {
    const newPoints = [ ...points ];
    newPoints[selected] += 1
    setPoints(newPoints)
    }

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * (anecdotes.length)); 
    setSelected(randomIndex);
  }

  return (
    <main>
      <section>
        <h1>Anecdote of the day</h1>
        <Anecdote
          anecdote={anecdotes[selected]}
          votes={points[selected]}
        />
        <div>
          <button onClick={() => voteForAnecdote()}>vote</button>
          <button onClick={() => nextAnecdote()}>next anecdote</button>
        </div>
      </section>
      <section>
        <h2>Anecdote with most votes</h2>
        <Anecdote
          anecdote={anecdotes[points.findIndex(i => i === points.reduce((a, b) => Math.max(a, b)))]}
          votes={points.reduce((a, b) => Math.max(a, b))}
        />
      </section>
    </main>
  )
}

const Anecdote = (props) => {
  return (
    <figure>
      <blockquote>
        {props.anecdote}
      </blockquote>
      <figcaption>has {props.votes} votes</figcaption>
    </figure>
  )
}

export default App
