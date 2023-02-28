import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';
import menuReducer from './menu/menuSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
    menu: menuReducer,
  },
});

export default store;
