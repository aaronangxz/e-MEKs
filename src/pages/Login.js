import React from 'react';
import '../App.css';
import styled from 'styled-components';
import SafeArea from 'react-safe-area-component'

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

const ExampleStyledComponents = () => (
  <SafeArea top bottom>
  <Wrapper>
    <Title>Me</Title>
  </Wrapper>
  </SafeArea>
);
export default ExampleStyledComponents;