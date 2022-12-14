import { Center, Text,Icon } from "native-base";
import Logo from '../assets/logo.svg';
import Button from "../Components/Button";
import {Fontisto} from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';


export function Signin(){
  const {siginIn,user}= useAuth();
  
    return(
        <Center flex={1} bgColor="gray.900" p={7}>
          <Logo  width={212} height={40}/>
          <Button  
          title="ENTRAR COM O GOOGLE"
          type='SECONDARY'
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
          mt={9}
          onPress={siginIn}
          />
          <Text color='white' textAlign='center' mt={4}>
            Não utilizamos nenhuma informação além {'\n'}do seu e-mail para a criação da conta.
          </Text>
    
      
      
      
        
      </Center>
    )
}