import { useState } from "react"
import { useFetchContactsQuery } from "redux/contacts/contactsSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import ContactForm from "components/ContactForm/ContactForm"

export const ContactsPage = () => {
    const [filter, setFilter] = useState('');

  const { data: contacts, error, isError } = useFetchContactsQuery();
  
  
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

    
    return (
        <div style={{ padding: '20px' }}>
       {isError && <p>{error.data }</p>}
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter}/>
      {contacts && <ContactList filter={filter} contacts={contacts} />}
       <ToastContainer />
    </div>
    )
}