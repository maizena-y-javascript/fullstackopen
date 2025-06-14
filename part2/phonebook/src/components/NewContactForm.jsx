import './NewContactForm.css'
import '../styles/columnFields.css'

import GenericInput from './GenericInput'

//_____
const ContactForm = ({
  onSubmit,
  nameValue,
  onNameChange,
  numberValue,
  onNumberChange
}) => (
  <form onSubmit={onSubmit} className="contact-form">
    <label htmlFor="nameInput" className="field-k">Name:</label>
    <GenericInput
      id="nameInput"
      value={nameValue}
      onChange={onNameChange}
      placeholder="Maizena..."
    />
    <label htmlFor="numberInput" className="field-k">Number:</label>
    <GenericInput
      id="numberInput"
      value={numberValue}
      onChange={onNumberChange}
      placeholder="12 3456..."
    />
    <button type="submit">Add&nbsp;Contact</button>
  </form>
)

//_____
export default ContactForm