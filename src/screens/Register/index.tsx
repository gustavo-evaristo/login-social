import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register: FC = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView>
      <Text onPress={goBack}>Ola Register</Text>
    </SafeAreaView>
  );
};

export default Register;
