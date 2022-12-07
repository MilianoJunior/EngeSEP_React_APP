import React from "react";
import {Center, View, Text,Icon, Container,Image, Heading,Input,Box, Select, HStack} from 'native-base';
import {color} from '../funcoes/styles'
import { help_native, dir, explore, flexbox} from "dev-myfunctions"
import Ionicons from '@expo/vector-icons/Ionicons';


function BoxInfo(props) {
  return (<Box w="50%" h="100%" display='flex' flexDirection='column' alignItems="center" justifyContent="center" bg={color['backcolor']}>
            <Box w="50%" h="20%" display='flex' flexDirection='row' alignItems="flex-end" m='1'justifyContent="center" >
                <Ionicons name="stats-chart" size={24} color={color['UG-0' + props.id]['primary.7']} onPress={() => console.log('nova tela')}/>
                <Text  fontWeight='bold' fontSize={14} fontFamily='body' color='#fff'>Janeiro {props.id}</Text>
            </Box>
            <Box w="50%" h="20%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" >
                <Text  fontWeight='bold' fontSize={14} fontFamily='body' color ={color['UG-0' + props.id]['primary.7']} >UG-0{props.id}</Text>
            </Box>
            <Box w="50%" h="30%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" >
                <Text  fontWeight='bold' fontSize={24} fontFamily='body' color ={color['UG-0' + props.id]['primary']} >99 MW</Text>
            </Box>
          </Box>);
  }

export {BoxInfo}