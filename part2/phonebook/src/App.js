import { useState } from 'react'

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

      <label>search
        <input type="search" value={searchTerm} onChange={handleSearchChange} />
      </label>

      <h2>new Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name
            <input type="text" value={newName} onChange={handleNameChange} required pattern="[a-Z]" placeholder="Mike Wazowski"/>
          </label>
        </div>
        <div>
          <label>number
            <input type="tel" value={newNumber} onChange={handleNumberChange} required placeholder="+49-30-12345678" />
          </label>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        <ul>
          {persons
            .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((p, index) => 
              <li key={index}>{p.name} {p.number}</li>  
            )
          }
        </ul>
    </div>
  )
}

export default App