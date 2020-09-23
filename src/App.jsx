import React from 'react'
import Card from './components/Card'
import List from './components/List/List'
import styled from 'styled-components';




const Container = styled.div`
display:flex;
flex-direction: row;
align-items: flex-start;
flex-wrap:wrap;
`;

export default props =>
    <Container>
        <Card title="Loja">
            <List products></List>
        </Card>
        <Card title="Loja">
            <List></List>
        </Card>
    </Container>







