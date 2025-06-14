import './YourContactsFilter.css'
import '../styles/columnFields.css'

import GenericInput from './GenericInput'


//_____
const YourContactsFilter = ({ filterValue, onChange }) => (
  <div className="contacts-filter">
    <label htmlFor="filterInput" className="field-k">Filter:</label>
    <GenericInput
      id="filterInput"
      value={filterValue}
      onChange={onChange}
      placeholder="Starts with..."
    />
  </div>
)

//_____
export default YourContactsFilter
