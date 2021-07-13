import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { responsiveHeight, responsiveWidth } from '../constants/aspectRatio';

const SearchBarContainer = styled.View`
  height: ${responsiveHeight('11%')};
  width: ${responsiveWidth('100%')};
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const SearchBarComponent: React.FC = () => (
  <SearchBarContainer>
    <Searchbar
      style={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}
      placeholder="Search"
    />
  </SearchBarContainer>
);

export default SearchBarComponent;
