// import { render } from '@testing-library/react';
import { Component } from 'react';
import { nanoid } from 'nanoid'
import { GlobalStyle } from './GlobalStyle';
import {FormAddContact} from './FormAddContact/FormAddContact';
import {SectionTitle} from './SectionTitle/SectionTitle';
import {ContactsList} from './Contacts/Contacts';
import {FilterConctacts} from './Filter/Filter';
import {TitleContacts,
        Contater} from './App.styled';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

    componentDidMount() {
    const savedContacts = localStorage.getItem("contactsKey");
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
     localStorage.setItem( "contactsKey",
      JSON.stringify(this.state.contacts))
    }
   }

  addContact =(newContact)=> {

    const newAddContact = this.state.contacts.some(contact=> newContact.name.toLowerCase() === contact.name.toLowerCase());

      if(newAddContact){
        alert(`${newContact.name} is already in contacts`);
        return;
      }

     this.setState(prevState=> {
     return {
     contacts: [...prevState.contacts,
                {
                  ...newContact,
                  id: nanoid(),
                }
              ],
          };
       });
  }

  filterName =(newName)=>{
    this.setState(
     {filter: newName} 
    )
  }

  deleteContact = contactId=>{
     this.setState(prevState=>{
     return {
      contacts: prevState.contacts.filter(contact=> contact.id !== contactId),
     };
    });
  };

  render(){

    const visibleContact = this.state.contacts.filter(contact=>{
      const hasContact = contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
      return hasContact;
    })

  return (
    <Contater>
     
    <SectionTitle title="Phonebook"/>

    <FormAddContact onAdd={this.addContact} />
   
    <TitleContacts>Contacts</TitleContacts>

    <FilterConctacts filter={this.state.filter} onNameFilter={this.filterName}/>
    
    <ContactsList contacts ={visibleContact} ondelete={this.deleteContact}/>
  

      <GlobalStyle/>

    </Contater>
  );
  }
};
