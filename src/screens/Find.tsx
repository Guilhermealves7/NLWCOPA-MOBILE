import { Heading, VStack , Text} from "native-base";
import {Header} from '../Components/Header';
import Logo from '../assets/logo.svg';
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";


export function Find(){
    return(
        <VStack flex={1} bgColor='gray.900'>
            <Header title="Buscar por código" showBackButton />

            <VStack mt={8} mx={5} alignItems='center'>
                
                 <Heading fontFamily='heading' color='white' fontSize='xl' mb={8}textAlign='center'>
                    Encontrar um bolão através de{'\n'} 
                    seu código único
                 </Heading>

                 <Input
                 mb={2}
                 placeholder='Qual o código do bolão?'
                 />

                 <Button
                 title="BUSCAR BOLÃO"
                 />
                 


            </VStack>
            
             
        </VStack>

    );
}