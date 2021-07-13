import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation, TabNavigation } from './TabNavigation';
import { useRootStore } from '../contexts/RootStoreProvider';
import { observer } from 'mobx-react';
import { createStackNavigator } from '@react-navigation/stack';
import CartModal from '../screens/CartModal';

const RootStack = createStackNavigator();

const MainNavigation: React.FC = () => {
  const { userStore, navigationStore } = useRootStore();
  const navigationRef = useRef();
  const routeNameRef = useRef();
  const getActiveRouteName = (state) => {
    const route = state.routes[state.index];

    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route.state);
    }

    return route.name;
  };
  React.useEffect(() => {
    const state = navigationRef.current.getRootState();
    routeNameRef.current = getActiveRouteName(state);
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state) => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          navigationStore.setCurrentRoute(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}>
      {userStore.isUserLogged() ? <TabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default observer(MainNavigation);
