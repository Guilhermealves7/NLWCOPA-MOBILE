import { VStack, Icon} from "native-base";
import {Octicons} from  '@expo/vector-icons';
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";



export function Pools(){
    return(
        <VStack flex={1} bg='gray.900'>
            <Header title="Meus bolões(lá ele)"/>
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor='gray.600' pb={4} mb={4}>
                <Button 
                title="BUSCAR BOLÃO"
                leftIcon={<Icon as={Octicons} name='search' color='black' size='md'/>}
                />
            </VStack>

        </VStack>
    )
}