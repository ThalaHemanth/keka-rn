import React from 'react';
import styled from 'styled-components/native';
import { responsiveHeight, responsiveWidth } from '../constants/aspectRatio';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useRootStore } from '../contexts/RootStoreProvider';

const Wrapper = styled.View`
  height: ${responsiveHeight('50%')};
  width: ${responsiveWidth('100%')};
  margin-top: ${responsiveHeight('10%')};
  padding: 20px;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
  margin-top: 10px;
`;

const ButtonWrapperText = styled.Text`
  margin: 5px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const SignupScreen: React.FC = () => {
  const { userStore } = useRootStore();
  const { navigate } = useNavigation();
  console.log(userStore.isUserLogged());
  return (
    <Wrapper>
      <Title> Register </Title>
      <TextInput
        style={{ backgroundColor: 'white', marginTop: 10 }}
        mode="outlined"
        label="Your Email"
        selectionColor="orange"
        underlineColor="orange"
      />
      <TextInput
        style={{ backgroundColor: 'white', marginTop: 10 }}
        mode="outlined"
        label="Set Your Password"
        selectionColor="orange"
        secureTextEntry
        underlineColor="orange"
      />
      <Button
        onPress={() => userStore.signInUser()}
        style={{ marginTop: 10 }}
        uppercase={false}
        mode="contained">
        Register
      </Button>
      <ButtonWrapper>
        <ButtonWrapperText>Already Registered?</ButtonWrapperText>
        <Button onPress={() => navigate('Login')} uppercase={false}>
          Login
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SignupScreen;
