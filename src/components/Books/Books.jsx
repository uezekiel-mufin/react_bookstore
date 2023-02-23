import React from 'react';
import Form from '../Form';
import Book from './Book';

const Books = () => {
  const booklists = [
    {
      id: 1,
      author: 'Jane Smith',
      title: 'A Fairy Tale',
    },
    {
      id: 2,
      author: 'Andrew Davis',
      title: 'Throne of Grace',
    },
    {
      id: 3,
      author: 'Kelvin Sparks',
      title: 'Eaten Alive',
    },
    {
      id: 4,
      author: 'Leonard Banks',
      title: 'Money Changes You',
    },
  ];
  return (
    <div>
      <div>
        {
        booklists.map((item) => (
          <Book key={item.id} item={item} />
        ))
        }
      </div>
      <Form />
    </div>
  );
};

export default Books;
