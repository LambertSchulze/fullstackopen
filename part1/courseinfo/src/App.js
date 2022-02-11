import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {/* you can assume that there are always three items */}
      <Part title={parts[0].name} number={parts[0].exercises} />
      <Part title={parts[1].name} number={parts[1].exercises} />
      <Part title={parts[2].name} number={parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.title} {props.number}</p>
  )
}

const Total = ({ parts }) => {
  const exercises = parts.map(part => part.exercises)
  
  return (
    <p>Number of exercises {exercises.reduce((a, b) => a + b)}</p>
  )
}

export default App