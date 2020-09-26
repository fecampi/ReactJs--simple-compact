import React from 'react'
import Card from './components/Props&Children/Card'
import List from './components/ListMap/List'
import SuperDirect from './components/CommunicationIndirect/Super';
import SuperIndirect from './components/CommunicationIndirect/Super';
import Input from './components/ControlledComponents/Input';
import styled from 'styled-components';



const Container = styled.div`
display:flex;
flex-direction: ${
    (props) =>
      props.row ? 'row' :'column' 
  
  };
align-items: flex-start;
flex-wrap:wrap;
`;


export default props =>
    <Container row>
        <Card title="List" HeaderColor="#FA6900">
            <List></List>
        </Card>

        <Card title="Communication Direct" HeaderColor="#FA9980">
            <SuperDirect sobrenome="Silva"></SuperDirect>
        </Card>
        <Card title="Communication Indirect" HeaderColor="#A88070">
            <SuperIndirect></SuperIndirect>
        </Card>
        <Card title="State" HeaderColor="#B01070">
            <Input></Input>
        </Card>
    </Container>







