import { useState } from 'react'

import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm'
import ContactList from './components/ContactList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (persons.find(p => p.name === newName)) return alert(`${newName} is already added to phonebbok`)
    if (persons.find(p => p.number === newNumber)) return alert(`the number ${newNumber} is already taken`)

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        searchTerm={searchTerm}
        onChange={handleSearchChange}
      />

      <h2>new Contact</h2>
      <NewContactForm
        onSubmit={handleSubmit}
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newNumber}
        numberChange={handleNumberChange}
      />
      
      <h2>Numbers</h2>
      <ContactList
        contacts={persons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))}
      />
    </div>
  )
}

export default App