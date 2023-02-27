/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import AddButton from './Buttons/AddButton';

const appId = process.env.REACT_APP_ID;
const bookUrl = process.env.REACT_APP_BOOKS;

const Form = () => {
  const url = `${bookUrl}/${appId}/books`;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = uuid();
    const smallId = uniqueId.slice(0, 10);

    const item = {
      item_id: smallId,
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook({ url, item }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form id="form">
        <div>
          <input
            type="text"
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <input
            type="text"
            id="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <AddButton handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
