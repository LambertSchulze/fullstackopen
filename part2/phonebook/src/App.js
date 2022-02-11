import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123456'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name
            <input value={newName} onChange={handleNameChange} required />
          </label>
        </div>
        <div>
          <label>number
            <input value={newNumber} onChange={handleNumberChange} required />
          </label>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(p => 
            <li key={p.name}>{p.name} {p.number}</li>  
          )}
        </ul>
    </div>
  )
}

export default App