import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const UsersApi = {
  async getContact() {
    const { data } = await axios.get('/contacts', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM5YmY2Nzg3NzVkZDAwMTU4NjM3YmQiLCJpYXQiOjE2NjQ4MDMzOTd9.vcHPnwzeTvwfw_FkZlMRBdxLqqsMrAN59MiBWH9WOY4',
      },
    });
    return data;
  },
  async addContact(contact) {
    const { data } = await axios({
      url: '/contacts',
      method: 'post',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM5YmY2Nzg3NzVkZDAwMTU4NjM3YmQiLCJpYXQiOjE2NjQ4MDMzOTd9.vcHPnwzeTvwfw_FkZlMRBdxLqqsMrAN59MiBWH9WOY4',
      },
      data: contact,
    });
    return data;
  },
  async deleteContact(id) {
    const { data } = await axios({
      url: `/contacts/${id}`,
      method: 'delete',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM5YmY2Nzg3NzVkZDAwMTU4NjM3YmQiLCJpYXQiOjE2NjQ4MDMzOTd9.vcHPnwzeTvwfw_FkZlMRBdxLqqsMrAN59MiBWH9WOY4',
      },
    });
    return data;
  },
};
