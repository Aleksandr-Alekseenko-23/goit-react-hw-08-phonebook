import axios from 'axios';

export const ContactsApi = {
  async getContact() {
    const { data } = await axios.get('/contacts');
    return data;
  },
  async addContact(contact) {
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
  async deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  },
  async updateContact(contact) {
    const { data } = await axios.patch(`/contacts/${contact.id}`, {
      name: contact.name,
      number: contact.number,
    });
    return data;
  },
};
