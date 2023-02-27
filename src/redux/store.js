import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducers: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
