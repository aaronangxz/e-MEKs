import React from 'react';
//import Image from 'react-bootstrap/Image'
import nkheader from './Home/nkheader.png'
//import homebg from './Home/home-bg.png'
import '../App.css';
import styled from 'styled-components';
import SafeArea from 'react-safe-area-component'
import { SearchInput, Card} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// eslint-disable-next-line
const Home = (props) => {
return (
    
    
    <div>    
    {/* <img src={nkheader} alt="Header_img" className="center"/>*/}
    
    </div>
  )
};

// eslint-disable-next-line
{/*export const Backgroundimg = styled.div`
    width: 500px;
    height: 500px;
    background-size: contain;
background: url(${homebg});  ' */}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: device-width;
  height: 30vh;
  padding: 30px;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 200;
`;

// eslint-disable-next-line
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #1890ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: .3s background;
  &:hover {
    background: #40a9ff;
  }
`;

const Logo = styled.img`
width: auto;
height: 40px;
align-items: center;
`;

const ExampleStyledComponents = () => (
  <SafeArea top bottom>
  <Wrapper>
    <Logo src={nkheader} />
    <Title>Hello!</Title>
    <SearchInput
  placeholder='Search..' />
  <Card>
  <p>Some content</p>
</Card>
  </Wrapper>
  </SafeArea>
);
export default ExampleStyledComponents;