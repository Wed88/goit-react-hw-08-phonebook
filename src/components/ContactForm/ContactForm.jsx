import { useCreateContactMutation } from 'redux/contacts/contactsSlice';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
  const [createContact] = useCreateContactMutation();

  const hendleSubmit = async event => {
    event.preventDefault();
   
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    event.currentTarget.reset();

   try {
     await createContact({ name, number });
      toast.success("Создан новый контакт!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Box component="form" onSubmit={hendleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        type="text"
        name="name"
        label="Имя"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <TextField
        margin="normal"
        fullWidth
        type="tel"
        name="number"
        label="Номер"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Добавить контакт
      </Button>
    </Box>
  );
}




