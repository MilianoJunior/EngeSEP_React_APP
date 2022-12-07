import React from "react";
import {Center, View, Text,Icon, Container,Image, Heading,Input, VStack, Box, Checkbox, Button, Divider, Link} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../componentes/logo'
import InputE from '../../componentes/input'
import { styles } from '../../funcoes/styles'

function RecuperarSenha(props) {
    
    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} bg="#181A20">
                <VStack w="100%" space={4} alignItems="center" >
                    <Image source={require('./../../../assets/logo.png')} w="100%" h="31%" resizeMode={"contain"} alt="EngeSEP Logo" />
                    <Heading style={styles.titulo} >Recuperar Senha</Heading>
                    <InputE InputLeftElement={<Icon as={<Ionicons name="mail" />} size={5} ml="2" color="muted.400" />} placeholder="E-mail" />
                    <Button  w="88.5%" h="55px" onPress={()=>{console.warn('Enviar Recuperar Senha')}}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </Button>
                    <Divider my="2" w="88.5%"/>
                    <Link onPress={() => props.navigation.navigate('Login')} >
                        <Text style={styles.linkText}>Login</Text>
                    </Link>
                </VStack>
            </View>)
  }

export default RecuperarSenha
