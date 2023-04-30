import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContact } from 'store/contactsSlice/contactsSlice';

function ContactList() {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
