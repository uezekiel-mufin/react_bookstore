import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import AddButton from './Buttons/AddButton';

const Form = () => {
  const books = useSelector((state) => state.books.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const itemId = `item${books.length + 1}`;
    e.preventDefault();
    dispatch(addBook({ item_id: itemId, title, author }));
  };

  return (
    <div>
      <form>
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
