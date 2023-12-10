import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, DeleteButton, EditButton } from './ContactList.styled';
import EditForm from 'components/EditForm/EditForm';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const [edit, setEdit] = useState('');

  const contactsFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.contacts.filter(({ name, number }) => {
      return (
        name.trim().toLowerCase().includes(normalizeFilter) ||
        number.trim().toLowerCase().includes(normalizeFilter)
      );
    });
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contactsFilter().map(item => (
        <ListItem key={item.id}>
          {edit !== item.id ? (
            <>
              <div>
                {item.name}: {item.number}
              </div>
              <div>
                <EditButton
                  type="button"
                  value={item.id}
                  onClick={e => {
                    setEdit(e.currentTarget.value);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  value={item.id}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </DeleteButton>
              </div>
            </>
          ) : (
            <EditForm item={item} setEdit={setEdit} />
          )}
        </ListItem>
      ))}
    </>
  );
}
