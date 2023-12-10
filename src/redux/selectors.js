import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, value) => {
    if (!Array.isArray(contacts.contacts)) {
      return [];
    }
    const normalizedValue = value.toLowerCase().trim();
    return contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  }
);
