import React from 'react';
import styled from 'styled-components/native';
import { responsiveHeight, responsiveWidth } from '../constants/aspectRatio';
import { View } from 'react-native';
import Salon from './../assets/icons/hair-salon.svg';
import Ac from './../assets/icons/air-conditioner.svg';
import CarWash from './../assets/icons/car-wash.svg';
import CarRepair from './../assets/icons/car-repair.svg';
import Cleaner from './../assets/icons/cleaner.svg';
import Mechanic from './../assets/icons/mechanic.svg';

import { CategoriesData } from '../constants/Categories';

const Wrapper = styled.View`
  height: ${responsiveHeight('47%')};
  width: ${responsiveWidth('100%')};
  margin-top: ${responsiveHeight('3%')};
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: white;
`;

const IconWrapper = styled.View`
  height: 28%;
  width: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-width: 0.2px;
  border-color: ${(props) => props.theme.color.greyLighter};
  padding: 15px;
`;

const IconTitle = styled.Text`
  font-size: 10px;
  padding: 5px;
  text-align: center;
  font-weight: 600;
`;

const IconCategories: React.FC = () => {
  const loop = false;
  return (
    <>
      <Wrapper>
        <IconWrapper>
          <Ac height={'60%'} width={'60%'} fill={''} />
          <IconTitle>AC Service and Repair</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Salon height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Hair Salon</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <CarWash height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Car Wash</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <CarRepair height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Car Repair</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Cleaner height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Cleaner</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Mechanic height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Mechanic</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Ac height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Ac Service and Repair</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Ac height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Ac Service and Repair</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Cleaner height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Cleaner</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Mechanic height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Mechanic</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Ac height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Ac Service and Repair</IconTitle>
        </IconWrapper>
        <IconWrapper>
          <Ac height={'60%'} width={'60%'} fill={''} />
          <IconTitle>Ac Service and Repair</IconTitle>
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default IconCategories;
