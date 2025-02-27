import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectStatusFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  console.log(contacts);
  const filterData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filterData.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
