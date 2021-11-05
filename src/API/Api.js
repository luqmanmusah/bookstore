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

    
}