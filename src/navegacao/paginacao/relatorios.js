import React, { Component, useState } from 'react';
import { Dimensions,  StyleSheet} from 'react-native';
import {View, Text, Input, VStack, Button, Box, Divider, Circle} from 'native-base';
import {MenuBottom } from '../../componentes/menu_bottom'
import MenuTop from '../../componentes/menu_top'
import {color} from '../../funcoes/styles'
import moment from 'moment'
import * as Localization from 'expo-localization';
import { MyDatePicker } from '../../componentes/date_picker'
import { MiniGauge } from '../../componentes/mini_gauge'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../funcoes/styles'



class MyRelatorios extends Component{
    constructor(props){
        super(props);
        this.state = {
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
                contador: 0,
                startDate: new Date(),
        };
    }

    layout = () => {
                     console.log('---------------')
                     console.log('width geral: ' + this.state.size.widthDevice)
                     console.log('height geral: '+ this.state.size.heightDevice)
    }
    handleClick = () =>  !this.state.show;
    
    handleChange = (startDate) => {
        this.setState({
          startDate,
        });
      };
    
    render(){
        return (<View style={styles.container} >  
                    <Box w='100%' h='15.3%' bg={color['backcolor']} justifyContent='center' alignItems='center'>
                        <MenuTop {...this.props}/>
                    </Box>
                    <Box w='100%' h='84.7%'  justifyContent='flex-start'  alignItems='center'>
                        <Box w="89%" h="60%" display='flex' flexDirection='column' alignItems="flex-start" justifyContent="center"  bg={color['backcolor']}>
                            <Box w="100%" h="40%" display='flex' mb='2' flexDirection='column' borderBottomRadius={30} borderTopRadius={30} bg='amber.100' shadow="5" alignItems="center" justifyContent="center"  >
                                    <LinearGradient colors={['#F6B152', '#F4A533']} style={styles.boxMiniGauge} start={{x:0, y:0}} end={{x:1, y: 1}}>
                                        <MiniGauge estado='color_a' nome='UG-01'  value={100} status='ativa'/>
                                    </LinearGradient>
                            </Box>
                            <Box w="100%" h="40%" display='flex'mt='2' flexDirection='column' borderBottomRadius={30} borderTopRadius={30} bg='amber.100' alignItems="center" justifyContent="center"  >
                                    <LinearGradient colors={['#567AFD','#3E67F9']} style={styles.boxMiniGauge} start={{x:0, y:0}} end={{x:1, y: 1}}>
                                        <MiniGauge estado='color_b' nome='UG-02' value={100} status='ativa'/>
                                    </LinearGradient>
                            </Box>
                        </Box>
                        <Box w="100%" h="40%" alignItems="center" justifyContent="flex-start">
                            <Box w="100%" h="70%" bg={color['backcolor']} alignItems="center" borderTopLeftRadius="25" borderTopRightRadius="25" justifyContent="center"  >
                                <MyDatePicker />
                            </Box>
                            <Box w='100%' h='30%' bg={color['backcolor']} position='absolute' left={0} bottom={0} > 
                                <MenuBottom {...this.props} />
                            </Box>
                        </Box>
                    </Box>
                </View>)}
    }
    
  // Wrap and export
  function Relatorios(props) {
    return <MyRelatorios {...props}/>
  }

  export {Relatorios}