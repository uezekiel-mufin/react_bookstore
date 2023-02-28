const createBook = async (url) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
  });
  const data = await response.text();
  return data;
};
export default createBook;
