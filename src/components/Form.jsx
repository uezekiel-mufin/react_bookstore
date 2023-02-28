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
    <div className="w-full mt-[2.5rem] pt-7">
      <h2 className="text-[#888888] text-[1.25rem] font-bold">Add New Book</h2>
      <form className="flex md:flex-row flex-col gap-4 md:gap-8 mt-[1.188rem] w-full">
        <input
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full px-4 py-4 rounded-lg border border-solid border-[#e8e8e8] focus:outline-none"
        />

        <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-4 rounded-lg border border-solid border-[#e8e8e8] focus:outline-none"
        />
        <div>
          <AddButton handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
