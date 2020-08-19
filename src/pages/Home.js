import React from 'react';
//import Image from 'react-bootstrap/Image'
import nkheader from './Home/nkheader.png'
import homebg from './Home/home-bg.png'
import '../App.css';
import styled from 'styled-components';

const Home = (props) => {
return (
    
    
    <div>    
    {/* <img src={nkheader} alt="Header_img" className="center"/>*/}
    
    </div>
  )
};

{/*export const Backgroundimg = styled.div`
    width: 500px;
    height: 500px;
    background-size: contain;
background: url(${homebg});  ' */}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  maxwidth: 100%;
  height: 80%;
  padding: 50px;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 200;
`;

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
  
  <Wrapper>
    <Logo src={nkheader} />
    <Title>Head</Title>
  </Wrapper>
);
export default ExampleStyledComponents;