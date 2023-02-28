import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const initialState = {
  books: [],
};

export const fecthBooks = createAsyncThunk('fetchBooks', async (url) => {
  const { data } = await axios.get(url);
  return data;
});

export const addBook = createAsyncThunk('addBook', async ({ url, item }) => {
  const { data } = await axios.post(`${url}`, item);
  return { data, item };
});

export const removeBook = createAsyncThunk(
  'removeBook',
  async ({ url, key, item }) => {
    const { data } = await axios.delete(`${url}/${key}`, item);
    return { data, key };
  },
);

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fecthBooks.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.books = Object.entries(action.payload);
      return newState;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      const { item } = action.payload;
      const newItem = [
        item.item_id,
        [
          {
            author: item.author,
            title: item.title,
            category: item.category,
          },
        ],
      ];
      state.books.push(newItem);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const { key } = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book[0] !== key);
      return newState;
    });
  },
});

export default bookSlice.reducer;
