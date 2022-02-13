import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Store from '../../store';

import {Text} from './styles';

const Home: React.FC = () => {
  const [name, setName] = useState('');

  const fetchUser = async () => {
    const username = await Store.get('username');

    setName(username);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      <Text>Ola {name}</Text>
    </SafeAreaView>
  );
};

export default Home;
