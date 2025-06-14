import './YourContactsTable.css'
import '../styles/columnFields.css'

//_____
const ContactRow = ({ filtered, remaining, number, handleRemove }) => (
  <>
    <div className="field-k"><strong>{filtered}</strong>{remaining}</div>
    <div className="field-v">{number}</div>
    <div className="field-o">
      <button onClick={handleRemove}>Remove</button>
    </div>
  </>
)

//_____
const YourContactsTable = ({ list, makeRemoveHandler }) => (
  <div className="contacts-table">
    <div className="contacts-thead">Name</div>
    <div className="contacts-thead">Number</div>
    <div className="contacts-thead"></div>
    {list.map(({ id, filtered, remaining, number }) => (
      <ContactRow
        key={id}
        filtered={filtered}
        remaining={remaining}
        number={number}
        handleRemove={makeRemoveHandler(filtered + remaining, id)}
      />
    ))}
  </div>
)

//_____
export default YourContactsTable
