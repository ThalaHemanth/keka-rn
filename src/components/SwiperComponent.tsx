import React from 'react';
import Swiper from 'react-native-swiper';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { responsiveHeight, responsiveWidth } from '../constants/aspectRatio';

const SwiperItemWrapper = styled.View`
  height: 100%;
  width: 100%;
`;

const SwiperContainer = styled.View`
  height: ${responsiveHeight('20%')};
  width: ${responsiveWidth('100%')};
`;

const SwiperComponent: React.FC = () => {
  console.log(responsiveHeight('20%'));
  console.log(responsiveWidth('100%'));
  return (
    <SwiperContainer>
      <Swiper autoplay height="100%" showsButtons={false}>
        <SwiperItemWrapper>
          <Image
            source={require('../assets/Images/air-conditioner.png')}
            style={{ flex: 1 }}
          />
        </SwiperItemWrapper>
        <SwiperItemWrapper>
          <Image
            source={require('../assets/Images/car-service.png')}
            style={{ flex: 1 }}
          />
        </SwiperItemWrapper>
        <SwiperItemWrapper>
          <Image
            source={require('../assets/Images/home-cleaning.png')}
            style={{ flex: 1 }}
          />
        </SwiperItemWrapper>
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperComponent;
