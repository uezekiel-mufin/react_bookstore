/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ item }) => (
  <div>
    <section>
      <span>{item.author}</span>
      <span>{item.title}</span>
      <button type="submit">remove</button>
    </section>
  </div>
);

export default Book;
Book.propTypes = { item: PropTypes.shape.isRequired };
