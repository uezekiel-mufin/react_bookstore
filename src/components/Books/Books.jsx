/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthBooks } from '../../redux/books/bookSlice';
import Form from '../Form';
import Book from './Book';

const appId = process.env.REACT_APP_ID;
const bookUrl = process.env.REACT_APP_BOOKS;
const Books = () => {
  const booklists = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const url = `${bookUrl}/${appId}/books`;
  useEffect(() => {
    dispatch(fecthBooks(url));
  }, []);

  return (
    <div className="px-4 py-20 md:px-20 pb-40 divide-y-2">
      <div className="space-y-4">
        {booklists?.map(([key, value]) => (
          <Book key={key} id={key} item={value[0]} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
