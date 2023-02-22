import { useRef } from "react"

const ContactForm = (props) => {
    const nomRef = useRef()
    const prenomRef = useRef()
    const dateNaissanceRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const avatarRef = useRef()

    const submitFormHandler = (event) => {
        event.preventDefault()

        const nom = nomRef.current.value
        const prenom = prenomRef.current.value
        const dateNaissance = dateNaissanceRef.current.value
        const age = ageRef.current.value
        const email = emailRef.current.value
        const phone = phoneRef.current.value
        const avatar = avatarRef.current.value

        const newContact = {
            nom,
            prenom,
            dateNaissance,
            age,
            email,
            phone,
            avatar
        }

        nomRef.current.value = ""
        prenomRef.current.value = ""
        dateNaissanceRef.current.value = ""
        ageRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""
        avatarRef.current.value = ""

        props.addContact(newContact)
    }

    return (
        <>
            <h3>Contact Form</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom: </label>
          <input type="text" required id="nom" ref={nomRef} className="form-control" />
        </div>
      <div className="mb-3">
          <label htmlFor="prenom" className="form-label">Prenom: </label>
          <input type="text" required id="prenom" ref={prenomRef} className="form-control" />
        </div>
      <div className="mb-3">
          <label htmlFor="dateNaissance" className="form-label">Date de Naissance: </label>
          <input type="text" required id="dateNaissance" ref={dateNaissanceRef} className="form-control" />
        </div>
      <div className="mb-3">
          <label htmlFor="age" className="form-label">Age: </label>
          <input type="number" required id="age" ref={ageRef} className="form-control" />
        </div>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input type="email" required id="email" ref={emailRef} className="form-control" />
        </div>
      <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telephone: </label>
          <input type="text" required id="phone" ref={phoneRef} className="form-control" />
        </div>
      <div className="mb-3">
          <label htmlFor="avatar" className="form-label">Avatar: </label>
          <input type="text" required id="avatar" ref={avatarRef} className="form-control" />
        </div>
        
        <div className="text-end">
          <button className="btn btn-outline-light"><i className="bi bi-send"></i> Envoyer</button>
        </div>
      </form>
        </>
    )
}

export default ContactForm