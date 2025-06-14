/*
	Full stack open. exercise 'courseinfo'
	Martin (maizena-y-javascript). 2025
*/


import Course from './components/Course'

//_____
const App = ({ courses }) => {
  return (
    <div>
			<h1>Courses</h1>
			{courses.map(({ id, name, parts }) => (
				<Course key={id} name={name} parts={parts} />
			))}
    </div>
  )
}

//_____
export default App
