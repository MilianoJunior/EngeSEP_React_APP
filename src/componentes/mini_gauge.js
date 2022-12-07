import React from "react";
import {Center, Menu, Circle, View, HStack, Text, Container,Image,Flex, Icon, Heading,Input, VStack, Box, Checkbox, Divider, Link} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function MiniGauge(props){
    const estilo = {
        color_a: ["#F4A533","#F4BA68","#F1CA92","#F7F7F7","#000000","#FC961F","#000000","#F4BA68","#F6B152","#F4A533"],
        color_b: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7","#567AFD","#3E67F9"],
    }
    const largura = Dimensions.get('window').width.toFixed(2)
    const altura = Dimensions.get('window').height.toFixed(2)
    return (
        <Box w="100%" h="100%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" >
            <Box w="50%" h="100%" alignItems="center" justifyContent="center">
                <Circle size={altura*.23*.7} bg={estilo[props.estado][0]} shadow="5">
                    <Circle size={altura*.23*.6} bg={estilo[props.estado][1]}>
                        <Circle size={altura*.23*.5} bg={estilo[props.estado][2]}>
                            <Circle size={altura*.23*.4} bg={estilo[props.estado][3]}>
                                <Text fontSize={10} fontWeight="bold" color={estilo[props.estado][4]}>{props.nome}</Text>
                                <Text fontSize={12} fontWeight="bold" color={estilo[props.estado][5]}>{props.value} MW</Text>
                                <Text fontSize={8} fontWeight="bold" color={estilo[props.estado][6]}>status: {props.status}</Text>
                            </Circle>
                        </Circle>
                    </Circle>
                </Circle>
            </Box>
            <Box w="50%" h="100%" alignItems="flex-start" justifyContent="center">
                <Text fontSize={16} color="#171A20" fontWeight='bold' fontFamily='body' mb='1'>Status: Ligada</Text>
                <Text fontSize={13} color="#171A20" fontWeight='normal' fontFamily='body'>Nível de água: 8 m</Text>
                <Text fontSize={13} color="#171A20" fontWeight='normal' fontFamily='body'>Média diária : 77 W/h</Text>
                <Box w='90%' h='15%' shadow={1} mt='4' bg={estilo[props.estado][1]} rounded={10} alignItems="center" justifyContent="center">
                    <Text fontSize={8} color="#171A20" fontWeight='normal'>Atualizado em 19/09/2022 13:00</Text>
                </Box>
            </Box>
        </Box>
        )
}