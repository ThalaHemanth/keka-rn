import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { useRootStore } from '../contexts/RootStoreProvider';
import useStatusBar from '../hooks/useStatusBar';
import SwiperComponent from '../components/SwiperComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import CategoryHeader from '../components/CategoryHeader';
import IconCategories from '../components/IconCategories';
import ServicesGrid from '../components/ServicesGrid';
import { observer } from 'mobx-react';

const Container = styled.View`
  flex: 1;
`;
const ScrollView = styled.ScrollView``;

const HomeScreen: React.FC = () => {
  const { userStore, cartStore } = useRootStore();
  useStatusBar('light-content', 'black');
  return (
    <Container>
      <ScrollView>
        <SearchBarComponent />
        <SwiperComponent />
        <CategoryHeader title="Our Services Includes" titleOnly={true} />
        <IconCategories />
        <ServicesGrid />
        <Button
          mode="contained"
          style={{ marginBottom: 30 }}
          onPress={() =>
            cartStore.addToCart({ id: 'rand', name: 'cleansing' })
          }>
          Add to Cart
        </Button>
        <Button
          style={{ marginBottom: 30 }}
          mode="contained"
          onPress={() => cartStore.clearCart()}>
          Clear Cart
        </Button>
        <Button mode="contained" onPress={() => userStore.signOut()}>
          Logout
        </Button>
      </ScrollView>
    </Container>
  );
};

export default observer(HomeScreen);
