/*
	Full stack open
	exercise'courseinfo'
	Martin (maizena-y-javascript). 2025
*/


//_____
const Header = ({ name }) => <h1>{name}</h1>

//_____
const Part = ({ topic, exercises }) => <li>{topic}. {exercises} exercises</li>

//_____
const Content = ({ parts }) => (
  <ul>
    {parts.map(({ id, topic, exercises }) => (
      <Part key={id} topic={topic} exercises={exercises} />
    ))}
  </ul>
)

//_____
const Total = ({ parts }) => {
  const sumExercises = parts.reduce((acc, { exercises }) => acc + exercises, 0)
  return <p><i>Total number of exercises: {sumExercises}</i></p>
}

//_____
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        topic: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        topic: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        topic: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

//_____
export default App
