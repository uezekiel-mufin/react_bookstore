import React from 'react';

const Form = () => (
  <div>
    <form action="">
      <div>
        <input type="text" placeholder="Book Title" />
      </div>
      <div>
        <input type="text" id="author" placeholder="Author" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Form;
