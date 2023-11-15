import {
    Form,
    Field,
    ErrorMessage,
  } from 'formik';

import styled from 'styled-components';

export const Button = styled.button`
width: 100px;
display: block;
padding: ${p=>p.theme.spacing(1)};
text-align: center;
font-size: 18px;
border: 1px solid ${p=>p.theme.colors.border};
border-radius: 5px;
box-shadow: rgb(169, 158, 158) 0px 2px 5px 0px;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap:  ${p=>p.theme.spacing(2)};
  margin-top: ${p=>p.theme.spacing(4)};
  padding:  ${p=>p.theme.spacing(4)};
  max-width: 400px;
  border: 3px solid ${p=>p.theme.colors.black};
`;

export const FieldStyle = styled(Field)`
  padding: ${p=>p.theme.spacing(1)};
  font: inherit;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom:  ${p=>p.theme.spacing(2)};
  gap:  ${p=>p.theme.spacing(2)};
  font-weight: normal;
  text-align: start;
`;

export const ErrorMsg = styled(ErrorMessage)`
color: ${p=>p.theme.colors.red};
`
