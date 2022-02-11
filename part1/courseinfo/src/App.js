import React from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} title={part.name} number={part.exercises} />
      )}
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
    <b>total of {exercises.reduce((a, b) => a + b)} exercises</b>
  )
}

export default App