import './Popover.css'

//_____
const popoverConfigs = {
  contactAdded: {
    type: 'notification',
    style: 'positive',
    getText: name => `Contact "${name}" added`,
  },
  contactRemoved: {
    type: 'notification',
    style: 'positive',
    getText: name => `Contact "${name}" removed`,
  },
  unknownContact: {
    type: 'notification',
    style: 'negative',
    getText: name => `Couldn't find "${name}" in the database`
  },
  replaceNumber: {
    type: 'confirmation',
    style: 'neutral',
    getText: name => `Contact "${name}" is already added to phonebook. Replace old number?`,
  },
  removeContact: {
    type: 'confirmation',
    style: 'neutral',
    getText: name => `Remove "${name}" from Phonebook?`,
  },
  updateName: {
    type: 'textCapture',
    style: 'neutral',
    getText: name => `Please enter a new name for "${name}":`,
  },
  updateNumber: {
    type: 'textCapture',
    style: 'neutral',
    getText: name => `Please enter a new number for "${name}":`,
  },
}

//_____
const Notification = ({ style, text }) => (
  <div className={`popover popover-${style}`}>
    <p>{text}</p>
  </div>
)

//_____
const Confirmation = ({ style, text, handlers }) => {
  if (
    !handlers.onCancel ||
    !handlers.onConfirm
  ) return null
  
  return (
    <div className={`popover popover-${style}`}>
      <p>{text}</p>
      <button onClick={handlers.onCancel}>CANCEL</button>
      <button onClick={handlers.onConfirm}>CONFIRM</button>
    </div>
  )
}

//_____
const TextCapture = ({ style, text, handlers }) => {
  if (
    !handlers.onCancel ||
    !handlers.onConfirm ||
    !handlers.newText
  ) return null
  
  return (
    <div className={`popover popover-${style}`}>
      <p>{text}</p>
      <input type="text" onChange={handlers.newText} />
      <button onClick={handlers.onCancel}>CANCEL</button>
      <button onClick={handlers.onConfirm}>CONFIRM</button>
    </div>
  )
}

//_____
const componentRef = {
  notification: Notification,
  confirmation: Confirmation,
  textCapture: TextCapture,
}

//_____
const Popover = ({ status, name, handlers = {} }) => {
  if (status == null) return null

  const config = popoverConfigs[status]
  if (!config) throw new Error(`Unknown status: "${status}"`)

  const { type, style, getText } = config
  const Component = componentRef[type]
  if (!Component) throw new Error(`No component for type: "${type}"`)

  return (
    <div className={'popover-container'}>
      <Component style={style} text={getText(name)} handlers={handlers} />
    </div>
  )
}

//_____
export default Popover
