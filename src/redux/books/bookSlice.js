import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const initialState = {
  books: [],
  loading: false,
  errors: '',
};

export const fecthBooks = createAsyncThunk('fetchBooks', async (url) => {
  const { data } = await axios.get(url);
  return data;
});

export const addBook = createAsyncThunk('addBook', async ({ url, item }) => {
  const { data } = await axios.post(`${url}`, item);
  return { data, item };
});

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const { id } = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book[0] !== id);
      console.log(newState);
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fecthBooks.pending, (state) => {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    });
    builder.addCase(fecthBooks.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.loading = false;
      newState.books = Object.entries(action.payload);
      return newState;
    });
    builder.addCase(fecthBooks.rejected, (state) => {
      const newState = { ...state };
      newState.loading = false;
      newState.books = [];
      newState.errors = 'There was an error fetching your books';
      return newState;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      const { item } = action.payload;
      state.books.push(item);
    });
  },
});

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
