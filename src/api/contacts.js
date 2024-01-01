import axios from 'axios';

axios.defaults.baseURL =
  'https://658d43a27c48dce94738cfe0.mockapi.io/contacts/';

// export const getAllContacts = async () => {
//   const { data } = await axios();
//   return data;
// };

// export const addContact = async contact => {
//   await axios.post(contact);
// };
// export const deleteContact = async id => {
//   await axios.delete(`${id}`);
// };
