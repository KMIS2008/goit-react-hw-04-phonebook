import { Formik } from 'formik';
import { Button } from './FormAdContact.styled'; 
import { FormStyle,
         FieldStyle,
         FormLabel,
         ErrorMsg} from './FormAdContact.styled';
import * as Yup from 'yup';
 
         const SignupSchema = Yup.object().shape({
           name: Yup.string()
             .min(2, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
             .required('Required'),
           number: Yup.string()
             .min(10, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
             .max(14, 'Too Long!')
             .required('Required'),
         });

export const FormAddContact = ({onAdd})=> {
    return (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}

      validationSchema = {SignupSchema}

      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}

    >
      <FormStyle>
           <FormLabel >Name
                <FieldStyle            
                     type="text"
                     name="name"
                    //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required />
                <ErrorMsg name="name" component="span"/>
            </FormLabel>

            <FormLabel >Number
                <FieldStyle            
                     type="tel"
                     name="number"
                    //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required />
                <ErrorMsg name="number" component="span"/>
            </FormLabel>
        
        <Button type="submit">Submit</Button>
      </FormStyle>
    </Formik>
  </div>
    )
}