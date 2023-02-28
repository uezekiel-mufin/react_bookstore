/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RemoveButton from '../Buttons/RemoveButton';
import { removeBook } from '../../redux/books/bookSlice';

const appId = process.env.REACT_APP_ID;
const bookUrl = process.env.REACT_APP_BOOKS;
const url = `${bookUrl}/${appId}/books`;

const Book = ({ id, item }) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(65);
  const handleDelete = () => {
    const delItem = {
      item_id: id,
      ...item,
    };
    dispatch(removeBook({ url, key: id, item: delItem }));
  };

  return (
    <>
      <div>
        <section className="grid md:grid-cols-2 gap-8 md:justify-between shadow-lg bg-white p-4 py-8 md:p-8 rounded-lg">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#121212] text-sm font-bold opacity-50">
              {item.category}
            </h4>
            <h2 className="text-xl md:text-2xl font-bold capitalize">
              {item.title}
            </h2>
            <h3 className="text-[#4386bf] text-md capitalize">{item.author}</h3>
            <div className="flex gap-4 mt-4 divide-x-2 divide-[#e8e8e8] text-[#4386bf] text-sm">
              <button type="button" className="capitalize">
                comments
              </button>
              <RemoveButton onClick={() => handleDelete()} />
              <button type="button" className="pl-4 capitalize">
                Edit
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x-2">
            <div className="flex justify-start gap-4 items-center">
              <span className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] ">
                <CircularProgressbar
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
                />
              </span>
              <span>
                <p className="text-xl md:text-[2rem] text-[#121212]">{`${progress}%`}</p>
                <p className="text-sm opacity-50">Completed</p>
              </span>
            </div>
            <div className="flex justify-center items-start pl-4 md:pl-[3.688rem] flex-col">
              <h4 className="text-[#121212] opacity-50 text-sm">
                Current Chapter
              </h4>
              <h3 className="text-md text-[#121212]">Chapter 17</h3>
              <button
                type="button"
                className="bg-[#0290ff] text-white px-2 md:px-5 py-2 text-sm rounded-sm mt-4"
              >
                Update Progress
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Book;
Book.propTypes = { item: PropTypes.objectOf.isRequired };
Book.propTypes = { id: PropTypes.string.isRequired };
