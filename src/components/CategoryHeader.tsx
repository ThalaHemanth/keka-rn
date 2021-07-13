import React from 'react';
import styled from 'styled-components/native';
import { responsiveHeight, responsiveWidth } from '../constants/aspectRatio';

const TitleWrapper = styled.View`
  height: ${responsiveHeight('5%')};
  width: ${responsiveWidth('100%')};
  margin-top: ${responsiveHeight('2%')};
  padding: 2px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => props.theme.color.greyDarkest};
`;

const More = styled.Text``;

const MoreWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

const CategoryHeader: React.FC<{ title: string; titleOnly: boolean }> = (
  props,
) => {
  return (
    <TitleWrapper>
      <Title>{props.title}</Title>
      {props.titleOnly ? null : (
        <MoreWrapper>
          <More>More</More>
        </MoreWrapper>
      )}
    </TitleWrapper>
  );
};

export default CategoryHeader;
