import './GenericInput.css'

//_____
const GenericInput = ({ id, value, onChange, placeholder }) => (
  <input
    id={id}
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="generic-input"
  />
)

//_____
export default GenericInput
