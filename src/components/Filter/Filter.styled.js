import styled from 'styled-components';

export const FormFilter = styled.form`
/* padding:   ${p=>p.theme.spacing(4)}; */
`

export const TitleFilter = styled.label`
display: flex;
flex-direction: column;
font-weight: normal;
font-size: 22px;
`

export const InputFilter = styled.input`
width: 350px;
height: 30px;
border: 3px solid ${p=>p.theme.colors.darkblue};`