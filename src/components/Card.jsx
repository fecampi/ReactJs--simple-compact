import React from 'react'
import styled from 'styled-components';


const Card = styled.div`
flex:1;
border: 3px solid #000;
border-radius:10px;
overflow: hidden;
margin: 8px;
display: flex;
flex-direction:column;
min-width:300px;
`;

const Header = styled.div`
background-color: #000;
color: #fff;
font: 3rem;
padding:8px 0px;
h1{
font-size:32px;
}
`;


const Content = styled.div`
flex:1;
padding: 16px 0px;
background-color: #fff;
color: #000;
padding: 8px 16px;
`;



export default props =>
    <Card>
        <Header><h1>{props.title}</h1></Header>
        <Content>{props.children}</Content>
    </Card>
    






