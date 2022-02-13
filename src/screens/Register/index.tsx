import React, {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import GoogleIcon from '../../assets/images/google-icon.png';
import FacebookIcon from '../../assets/images/facebook-icon.png';
import Store from '../../store';
import {isEmpty} from 'lodash';
import {Toast} from 'toastify-react-native';

import {
  Container,
  Title,
  Description,
  ContentText,
  Button,
  TextButton,
  ContentInput,
  InputUsername,
  InputPassword,
  TextSocial,
  TextRegister,
  TextRegisterSpan,
  ContentRegister,
  Image,
  ContentIcons,
} from './styles';

const Register: FC = () => {
  const [username, setusername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigation = useNavigation<any>();

  const toSign = () => navigation.navigate('sign');

  const register = async () => {
    if (
      !isEmpty(username) &&
      !isEmpty(password) &&
      password === confirmPassword
    ) {
      await Store.set('username', username);
      await Store.set('password', password);

      return navigation.navigate('home');
    }

    return Toast.error('Invalid Fields');
  };

  return (
    <Container>
      <ContentText>
        <Title>Create Account!</Title>
        <Description>
          Welcome, create your account and discover our amazing jobs now!
        </Description>
      </ContentText>
      <ContentInput>
        <InputUsername
          placeholder="Enter username"
          onChangeText={setusername}
          value={username}
        />

        <InputPassword
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          onChn
        />

        <InputPassword
          placeholder="Confirm password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />

        <Button onPress={register}>
          <TextButton>Register</TextButton>
        </Button>

        <TextSocial>or register with</TextSocial>
        <ContentIcons>
          <Image source={GoogleIcon} />
          <Image source={FacebookIcon} />
        </ContentIcons>
      </ContentInput>

      <ContentRegister>
        <TextRegister>already have an account? </TextRegister>
        <TextRegisterSpan onPress={toSign}>Login now</TextRegisterSpan>
      </ContentRegister>
    </Container>
  );
};

export default Register;
