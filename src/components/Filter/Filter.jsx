import React from 'react';
import { useDispatch } from 'react-redux';
import { Paragraph } from './Filter.styled';
import { filterChange } from '../../redux/filterSlice';

export default function Filter({ value }) {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div>
      <Paragraph>Find contacts by name</Paragraph>
      <input
        onChange={handleFilterChange}
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
}
