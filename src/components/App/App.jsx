import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { MainWrap } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainWrap>
      <h1>Phonebook-HW-7</h1>
      <ContactForm />
      {contacts.contacts ? (
        <div>
          <h2>Contacts</h2>
          <hr />
          <Filter />
          <hr />
          <ContactList />
        </div>
      ) : (
        <p>You haven't any contact</p>
      )}
    </MainWrap>
  );
}
