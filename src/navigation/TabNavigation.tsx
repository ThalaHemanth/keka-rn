import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { theme } from '../constants/theme';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';
import TabBar from '../components/TabBar';
import CartModal from '../screens/CartModal';

type HomeStackParams = {
  Home: undefined;
};

type AuthStackParam = {
  Login: undefined;
  Signup: undefined;
};

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator<HomeStackParams>();

const AuthStack = createStackNavigator<AuthStackParam>();

const AuthNavigation: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

const HomeNavigation: React.FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarOptions={{
        activeTintColor: theme.color.greyDarkest,
        inactiveTintColor: theme.color.greyDark,
        showLabel: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="home" size={24} color={color} />
          ),
        }}
        name="Home"
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="list" size={24} color={color} />
          ),
        }}
        name="Bookings"
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="shopping-cart" size={24} color={color} />
          ),
        }}
        name="Cart"
        component={CartModal}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export { AuthNavigation, TabNavigation };
