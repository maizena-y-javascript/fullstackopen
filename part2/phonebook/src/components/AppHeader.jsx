import './AppHeader.css'

import GenericTitle from './GenericTitle'

//_____
const AppHeader = () => (
  <header className="app-header">
    <GenericTitle
      isPrimary={true}
      text="Phonebook"
      area="title"
    />
  </header>
)

//_____
export default AppHeader
