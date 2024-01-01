import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './../redux/operations';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && (
        <h1
          style={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'red',
            fontSize: '28px',
          }}
        >
          Oops! {error}. Please refresh the page and try again
        </h1>
      )}

      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {isLoading && <Loader />}

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There is no added contacts" />
        )}
      </Section>
    </>
  );
};

export default App;
