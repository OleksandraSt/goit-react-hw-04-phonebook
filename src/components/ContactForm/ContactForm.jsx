import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, ButtonAdd } from './ContactForm.styled';

class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    nameInputId = nanoid();
    numberInputId = nanoid();
  
    handleChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({
        [name]: value,
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    };
  
    reset = () => {
      this.setState({ name: '', number: '' });
    };
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInputId}>
            Name
            <Input
              type="text"
              name="name"
              id={this.nameInputId}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </Label>
  
          <Label htmlFor={this.numberInputId}>
            Number
            <Input
              type="tel"
              name="number"
              id={this.numberInputId}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </Label>
  
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </Form>
      );
    }
  }
  
  export default ContactForm;