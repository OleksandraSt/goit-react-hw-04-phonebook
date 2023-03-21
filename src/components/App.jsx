import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { PhoneBook, PhonebookContainer, ContactsTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);
    if (contactsParsed) {
      this.setState({
        contacts: contactsParsed,
        filter: '',
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts list!`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts list!`);;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <PhonebookContainer>
        <PhoneBook>Phonebook</PhoneBook>
        <ContactForm onSubmit={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        
        {contacts.length > 0 ? (
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          alert(`Phonebook is empty`)
        )}
      </PhonebookContainer>
    );
  }
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
