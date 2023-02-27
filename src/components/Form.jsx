import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import AddButton from './Buttons/AddButton';

const Form = () => {
  const appId = 'B5qsOM2xpT42cFtPkgSg';
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
  const books = useSelector((state) => state.books.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = `item${books.length + 1}`;
    const item = {
      item_id: itemId,
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
