
import { StyleSheet,} from 'react-native';
import { NativeBaseProvider, StatusBar} from 'native-base';
import {THEME} from './src/styles/themes';
import { Loading } from './src/Components/Loading';
import { Signin } from './src/screens/Signin';
import { New } from './src/screens/New';
import {Pools} from './src/screens/Pools'
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { AuthContextProvider } from './src/Contexts/AuthContext';


export default function App() {
 const[fontsLoaded]= useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      
      />
   {  fontsLoaded ? <Pools/>: <Loading></Loading>  }
   </AuthContextProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
