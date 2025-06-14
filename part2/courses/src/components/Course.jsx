//_____
const Header = ({ name }) => <h1>{name}</h1>

//_____
const Part = ({ name, exercises }) => <li>{name}. {exercises} exercises</li>

//_____
const Content = ({ parts }) => (
  <ul>
    {parts.map(({ id, name, exercises }) => (
      <Part key={id} name={name} exercises={exercises} />
    ))}
  </ul>
)

//_____
const Total = ({ parts }) => {
  const sumExercises = parts.reduce((acc, { exercises }) => acc + exercises, 0)
  return <p><i>Total number of exercises: {sumExercises}</i></p>
}

//_____
const Course = ({ name, parts }) => {
  return (
    <div>
			<hr />
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

//_____
export default Course