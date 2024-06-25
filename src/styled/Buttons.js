import styled from "styled-components"

export const Button = styled.button`
color:white;
padding:10px 18px;
background:black;
border-radius:5px;
min-width:220px;
border:none;
font-size:16px;
border:1px solid transparent;
cursor:pointer;
transition:0.4s ease-in;
&:hover{
    background-color:white;
    border:1px solid black;
    color:black;
    transition:0.3s ease-in;
}
`;

export const OutLine = styled(Button)`
background-color: white;
border:1px solid black;
color:black;
&:hover{
    background-color:black;
    border:1px solid black;
    color:white;
}
`;