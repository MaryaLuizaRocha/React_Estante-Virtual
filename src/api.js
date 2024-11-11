// api.js
export const fetchBooks = async () => {
  const response = await fetch(
    "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 12112964",
      },
    }
  );
  const data = await response.json();
  return data;
};
