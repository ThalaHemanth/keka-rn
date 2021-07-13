import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRootStore } from '../contexts/RootStoreProvider';
import { observer } from 'mobx-react';

const CartContainer = styled.View``;
const Sample = styled.Text``;

const CartModal: React.FC = () => {
  const { goBack, isFocused } = useNavigation();
  return (
    <CartContainer>
      <Sample>Modal</Sample>
      <Button onPress={() => goBack()}>Dismiss</Button>
    </CartContainer>
  );
};

export default observer(CartModal);
