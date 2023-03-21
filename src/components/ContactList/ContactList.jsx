import PropTypes from 'prop-types';
import {
    ListItem,
    Contact,
    ButtonDelete,
    ContactContainer,
  } from './ContactList.styled';

  const ContactList = ({ contacts, onDeleteContact }) => {
    return (
      <ContactContainer>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <Contact>
              {name}: {number}{' '}
            </Contact>{' '}
            <ButtonDelete onClick={() => onDeleteContact(id)}>
              Delete
            </ButtonDelete>{' '}
          </ListItem>
        ))}
      </ContactContainer>
    );
  };
  
  export default ContactList;
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };