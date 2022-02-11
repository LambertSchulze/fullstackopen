import React from 'react'

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
    <h2>{name}</h2>
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

export default Course