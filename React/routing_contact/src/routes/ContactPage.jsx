import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import { Link } from "react-router-dom"


const ContactPage = () => {
  const contacts = useSelector((state) => state.listContact.contacts);

  return (
    <div className="col-10 offset-1 rounded bg-dark text-light p-3 mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Contacts List</h2>
        <Link className="border-success btn text-success" to="/Add?mode=Add"> <i class="bi bi-plus-circle"></i> Add</Link>

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
