import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { Button, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

import Composite from './src/composite'

export default function App() {
  return (
      <SafeAreaView style={{flex: 1 , backgroundColor:"#181A20"}}>
        <StatusBar
                animated={true}
                backgroundColor="#181A20"
                barStyle={'light-content'}
                showHideTransition={'fade'}
                hidden={false} />
          <Composite />
      </SafeAreaView>
  );
}

