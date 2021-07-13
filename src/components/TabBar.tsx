import React from 'react';
import styled from 'styled-components/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { theme } from '../constants/theme';
import { responsiveHeight, responsiveWidth } from '../constants/aspectRatio';
import { TouchableOpacity, View, Text } from 'react-native';
import CartBar from './CartBar';
import { useRootStore } from '../contexts/RootStoreProvider';
import { observer } from 'mobx-react';

const Icons = {
  Home: 'home',
  Bookings: 'list',
  Cart: 'shopping-cart',
  Profile: 'user',
};

const TabBarContainer = styled.View`
  height: ${responsiveHeight('7%')};
  width: 100%;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.color.greyLightest};
  background-color: white;
`;

const TabBarItems = styled.View`
  flex: 1;
`;
const TabBarItem = styled.View`
  width: ${responsiveWidth('15%')};
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: ${responsiveWidth('5%')};
  text-align: center;
`;

const BadgeContainer = styled.View`
  position: absolute;
  right: -8%;
  top: 10%;
  height: 10px;
  width: 10px;
  max-width: 20px;
  max-height: 20px;
  flex-direction: row;
  border-radius: 25px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: white;
`;

const Label = styled.Text`
  font-size: 10px;
  flex: 1;
`;

const IconWrapper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const TabBar: React.FC<BottomTabBarProps> = (props) => {
  const activeTintColor = theme.color.greyDarkest;
  const inActiveTintColor = theme.color.greyDark;
  const { cartStore } = useRootStore();
  const onTabPress = (routeName: string) => () => {
    props.navigation.navigate(routeName);
  };
  return (
    <>
      <CartBar routes={props.state.routes} />
      <TabBarContainer>
        {props.state.routes.map((route, index) => {
          const icon = Icons[route.name];
          const color =
            props.state.index === index ? activeTintColor : inActiveTintColor;
          return (
            <TabBarItems>
              <TouchableOpacity onPress={onTabPress(route.name)}>
                <TabBarItem>
                  <IconWrapper>
                    <FeatherIcon name={icon} color={color} size={25} />
                    {route.name === 'Cart' && cartStore.CartNotEmpty() && (
                      <BadgeContainer>
                        <BadgeText>{cartStore.cartLength()}</BadgeText>
                      </BadgeContainer>
                    )}
                  </IconWrapper>
                  <Label>{route.name}</Label>
                </TabBarItem>
              </TouchableOpacity>
            </TabBarItems>
          );
        })}
      </TabBarContainer>
    </>
  );
};

export default observer(TabBar);
