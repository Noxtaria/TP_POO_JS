const ContactItem = (props) => {
  return(
    <div className="border border-info rounded p-3 my-2">
      <div className="d-flex justify-content-between align-items-center">
        <div>{props.contact.firstName} {props.contact.lastName}</div>
        <div>
          <button className="btn border-warning text-warning me-3"><i class="bi bi-pencil-square"></i> Edit</button>
          <button className="btn border-danger text-danger"><i class="bi bi-trash"></i> Delete</button>
        </div>
      </div>
      <hr />
      <ul>
        <li><b>Email :</b> {props.contact.email}</li>
        <li><b>Phone number :</b> {props.contact.phoneNumber}</li>
      </ul>

    </div>
  )
}

export default ContactItem