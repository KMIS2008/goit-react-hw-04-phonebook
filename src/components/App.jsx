
import { nanoid } from 'nanoid'
import { GlobalStyle } from './GlobalStyle';
import {FormAddContact} from './FormAddContact/FormAddContact';
import {SectionTitle} from './SectionTitle/SectionTitle';
import {ContactsList} from './Contacts/Contacts';
import {FilterConctacts} from './Filter/Filter';
import {TitleContacts,
        Contater} from './App.styled';
import { useState, useEffect } from 'react';

const contactBook = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]

    const getContactsLocalStorege = () => {
      const savedContacts = window.localStorage.getItem("contactsKey");
      return savedContacts !== null ? JSON.parse(savedContacts) : contactBook;
    };

    export const App =()=> {
       const [filter, setFilter] = useState('');
       const [contacts, setContacts] = useState(getContactsLocalStorege);

  useEffect(() => {
    window.localStorage.setItem("contactsKey", JSON.stringify(contacts));
  }, [contacts]);
    
      const addContact =(newContact)=> {
    
        const newAddContact = contacts.some(contact=> newContact.name.toLowerCase().trim() === contact.name.toLowerCase());
    
          if(newAddContact){
            alert(`${newContact.name} is already in contacts`);
            return;
          }

          setContacts(prevContact=>[...prevContact, { ...newContact, id: nanoid() }]);
      }
    
      const filterName =(newName)=>setFilter(newName);
      
    
      const deleteContact = contactId =>{
          setContacts(prevContacts=>
            prevContacts.filter(contact=> contact.id !== contactId)
         )
        };

    
        const visibleContact = contacts.filter(contact=>{
          const hasContact = contact.name.toLowerCase().includes(filter.toLowerCase());
          return hasContact;
        })
    
      return (
        <Contater>
         
           <SectionTitle title="Phonebook"/>
    
           <FormAddContact onAdd={addContact} />
       
           <TitleContacts>Contacts</TitleContacts>
    
           <FilterConctacts filter={filter} onNameFilter={filterName}/>
        
           <ContactsList contacts ={visibleContact} ondelete={deleteContact}/>
      
           <GlobalStyle/>
    
        </Contater>
      );
    };
    
