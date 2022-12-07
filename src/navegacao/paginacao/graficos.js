import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {View, Text, VStack, Box} from 'native-base';
import {MenuBottom } from '../../componentes/menu_bottom'
import MenuTop from '../../componentes/menu_top'
import {Charts} from '../../componentes/chart'
import InputE from '../../componentes/input'
import Texto from '../../componentes/text'
import Describe from "../../componentes/describe"
import {BoxInfo} from '../../componentes/box_info'
import {ChooseMonth} from '../../componentes/choose'
import {color, styles} from '../../funcoes/styles'



class MyGraficos extends Component{

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

    render(){
        return (<View style={styles.container}>
                    <Box w='100%' h='15.3%' style={styles.backgroundColor} justifyContent='center' alignItems='center'>
                        <MenuTop {...this.props}/>
                    </Box>
                    <Box w='100%' h='84.7%' style={styles.backgroundColor} justifyContent='flex-start'  alignItems='center'>
                        <Box w="89%" h="20%" style={styles.backgroundColor} display='flex' flexDirection='row' px="2" alignItems="center" justifyContent="center" >
                            <BoxInfo cor='#214494' id={1} ></BoxInfo>
                            <BoxInfo cor='#3F2194' id={2} ></BoxInfo>
                        </Box>
                        <Box w="100%" h="80%" style={styles.backgroundColor}>
                            <Box w="100%" h="80%" style={styles.backgroundColor} mt={7}>
                                <Charts {...this.props} />
                            </Box>
                            <Box w="100%" h="15%" alignItems="center" position='absolute' bg={color['chart']['backcolor']} left={0} bottom={0}>
                                <MenuBottom {...this.props} />
                            </Box>
                            
                        </Box>
                        {/* <Box w="100%" h="20%" display='flex' flexDirection='column' alignItems="center" justifyContent="flex-start" bg='amber.500'>
                            <Box w="100%" h="100%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" bg='amber.700'>
                                <BoxInfo cor='#214494' id={1} ></BoxInfo>
                                <BoxInfo cor='#3F2194' id={2} ></BoxInfo>
                            </Box>
                        </Box>
                        <Box w="100%" h="80%" alignItems="center" justifyContent="flex-start" bg='amber.800'>
                            <Box w="100%" h="83.6%" alignItems="center" borderTopLeftRadius="25" borderTopRightRadius="25" justifyContent="center" bg={color['chart']['backcolor']} >
                                <Charts {...this.props} />
                            </Box>
                            <Box w='100%' h='16.4%' bg={color['chart']['backcolor']} position='absolute' left={0} bottom={0} >
                                
                            </Box>
                        </Box> */}
                    </Box>
                </View>)}
    }
  
  // Wrap and export
  function Graficos(props) {
    return <MyGraficos {...props}/>
  }

  export {Graficos}