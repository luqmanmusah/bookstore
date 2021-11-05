import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const uniId = 'zrsfFNvt20pe6hjnRwcn';

const appURL = `${baseURL}${uniId}/books/`;

const addBookAPI = async (book) => {
  axios.post(appURL, book)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

const fetchBookAPI = async () => {
  const APIData = [];

  const response = await axios.get(appURL);
  Object.entries(response.data).forEach((item) => {
    const bookID = item[0];
    const [{ title, author }] = item[1];

    const objAPI = {
      item_id: bookID,
      title,
      author,
    };

    APIData.push(objAPI);
  });

  return APIData;
};

const removeBookAPI = async (id) => {
  axios.delete(`${appURL}${id}`, {
    item_id: id,
  });
};

export { addBookAPI, removeBookAPI, fetchBookAPI };
