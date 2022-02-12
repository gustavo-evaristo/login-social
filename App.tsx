import React, {FC} from 'react';
import Routes from './src/routes';
import ToastManager from 'toastify-react-native';

const App: FC = () => (
  <>
    <ToastManager />
    <Routes />
  </>
);

export default App;
