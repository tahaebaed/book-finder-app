export const handleFetchOneBook = async id => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const data = response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
