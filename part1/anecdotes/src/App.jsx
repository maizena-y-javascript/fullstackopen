/*
	Full stack open
	exercise 'anecdotes'
	Martin (maizena-y-javascript). 2025
*/


import { useState } from 'react'

//_____
const Subtitle = ({ text }) => <h2>{text}</h2>

//_____
const Anecdote = ({ text }) => <p>{text}</p>

//_____
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

//_____
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selectedIdx, setSelectedIdx] = useState(0)
  const [allVotes, setAllVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextClick = () => {
    const randomOffset = Math.floor(Math.random() * (anecdotes.length - 1)) 
    setSelectedIdx((selectedIdx + 1 + randomOffset) % anecdotes.length)
  }
  
  const handleVoteClick = () => {
    const newAllVotes = [ ...allVotes ]
    newAllVotes[selectedIdx] = allVotes[selectedIdx] + 1
    setAllVotes(newAllVotes)
  }

  const mostVotedIdx = allVotes.reduce((maxIdx, currentVotes, idx, arr) =>
    currentVotes > arr[maxIdx] ? idx : maxIdx
  , 0);

  return (
    <div>
      <h1>Anecdotes</h1>
      <Subtitle text="Anecdote of the day" />
      <Anecdote text={anecdotes[selectedIdx]} />
      <Button text="Vote" onClick={handleVoteClick} />
      <Button text="Next anecdote" onClick={handleNextClick} />
      <Subtitle text="Anecdote with most votes" />
      <Anecdote text={anecdotes[mostVotedIdx]} />
    </div>
  )
}

//_____
export default App