import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { enableScreens } from 'react-native-screens';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/constants/theme';
import MainNavigation from './src/navigation/MainNavigation';
import { RootStoreProvider } from './src/contexts/RootStoreProvider';
import { rootStore } from './src/stores/RootStore';

enableScreens();

const AppContainer = styled.View`
  flex: 1;
`;

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <RootStoreProvider rootStore={rootStore}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MainNavigation />
        </AppContainer>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
