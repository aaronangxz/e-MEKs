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
import { CardGroup } from 'reactstrap';
import CardDeck from 'react-bootstrap/CardDeck'
import {Container, Row , Col} from 'react-bootstrap'

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
  <main class ="flex-menu">

    <div id="wrapper">
    <img class = "flex-menuitem" src = {notes_ico} alt="ddd"></img>  
    <p class="flex-text">Technical Notes</p>
    </div>

    <div id="wrapper">
    <img class = "flex-menuitem" src = {datasheets_ico} alt="ddd"></img>  
    <p class="flex-text">Data Sheets</p>
    </div>

    <div id="wrapper">
    <img class = "flex-menuitem" src = {assaysheets_ico} alt="ddd"></img>  
    <p class="flex-text">Assay Sheets</p>
    </div>

    <div id="wrapper">
    <img class = "flex-menuitem" src = {journals_ico} alt="ddd"></img>  
    <p class="flex-text">Journals</p>
    </div>

    <div id="wrapper">
    <img class = "flex-menuitem" src = {signals_ico} alt="ddd"></img>  
    <p class="flex-text">Signals</p>
    </div>

    <div id="wrapper">
    <img class = "flex-menuitem" src = {dws_ico} alt="ddd"></img>  
    <p class="flex-text">DWS</p>
    </div>
  </main>

{/* 
  <ul class="flex-container">
    <li class="flex-item"> 1 </li>
    <li class="flex-item">2</li>
    <li class="flex-item">3</li>
    <li class="flex-item">4</li>
    <li class="flex-item">5</li>
    <li class="flex-item">6</li>
  </ul>


  <Container>
  <Row className="justify-content-sm-center">
    <Col xs ='auto' >sm=2</Col>
    <Col xs ='auto' >sm=2</Col>
    <Col xs ='auto' >sm=2</Col>
   
  </Row>
  <Row className="justify-content-sm-center">
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>
  
  
  <Wrapper>
    <Title>Resources</Title>

 


    <CardDeck>
    <Card className="text-center" style={{ display:'inline', justifyContent:'top' , width: '50px'}}>
  <Card.Body style={{height: '80px',width: '150px',align: 'centre'}} >
    <Card.Img variant = "top" style={{width: '6vh'}} src={notes_ico}/>
    <Card.Title>Notes</Card.Title>
  </Card.Body>
</Card>
<Card className="text-center" style={{ display:'inline', justifyContent:'top' , width: '5vh'}}>
  <Card.Body style={{height: '80px',padding: '0px'}} >
    <Card.Img variant = "top" style={{width: '6vh'}} src={datasheets_ico}/>
    <Card.Title>Sheets</Card.Title>
  </Card.Body>
</Card>
</CardDeck>

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
*/}

</Wrapper>
  </SafeArea>
);
//export default ExampleStyledComponents;
export default ExampleStyledComponents;