/*
	Full stack open
	exercise 'unicafe'
	Martin (maizena-y-javascript). 2025
*/


import { useState } from 'react'

//_____
const Subtitle = ({ text }) => <h2>{text}</h2>

//_____
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

//_____
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

//_____
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) return <p>no feedback given</p>

  const average = ((good - bad) / all).toFixed(2)
  const positive = (100 * good / all).toFixed(2) + ' %'

  return (
    <table>
      <tbody>
        <StatisticLine key="good" text="good" value={good} />
        <StatisticLine key="neutral" text="neutral" value={neutral} />
        <StatisticLine key="bad" text="bad" value={bad} />
        <StatisticLine key="all" text="all" value={all} />
        <StatisticLine key="average" text="average" value={average} />
        <StatisticLine key="positive" text="positive" value={positive} />
      </tbody>
    </table>
  )
}

//_____
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>unicafe</h1>
      <Subtitle text="give feedback" />
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <Subtitle text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

//_____
export default App