import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RootNavigator from './components/RootNavigator';
import { useFonts, 
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold 
} from '@expo-google-fonts/oxygen';

const RootApp = () => {
  useFonts({Oxygen_300Light, Oxygen_400Regular, Oxygen_700Bold})
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default registerRootComponent(RootApp);
