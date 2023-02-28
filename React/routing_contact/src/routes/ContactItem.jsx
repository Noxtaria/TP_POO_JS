const ContactItem = (props) => {
  return(
    <div>
      <div>
        <div>{props.contact.firstName} {props.contact.lastName}</div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <hr />
      <ul>
        <li><b>Email :</b> {props.contact.email}</li>
        <li><b>Phone number :</b> {props.contact.phone}</li>
      </ul>

    </div>
  )
}

export default ContactItem