
import { StyleSheet,} from 'react-native';
import { NativeBaseProvider, StatusBar} from 'native-base';
import {THEME} from './src/styles/themes';
import { Loading } from './src/Components/Loading';
import { Signin } from './src/screens/Signin';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';


export default function App() {
 const[fontsLoaded]= useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      
      />
   {  fontsLoaded ? <Signin></Signin>: <Loading></Loading>  }
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
