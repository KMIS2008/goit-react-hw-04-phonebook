import styled from 'styled-components';

export const Contact = styled.li`
width: 500px;
display: flex;
justify-content: space-between;
margin-top: 15px;
margin-left: 20px;
font-weight: normal;
font-size: 22px;
`
export const ButtonDelete = styled.button`
width: 100px;
display: block;
padding: ${p=>p.theme.spacing(1)};
text-align: center;
font-size: 18px;
border: 1px solid ${p=>p.theme.colors.border};
border-radius: 5px;
box-shadow: rgb(169, 158, 158) 0px 2px 5px 0px;
`
