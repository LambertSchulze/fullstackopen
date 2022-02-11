import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part title={parts[0][0]} number={parts[0][1]} />
      <Part title={parts[1][0]} number={parts[1][1]} />
      <Part title={parts[2][0]} number={parts[2][1]} />
    </div>
  )
}

const Part = (props) => {
  return <p>{props.title} {props.number}</p>
}

const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises.reduce((a, b) => a + b)}</p>
}

export default App