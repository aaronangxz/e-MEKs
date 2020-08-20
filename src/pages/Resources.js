import React from 'react';
import '../App.css';
import styled from 'styled-components';
import SafeArea from 'react-safe-area-component'
import { SearchInput, Card} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import notes_ico from './Resources/notes_ico.png'
import signals_ico from './Resources/signals_ico.png'
import journals_ico from './Resources/journals_ico.png'
import assaysheets_ico from './Resources/assaysheets_ico.png'
import datasheets_ico from './Resources/datasheets_ico.png'
import dws_ico from './Resources/dws_ico.png'



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  width: device-width;
  height: 50vh;
  padding: 30px;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 600;
`;

const img1 = styled.div`
    width: 500px;
    height: 500px;
    background-image: url(${({ background }) => background});
    background-size: cover;
`;

{/*const cardtext1 = styled.h1`
  color: #0d1a26;
  font-weight: 600;
  align-items: center;
`; */}


const ExampleStyledComponents = () => (
  <SafeArea top bottom>
  <Wrapper>
    <Title>Resources</Title>
    <Card>
    <img src = {notes_ico} alt="notes_ico"/>
    </Card>
    <Card>
    <img src = {signals_ico} alt="signals_ico"/>
    </Card>
    <Card>
    <img src = {journals_ico} alt="journals_ico"/>
    </Card>
    <Card>
    <img src = {assaysheets_ico} alt="assaysheets_ico"/>
    </Card>
    <Card>
    <img src = {datasheets_ico} alt="datasheets_ico"/>
    </Card>
    <Card>
    <img src = {dws_ico} alt="dws_ico"/>
    </Card>

  </Wrapper>
  </SafeArea>
);
export default ExampleStyledComponents;