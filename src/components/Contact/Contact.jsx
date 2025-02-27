import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div>
        <p className={s.text}>
          <FaUser size="15" />
          {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt size="15" />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
