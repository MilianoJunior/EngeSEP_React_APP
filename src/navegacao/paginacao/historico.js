import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {View, Text, VStack, HStack, Box, ScrollView, Divider, Center} from 'native-base';
import {MenuBottom } from '../../componentes/menu_bottom'
import MenuTop from '../../componentes/menu_top'
import {Charts} from '../../componentes/chart'
import InputE from '../../componentes/input'
import {color} from '../../funcoes/styles'
import Texto from '../../componentes/text'
import Describe from "../../componentes/describe"
import {BoxInfo} from '../../componentes/box_info'
import {ChooseMonth} from '../../componentes/choose'
import {Lista} from '../../componentes/lista'


class MyHistorico extends Component{

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
              history_data:{
                            1:["06-16-2022 21:56:29", 400.51, 765.89],
                            2:["06-16-2022 21:56:29", 400.51, 765.89],
                            3:["06-16-2022 21:56:29", 400.51, 765.89],
                            4:["06-16-2022 21:56:29", 400.51, 765.89],
                            5:["06-16-2022 21:56:29", 400.51, 765.89],
                            6:["06-16-2022 21:56:29", 400.51, 765.89],
                            7:["06-16-2022 21:56:29", 400.51, 765.89],
                            8:["06-16-2022 21:56:29", 400.51, 765.89],
                            9:["06-16-2022 21:56:29", 400.51, 765.89],
                            10:["06-16-2022 21:56:29", 400.51, 765.89],
                            11:["06-16-2022 21:56:29", 400.51, 765.89],
                            12:["06-16-2022 21:56:29", 400.51, 765.89],
                            13:["06-16-2022 21:56:29", 400.51, 765.89],
                            14:["06-16-2022 21:56:29", 400.51, 765.89],
                            15:["06-16-2022 21:56:29", 400.51, 765.89],
                            16:["06-16-2022 21:56:29", 400.51, 765.89],
                            17:["06-16-2022 21:56:29", 400.51, 765.89],
                            18:["06-16-2022 21:56:29", 400.51, 765.89],
                            19:["06-16-2022 21:56:29", 400.51, 765.89],

              }
    }

    layout = () => {
                     console.log('---------------')
                     console.log('width geral: ' + this.state.size.widthDevice)
                     console.log('height geral: '+ this.state.size.heightDevice)
    }

    render(){
        const historico_dados = {}
        return (<View display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Box w='100%' h='17.3%' bg={color['backcolor']} justifyContent='center' alignItems='center'>
                        <MenuTop {...this.props}/>
                    </Box>
                    <Box w='100%' h='82.7%' bg='#61646B' justifyContent='flex-start'  alignItems='center'>
                        <Box w="100%" h="83.6%" 
                            display='flex' flexDirection='column' 
                            alignItems="center" justifyContent="flex-start" bg={color['backcolor']}>
                                    <Lista {...this} />
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
  
  // Wrap and export
  function Historico(props) {
    return <MyHistorico {...props}/>
  }

  export {Historico}