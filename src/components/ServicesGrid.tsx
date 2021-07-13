import React from 'react';
import styled from 'styled-components/native';
import { responsiveHeight, responsiveWidth } from '../constants/aspectRatio';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  height: ${responsiveHeight('60%')};
  width: ${responsiveWidth('100%')};
  background-color: white;
  border-width: 0.1px;
  border-color: ${(props) => props.theme.color.greyLight};
  margin-bottom: ${responsiveHeight('5%')};
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.color.greyDarkest};
  letter-spacing: 1px;
  padding: 5px;
  padding-left: 10px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.color.greyLight};
  padding-left: 10px;
`;

const ImageFlex = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImageContainer = styled.View`
  height: 35%;
  width: 45%;
  margin-top: 2%;
`;

const ImageWrapper = styled.View`
  height: 80%;
  width: 100%;
`;

const Image = styled.Image`
  flex: 1;
`;

const ServiceTitleContainer = styled.View`
  height: 20%;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ServiceTitle = styled.Text``;

const ServicesGrid: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Appliance: Service & Repair</Title>
      <Description>Some Description</Description>
      <ImageFlex>
        <ImageContainer>
          <ImageWrapper>
            <Image
              source={{
                uri:
                  'https://image.shutterstock.com/image-photo/white-air-conditioner-room-wall-600w-1730107399.jpg',
              }}
            />
          </ImageWrapper>
          <ServiceTitleContainer>
            <ServiceTitle>AC Service & Repair</ServiceTitle>
          </ServiceTitleContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <Image
              source={{
                uri:
                  'https://image.shutterstock.com/image-photo/white-air-conditioner-room-wall-600w-1730107399.jpg',
              }}
            />
          </ImageWrapper>
          <ServiceTitleContainer>
            <ServiceTitle>AC Service & Repair</ServiceTitle>
          </ServiceTitleContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <Image
              source={{
                uri:
                  'https://image.shutterstock.com/image-photo/white-air-conditioner-room-wall-600w-1730107399.jpg',
              }}
            />
          </ImageWrapper>
          <ServiceTitleContainer>
            <ServiceTitle>AC Service & Repair</ServiceTitle>
          </ServiceTitleContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <Image
              source={{
                uri:
                  'https://image.shutterstock.com/image-photo/white-air-conditioner-room-wall-600w-1730107399.jpg',
              }}
            />
          </ImageWrapper>
          <ServiceTitleContainer>
            <ServiceTitle>AC Service & Repair</ServiceTitle>
          </ServiceTitleContainer>
        </ImageContainer>
        <Button
          onPress={() => navigation.navigate('Search')}
          style={{ width: '80%', marginTop: '10%', color: 'orange' }}
          mode="outlined"
          color="blue">
          More
        </Button>
      </ImageFlex>
    </Container>
  );
};

export default ServicesGrid;
