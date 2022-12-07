import React from "react";
import {Center, Text, View,Image, Container, Icon, Heading,Input, VStack, Box, Checkbox, Button, Divider, Link} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../componentes/logo'
import InputE from '../../componentes/input'

function CriarConta(props) {
    const [show, setShow] = React.useState(false);
    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} bg="#181A20">
                <VStack w="100%" space={4} alignItems="center" >
                    <Image source={require('./../../../assets/logo.png')} w="100%" h="25%" resizeMode={"contain"} alt="EngeSEP Logo" />
                    <Heading size="md" color="#FFFFFF" fontSize={28} textAlign="center" bold>Criar Conta</Heading>
                    <InputE InputLeftElement={<Icon as={<Ionicons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Nome completo"/>
                    <InputE InputLeftElement={<Icon as={<Ionicons name="mail" />} size={5} ml="2" color="muted.400" />} placeholder="E-mail"/>
                    <InputE InputRightElement={<Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Senha"/>
                    <InputE InputRightElement={<Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Confirmar senha"/>
                    <Button  w="88.5%" h="55px" onPress={()=>{console.warn('Enviar Recuperar Senha')}}>Enviar</Button>
                    <Divider my="2" w="88.5%"/>
                    <Link onPress={() => props.navigation.navigate('Login')} ><Text color="#FFFFFF">Login</Text></Link>
                </VStack>
            </View>)
  }

export default CriarConta
