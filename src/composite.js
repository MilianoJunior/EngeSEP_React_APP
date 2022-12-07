import * as React from 'react';
import { View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, extendTheme, Text } from 'native-base';
import {ItemsProvider} from './navegacao/contexState';



import Login from './navegacao/autenticacao/login'
import RecuperarSenha from './navegacao/autenticacao/recuperar_senha'
import CriarConta from './navegacao/autenticacao/criar_conta'

import {Home} from './navegacao/paginacao/home'
import {Graficos} from './navegacao/paginacao/graficos'
import {Relatorios} from './navegacao/paginacao/relatorios'
import {Historico} from './navegacao/paginacao/historico'
import {Perfil} from './navegacao/paginacao/perfil'

const themeEngeSEP = {
  useSystemColorMode: true,
  initialColorMode: 'light',
  fonts: {
          heading: 'Work Sans',
          body: 'Work Sans',
          mono: 'Work Sans',
  }}

const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};


const customTheme = extendTheme({ themeEngeSEP });

const Stack = createNativeStackNavigator()

export default function App() {
  const estado = 0
  return (
    <NavigationContainer>
        <NativeBaseProvider config={config} theme={customTheme}>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login"  component={Login} />
              <Stack.Screen name="RecuperarSenha"  component={RecuperarSenha}/>
              <Stack.Screen name="CriarConta"  component={CriarConta}/>
              <Stack.Screen name="Home"  component={Home} params={{estado}}/>
              <Stack.Screen name="Graficos"  component={Graficos} estado={1}/>
              <Stack.Screen name="Relatorios"  component={Relatorios} estado={2}/>
              <Stack.Screen name="Historico"  component={Historico} estado={3}/>
              <Stack.Screen name="Perfil"  component={Perfil} estado={4}/>
            </Stack.Navigator>
        </NativeBaseProvider>
    </NavigationContainer>
  );
}


// import * as React from 'react';
// import { Text, StatusBar, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// // import SafeAreaView from 'react-native-safe-area-view';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useIsFocused } from '@react-navigation/native';

// function FocusAwareStatusBar(props) {
//   const isFocused = useIsFocused();

//   return isFocused ? <StatusBar {...props} /> : null;
// }

// function Screen1({ navigation }) {
//   return (
//     <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
//       {/* <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
//       <Text style={{ color: '#fff' }}>Light Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen2')}
//         color="#fff"
//       />
//     </SafeAreaView>
//   );
// }

// function Screen2({ navigation }) {
//   return (
//     <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
//       <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
//       <Text>Dark Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen1')}
//       />
//     </SafeAreaView>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Screen1" component={Screen1} />
//           <Stack.Screen name="Screen2" component={Screen2} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });







/*
<Tab.Navigator>
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <NativeBaseProvider>

        </NativeBaseProvider>
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const FirstRoute = () => <Center flex={1} my="4">
    This is Tab 1
  </Center>;

const SecondRoute = () => <Center flex={1} my="4">
    This is Tab 2
  </Center>;

const ThirdRoute = () => <Center flex={1} my="4">
    This is Tab 3
  </Center>;

const FourthRoute = () => <Center flex={1} my="4">
    This is Tab 4{' '}
  </Center>;

const initialLayout = {
  width: Dimensions.get('window').width
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute
});

function Example() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{
    key: 'first',
    title: 'Tab 1'
  }, {
    key: 'second',
    title: 'Tab 2'
  }, {
    key: 'third',
    title: 'Tab 3'
  }, {
    key: 'fourth',
    title: 'Tab 4'
  }]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        });
        const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
        const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
        return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
              <Pressable onPress={() => {
            console.log(i);
            setIndex(i);
          }}>
                <Animated.Text style={{
              color
            }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>;
      })}
      </Box>;
  };

  return <TabView navigationState={{
    index,
    routes
  }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
    marginTop: StatusBar.currentHeight
  }} />;
}
*/