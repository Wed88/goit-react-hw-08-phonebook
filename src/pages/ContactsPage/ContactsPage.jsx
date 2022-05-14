import { useState } from "react"
import { useFetchContactsQuery } from "redux/contacts/contactsSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import ContactForm from "components/ContactForm/ContactForm"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const ContactsPage = () => {
    const [filter, setFilter] = useState('');

  const { data: contacts, error, isError } = useFetchContactsQuery();
  
  
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

    
  return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >        
          {isError && <p>{error.data}</p>}
          <Typography component="h1" variant="h4">
            Телефонная книга
          </Typography>
          <ContactForm />
          <Typography component="h2" variant="h5" sx={{mt:2}}>
            Контакты
          </Typography>
          <Filter value={filter} changeFilter={changeFilter}/>
          {contacts && <ContactList filter={filter} contacts={contacts} />}
          <ToastContainer />
        </Box>
      </Container>
      </ThemeProvider>
    )
}