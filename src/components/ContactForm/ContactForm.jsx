import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  PhonebookWrap,
  FormButton,
  FormInput,
  FormLabel,
} from './ContactForm.styled';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name && !number) {
      return;
    }
    addNewContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  const addNewContact = newContact => {
    if (
      contacts.contacts.find(contact => {
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      alert(newContact.name + ' is already in contacts.');
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);

        break;
      case 'number':
        setNumber(e.target.value);

        break;
      default:
        console.log(`Unknown input ${name}`);
    }
  };
  return (
    <div>
      <PhonebookWrap onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <FormInput
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
        <br />
        <FormButton type="submit">Add contact</FormButton>
      </PhonebookWrap>
    </div>
  );
}
