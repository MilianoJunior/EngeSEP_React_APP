import React from "react";
import {Center, View, Text, Container,Image, Icon, Heading, Input,HStack, VStack, Collapse, Alert, IconButton, CloseIcon, Box, Checkbox, Button, Divider, Link} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputE from '../../componentes/input'
import { styles } from '../../funcoes/styles'
import { AuthLogin} from '../../funcoes/autentic'

// size="md" color="#FFFFFF" fontSize={28} textAlign="center" bold
function Login(props) {
    const msgLogin = (msg) =>{
        Promise.all([msg]).then(function (results) {
            const acct = results[0];
            const perm = results[1];
            console.log(acct)
            console.log(perm)
            // if(msg.code != 200){
            //     setLogin(true)
            //     console.log('----------------')
            //     console.log('msg: ', msg)
            //     console.log('----------------')
            //     setMsg(msg.data)  
            // }else{
            //     props.navigation.navigate('Home')
            // }
        });

        
        // console.log('log: ', msg.data)
        // console.log('---------------')
        
    }
    const [msg, setMsg] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [show, setShow] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} bg="#181A20">
                <VStack w="100%" space={4} alignItems="center" >
                    <Image source={require('./../../../assets/logo.png')} w="100%" h="31%" resizeMode={"contain"} alt="EngeSEP Logo" />
                    <Heading style={styles.titulo}>Acesse sua conta</Heading>
                    <Collapse isOpen={login}>
                        <Alert maxW="400" status="error">
                        <VStack space={1} flexShrink={1} w="100%">
                            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                            <HStack flexShrink={1} space={2} alignItems="center">
                                <Alert.Icon />
                                <Text fontSize="md" fontWeight="medium" _dark={{
                                color: "coolGray.800"
                            }}>
                                Desculpe, os dados não conferem !
                                </Text>
                            </HStack>
                            <IconButton variant="unstyled" _focus={{
                            borderWidth: 0
                            }} icon={<CloseIcon size="3" />} _icon={{
                            color: "coolGray.600"
                            }} onPress={() => setLogin(false)} />
                            </HStack>
                            <Box pl="6" _dark={{
                            _text: {
                            color: "coolGray.600"
                            }
                        }}>
                            {msg}
                            </Box>
                        </VStack>
                        </Alert>
                    </Collapse>
                    <InputE 
                        InputLeftElement={<Icon as={<Ionicons name="mail" />} ml="2" color="muted.400" />} 
                        onChangeText={setUser}
                        color='white'
                        size={5}
                        placeholder="E-mail"/>
                    <InputE 
                        type={show ? "text" : "password"} 
                        InputRightElement={<Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} mr="2" color="muted.400" onPress={() => setShow(!show)} />}
                        onChangeText={setPassword}
                        color='white' 
                        size={5} 
                        placeholder="Password"/>
                    <Checkbox value="test" accessibilityLabel="This is a dummy checkbox">
                        <Text style={styles.linkText}>Lembrar</Text>
                    </Checkbox>
                    <Button  w="88.5%" h="55px" onPress={()=> AuthLogin(props.navigation, setLogin, setMsg,user,password)}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </Button>
                    <Divider my="2" w="88.5%"/>
                    <Link onPress={() => props.navigation.navigate('RecuperarSenha')}>
                        <Text style={styles.linkText}>Recuperar Senha</Text>
                    </Link>
                </VStack>
            </View>)
  }
export default Login

