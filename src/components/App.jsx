import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
