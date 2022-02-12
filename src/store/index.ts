import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {
  async get(value: string): Promise<string> {
    return (await AsyncStorage.getItem(value)) || '';
  }

  async set(key: string, value: string): Promise<void> {
    return await AsyncStorage.setItem(key, value);
  }
}

export default new Store();
