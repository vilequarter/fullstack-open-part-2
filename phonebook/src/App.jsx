import { useState, useEffect } from 'react'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';
import personService from './services/PersonService';
import AlertMessage from './components/AlertMessage';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('error with getAll');
      });
  }, [])

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {name: newName, number: newNumber};

    if(newPerson.name.length === 0 || newPerson.number.length === 0){
      setAlertMessage({text: 'Cannot add empty field to phone book', error: true})
      setTimeout(() => {
        setAlertMessage(null)
      }, 5000);
      resetForm();
      return;
    }

    const existingPerson = persons.find(person => person.name === newPerson.name);
    //newPerson name is not found in existing list
    if(existingPerson === undefined){
      personService
        .create(newPerson)
        .then(person => {
          setPersons(persons.concat(person))
        })
        .catch(error => {
          console.log('error with create');
          return;
        });
      setAlertMessage({text: `${newPerson.name} added successfully`, error: false});
      setTimeout(() => {
        setAlertMessage(null)
      }, 5000);
    }
    else {
      if(window.confirm(`${newName} is already added to phone book, replace the current number with the new number?`)){
        personService
          .update(existingPerson.id, newPerson)
          .then(person => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : person))
          })
          .catch(error => {
            console.log('error with update');
            setAlertMessage({text: `${newName} does not exist on server`, error: true});
            setTimeout(() => {
              setAlertMessage(null)
            }, 5000);
            return;
          });
        setAlertMessage({text: `${newName} updated`, error: false});
        setTimeout(() => {
          setAlertMessage(null)
        }, 5000);
      }
    }
    resetForm();
  }

  const resetForm = () => {
    setNewName('');
    setNewNumber('');
    document.getElementById('nameInput').value = '';
    document.getElementById('numberInput').value = '';
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value);
  }

  const handleDelete = (person) => {
    if(!window.confirm(`Delete ${person.name}?`)) return;
    personService
      .deletePerson(person.id)
      .then(oldPerson => {
        setPersons(persons.filter(p => p.id != oldPerson.id))
      })
      .catch(error => {
        console.log('error with deletePerson');
        setAlertMessage({text: `${person.name} does not exist on server`, error: true});
        setTimeout(() => {
          setAlertMessage(null)
        }, 5000);
        return;
      });
    setAlertMessage({text: `${person.name} deleted`, error: false});
    setTimeout(() => {
      setAlertMessage(null)
    }, 5000);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <AlertMessage message={alertMessage}/>

      <Filter handleChangeFilter={handleChangeFilter}/>

      <h2>Add New</h2>

      <PersonForm 
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        addName={addName}
      />

      <h2>Numbers</h2>

      <PersonsList persons={persons} filter={filter} handleDelete={handleDelete}/>

    </div>
  )
}

export default App