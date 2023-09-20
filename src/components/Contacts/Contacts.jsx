import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import 'react-toastify/dist/ReactToastify.css';

import Section from 'components/Section/Section';
import ContactsForm from 'components/ContactsForm/ContactsForm';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const Contacts = () => {
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    return parsedContacts ? parsedContacts : INITIAL_STATE;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    console.log(parsedContacts);
    if (parsedContacts) setContacts(parsedContacts);
    console.log('сработал дидмаунт');
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('сработал дидапдейт');
  }, [contacts]);

  const createContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    const normalizedName = newContact.name.toLowerCase();
    const repeatedContact = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    const alertString = newContact.name + ' is already in contacts.';
    if (repeatedContact) {
      toast.error(alertString);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onDelete = selectedId => {
    setContacts(prevContacts => {
      const newContacts = prevContacts.filter(
        contact => selectedId !== contact.id
      );
      return [...newContacts];
    });
  };

  const onFilterChange = filterText => {
    console.log(filterText);
    setFilter(filterText);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactsForm createContact={createContact} />
      </Section>
      <Section title="Contacts">
        <>
          <Filter filterText={filter} onFilterChange={onFilterChange} />
          <ContactList contacts={visibleContacts} onDelete={onDelete} />
        </>
      </Section>
    </>
  );
};

export default Contacts;
