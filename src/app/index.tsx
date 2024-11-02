import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './Navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
