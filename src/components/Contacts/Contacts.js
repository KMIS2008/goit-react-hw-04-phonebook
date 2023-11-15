import {Contact,
        ButtonDelete} from './Contacts.styled';

export const ContactsList = ({contacts, ondelete})=>{
    return (
        <ul>
            {contacts.map((contact)=>{
                return (
                  <Contact key={contact.id}>{contact.name}:  {contact.number}

                  <ButtonDelete type='button' onClick = {()=>ondelete(contact.id)}>Delete</ButtonDelete>
                  </Contact>
                )
            })}
        </ul>
    )
}