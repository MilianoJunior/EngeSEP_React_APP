import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {View, Text, VStack, Box, Icon, Button} from 'native-base';
import {MenuBottom } from '../../componentes/menu_bottom'
import MenuTop from '../../componentes/menu_top'
import {Charts} from '../../componentes/chart'
import InputE from '../../componentes/input'
import {color} from '../../funcoes/styles'
import Texto from '../../componentes/text'
import Describe from "../../componentes/describe"
import {BoxInfo} from '../../componentes/box_info'
import {ChooseMonth} from '../../componentes/choose'
import { MaterialIcons } from '@expo/vector-icons';


class MyPerfil extends Component{

    state = {
              var:this.props.var,
              layout:{
                       'widthMenu':.1,
                       'heightMenu':.1,
                       'widthBody':.8,
                       'heightBody':.8,
                       'widthFooter':.1,
                       'heightFooter':.1
                     },
              size:{
                     'widthDevice':(Dimensions.get('window').width).toFixed(2),
                     'heightDevice':(Dimensions.get('window').height).toFixed(2),
                   },
    }

    layout = () => {
                     console.log('---------------')
                     console.log('width geral: ' + this.state.size.widthDevice)
                     console.log('height geral: '+ this.state.size.heightDevice)
    }
    getUsuario= () => {
        const usuario = {
            'nome': 'Gelson Fernandes de Oliveira',
            'telefone': '(49) 99999-9999',
            'nascimento': '01/01/1986',
            'email': 'gelsonoliveira@engesep.com.br',
            'senha': '123456',
        }
        return usuario
    }

    render(){
        return (<View display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Box w='100%' h='17.3%' bg={color['backcolor']} justifyContent='center' alignItems='center'>
                        <MenuTop {...this.props}/>
                    </Box>
                    <Box w='100%' h='82.7%' bg='#61646B' justifyContent='flex-start'  alignItems='center'>
                        <Box w="100%" h="83.6%" alignItems="center" justifyContent="flex-start" bg={color['backcolor']}>
                            <VStack space={3} justifyContent="center">
                                <InputE InputLeftElement={<Icon as={<MaterialIcons name="person" />} 
                                        size={5} ml="2" color="muted.400" />} placeholder={ this.getUsuario().nome}/>
                                <InputE InputLeftElement={<Icon as={<MaterialIcons name="local-phone" />} 
                                        size={5} ml="2" color="muted.400" />} placeholder={ this.getUsuario().telefone}/>
                                <InputE InputLeftElement={<Icon as={<MaterialIcons name="today" />} 
                                        size={5} ml="2" color="muted.400" />} placeholder={ this.getUsuario().nascimento}/>
                                <InputE InputLeftElement={<Icon as={<MaterialIcons name="mail" />} 
                                        size={5} ml="2" color="muted.400" />} placeholder={ this.getUsuario().email}/>
                                <InputE InputLeftElement={<Icon as={<MaterialIcons name="verified-user" />} 
                                        size={5} ml="2" color="muted.400" />} placeholder={ this.getUsuario().senha}/>
                                
                            </VStack>
                            <Button  w="90%" h="55px" m='4' onPress={()=> console.log('Atulizar Dados')}>Atualizar</Button>
                        </Box>
                        <Box w="100%" h="16.4%" alignItems="center" justifyContent="flex-start" bg={color['backcolor']}>
                            <Box w='100%' h='100%' position='absolute' left={0} bottom={0} >
                                <MenuBottom {...this.props} />
                            </Box>
                        </Box>
                    </Box>
                </View>)}
    }
  // Wrap and export
  function Perfil(props) {
    return <MyPerfil {...props}/>
  }

  export {Perfil}