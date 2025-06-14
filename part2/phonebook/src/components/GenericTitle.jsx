import './GenericTitle.css'

//_____
const GenericTitle = ({ isPrimary, text, area }) => {
  const Tag = isPrimary ? 'h1' : 'h2'
  return (
    <Tag
      className="generic-title"
      style={{gridArea: area}}
    >
      {text}
    </Tag>
  )
}

//_____
export default GenericTitle
