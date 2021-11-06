import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const uniId = 'zrsfFNvt20pe6hjnRwcn';

const appURL = `${baseURL}${uniId}/books/`;

const addBookAPI = async (book) => {
  try {
    const response = axios.post(appURL, book);
    return response;
  } catch (error) {
    return error;
  }
};

const fetchBookAPI = async () => {
  const APIData = [];

  const response = await axios.get(appURL);
  Object.entries(response.data).forEach((item) => {
    const bookID = item[0];
    const [{ title, category }] = item[1];

    const objAPI = {
      item_id: bookID,
      title,
      category,
    };

    APIData.push(objAPI);
  });

  return APIData;
};

const removeBookAPI = async (id) => {
  const req = await axios.delete(`${appURL}${id}`, {
    item_id: id,
  });
  return req;
};

export { addBookAPI, removeBookAPI, fetchBookAPI };
