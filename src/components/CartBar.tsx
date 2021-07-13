import React from 'react';
import styled from 'styled-components/native';

import { responsiveHeight } from '../constants/aspectRatio';
import { useRootStore } from '../contexts/RootStoreProvider';
import { observer } from 'mobx-react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const CartBarContainer = styled.View`
  height: ${responsiveHeight('9%')};
  width: 100%;
  border-top-width: 0.2px;
  flex-direction: row;
  align-items: center;
`;

const CartItemInfoContainer = styled.View`
  height: 100%;
  width: 30%;
  margin-left: 5%;
  background-color: orange;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;

const CartItemInfo = styled.Text`
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
`;

const CartTotal = styled.Text`
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
`;

const CartBar = (props) => {
  const { cartStore, navigationStore } = useRootStore();
  const { CartNotEmpty } = cartStore;
  if (navigationStore.getCurrentRoute() === 'Cart') {
    return null;
  }
  return CartNotEmpty() ? (
    <CartBarContainer>
      <CartItemInfoContainer>
        <CartItemInfo>1 Item</CartItemInfo>
        <CartTotal>₹233</CartTotal>
      </CartItemInfoContainer>
      <Button style={{ position: 'absolute', right: 10 }}>View Cart</Button>
    </CartBarContainer>
  ) : null;
};

export default observer(CartBar);
