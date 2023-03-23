import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { PhoneBook, PhonebookContainer, ContactsTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState (
    JSON.parse(localStorage.getItem('contacts')) || []
  )
  const [filter, setFilter] = useState ('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const existingName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    existingName !== undefined
    ? alert(`${name} is already in contacts list!`)
    : setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );


    return (
      <PhonebookContainer>
        <PhoneBook>Phonebook</PhoneBook>
        <ContactForm onSubmit={addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={changeFilter} />
        
        {contacts.length > 0 ? (
          <ContactList
            contacts={filterContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          alert(`Phonebook is empty`)
        )}
      </PhonebookContainer>
    );
  }

export default App;


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
