import React from 'react';
import '../App.css';
import styled from 'styled-components';
import SafeArea from 'react-safe-area-component'
import { SearchInput} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import notes_ico from './Resources/notes_ico.png'
import signals_ico from './Resources/signals_ico.png'
import journals_ico from './Resources/journals_ico.png'
import assaysheets_ico from './Resources/assaysheets_ico.png'
import datasheets_ico from './Resources/datasheets_ico.png'
import dws_ico from './Resources/dws_ico.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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


const Resources = (props) => {
  return (
      
      
      <div>    
   
   


      </div>
    )
  };




const ExampleStyledComponents = () => (
  <SafeArea top bottom>
  <Wrapper>
    <Title>Resources</Title>
    <Card className="text-center" style={{ display:'inline', justifyContent:'top' , width: 'devicewidth'}}>
  <Card.Body style={{height: '80px',padding: '0px'}} >
    <Card.Img variant = "top" style={{width: '6vh'}} src={notes_ico}/>
    <Card.Title>Technical Notes</Card.Title>
  </Card.Body>
</Card>
<Card className="text-center" style={{ display:'inline', justifyContent:'top' , width: 'devicewidth'}}>
  <Card.Body style={{height: '80px',padding: '0px'}} >
    <Card.Img variant = "top" style={{width: '6vh'}} src={datasheets_ico}/>
    <Card.Title>Data Sheets</Card.Title>
  </Card.Body>
</Card>
<Card className="text-center" style={{ display:'inline', justifyContent:'top' , width: 'devicewidth'}}>
  <Card.Body style={{height: '80px',padding: '0px'}} >
    <Card.Img variant = "top" style={{width: '6vh'}} src={assaysheets_ico}/>
    <Card.Title>Assay Sheets</Card.Title>
  </Card.Body>
</Card>
<Card className="text-center" style={{ display:'inline', justifyContent:'top' , width: 'devicewidth'}}>
  <Card.Body style={{height: '80px',padding: '0px'}} >
    <Card.Img variant = "top" style={{width: '6vh'}} src={journals_ico}/>
    <Card.Title>Journals</Card.Title>
  </Card.Body>
</Card>
<Card className="text-center" style={{ display:'inline', justifyContent:'top' , width: 'devicewidth'}}>
  <Card.Body style={{height: '80px',padding: '0px'}} >
    <Card.Img variant = "top" style={{width: '6vh'}} src={signals_ico}/>
    <Card.Title>Signals</Card.Title>
  </Card.Body>
</Card>


  </Wrapper>
  </SafeArea>
);
//export default ExampleStyledComponents;
export default ExampleStyledComponents;