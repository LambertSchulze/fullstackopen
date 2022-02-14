const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.flatMap((contact, index) => 
        <Contact key={index} contact={contact} />
      )}
  </ul>
  )
}

const Contact = ({ contact }) => {
  return (
    <li>{contact.name} {contact.number}</li>
  )
}

export default ContactList