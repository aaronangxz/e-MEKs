import React from 'react';
import '../App.css';
import styled from 'styled-components';
import SafeArea from 'react-safe-area-component'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: device-width;
  height: 100vh;
  padding: 30px;
  background: #333333;
`;

const Title = styled.h1`
  color: #C5C5C5;
  font-weight: 600;
`;


const ExampleStyledComponents = () => (
  <SafeArea top bottom>
  <Wrapper>
    <Title>the Vault</Title>
  </Wrapper>
  </SafeArea>
);
export default ExampleStyledComponents;