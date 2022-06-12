export const handleFetchBooks = async query => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
