import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const myMiddleware = store => {
//   return next => {
//     return action => {
//       next(action);
//     };
//   };
// };

// const myMiddleware2 = store => next => action => {
//   console.log('myMiddleware3', action);
//   next(action);
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMd = getDefaultMiddleware();
    return [
      ...defaultMd,
      // myMiddleware,
      // myMiddleware2
    ];
  },
});
