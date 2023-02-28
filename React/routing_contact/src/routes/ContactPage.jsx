import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactPage = () => {
  const contacts = useSelector((state) => state.listContact.contacts);

  return (
    <div className="container">
      <div>
        <h2>Contact List</h2>
      </div>
      <hr />
      {contacts &&
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </div>
  );
};

export default ContactPage;
