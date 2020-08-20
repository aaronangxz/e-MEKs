import React from 'react';
import '../App.css';
import styled from 'styled-components';
import SafeArea from 'react-safe-area-component'
import { SearchInput} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

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
    <Title>Parts Library</Title>
    <SearchInput
  placeholder='Part number or part name' />
  </Wrapper>
  </SafeArea>
);
export default ExampleStyledComponents;