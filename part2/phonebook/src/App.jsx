import './App.css'

import { useState, useEffect } from 'react'
import contactService from './services/contacts'

import Popover from './components/Popover'
import AppHeader from './components/AppHeader'
import NewContactForm from './components/NewContactForm'
import GenericTitle from './components/GenericTitle'
import YourContactsFilter from './components/YourContactsFilter'
import YourContactsTable from './components/YourContactsTable'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

//_____
const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [contacts, setContacts] = useState([])
  const [popoverProps, setPopoverProps] = useState({ status: null })
  const resetPopoverProps = () => setPopoverProps({ status: null })

  // initial list
  useEffect(() => {
		contactService
			.getAll()
      .then(setup => setContacts(setup))
  }, [])

  // add contact form onSubmit
  const handleAddContact = event => {
    event.preventDefault()
    if (newName === '') return

    // updating case
    const targetIndex = contacts.findIndex(({ name }) => name === newName)
    if (targetIndex !== -1) {
      const onConfirm = () => {
        resetPopoverProps()
        contactService
          .replaceNumber(contacts[targetIndex].id, newNumber)
          .then(newContact => setContacts(prevContacts => (
            Object.assign([...prevContacts], { [targetIndex]: newContact})
          )))
          .catch(err => console.log('_err:', err))
      }
      
      setNewName('')
      setNewNumber('')
      setPopoverProps({
        status: 'replaceNumber',
        name: newName,
        handlers: { onCancel: resetPopoverProps, onConfirm }
      })
      return
    }
    
    contactService
      .create({ name: newName, number: newNumber })
      .then(newContact => setContacts([...contacts, newContact]))
      .catch(err => console.log('_err:', err))
    
    setNewName('')
    setNewNumber('')
    setPopoverProps({ status: 'contactAdded', name: newName })
    setTimeout(resetPopoverProps, 3000)
  }

  // input typing
  const handleNewNameChange = ({ target }) => setNewName(target.value)
  const handleNewNumberChange = ({ target }) => setNewNumber(target.value)
  const handleNewFilterChange = ({ target }) => setNewFilter(target.value)

  // onClick remove (factory)
  const makeRemoveHandler = (targetName, targetId) => () => {
    const onConfirm = () => {
      contactService
        .remove(targetId)
        .then(() => {
          setContacts(prevContacts => (
            prevContacts.filter(({ id }) => id !== targetId)
          ))
          setPopoverProps({ status: 'contactRemoved', name: targetName })
          setTimeout(resetPopoverProps, 3000)
        })
        .catch(err => {
          console.log('__Err:', err)
          setPopoverProps({ status: 'unknownContact', name: targetName })
          setTimeout(resetPopoverProps, 3000)
        })
    }

    setPopoverProps({
      status: 'removeContact',
      name: targetName,
      handlers: { onCancel: resetPopoverProps, onConfirm }
    })
  }

  // updated list
  const upperCasedFilter = newFilter.toUpperCase()
  const contactsToShow = contacts.reduce((acc, { id, name, number }) => {
    if (!name.toUpperCase().startsWith(upperCasedFilter)) return acc
    const filtered = name.slice(0, newFilter.length)
    const remaining = name.slice(newFilter.length)
    acc.push({id, filtered, remaining, number})
    return acc
  }, [])

  // render
  return (
    <>
      <Popover {...popoverProps} />
      <div className="app">
        <AppHeader />
        <NewContactForm
          onSubmit={handleAddContact}
          nameValue={newName}
          onNameChange={handleNewNameChange}
          numberValue={newNumber}
          onNumberChange={handleNewNumberChange}
        />
        <GenericTitle
          isPrimary={false}
          text="your&nbsp;contacts"
          area="subtitle"
        />
        <YourContactsFilter
          filterValue={newFilter}
          onChange={handleNewFilterChange}
        />        
        <YourContactsTable
          list={contactsToShow}
          makeRemoveHandler={makeRemoveHandler}
        />
        <BackToTop />
      </div>
      <Footer />
    </>
  )
}

//_____
export default App
