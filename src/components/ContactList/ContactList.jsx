import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, DeleteButton, EditButton } from './ContactList.styled';
import EditForm from 'components/EditForm/EditForm';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const [edit, setEdit] = useState('');

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.length > 0 ? (
        <>
          {contacts.map(item => (
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
      ) : (
        <div>Сорян, немає контактів відповідно до пошуку</div>
      )}
    </>
  );
}
