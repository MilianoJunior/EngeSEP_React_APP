import React from "react";
import {Circle, Text, Box} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../funcoes/styles'

export function Gauge(props){
    const estilo = {
        color_a: ["#F3AF4F","#F1CA92","#F3F4F5","#F7F7F7","#000000","#FC961F","#000000","#F4BA68"],
        color_b: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7"],
    }
    return (
            <Box w="100%" h="100%" display='flex' alignItems="center" justifyContent="flex-start" borderTopLeftRadius="25" borderTopRightRadius="25" bg='#181A20'>
                <Box w="100%" h="8%" alignItems="flex-end" justifyContent="center"  borderTopLeftRadius="25" borderTopRightRadius="25" pr='4' bg={estilo[props.estado][5]}>
                    <Ionicons name="arrow-forward-circle-outline"  size={24} color="white" onPress={() => console.log('nova tela')}/>
                </Box>
                <Box w="100%" h="70%" alignItems="center" justifyContent="center" bg={estilo[props.estado][5]}>
                    <Circle size='280px'  bg={estilo[props.estado][0]} shadow={2}>
                        <Circle size="245px" bg={estilo[props.estado][1]}>
                            <Circle size="205px" bg={estilo[props.estado][2]}>
                                <Circle size="173px" bg={estilo[props.estado][3]} shadow={1}>
                                    <Text style={styles.subtitulo} color={estilo[props.estado][4]}>{props.nome}</Text>
                                    <Text style={styles.subtitulo} color={estilo[props.estado][5]}>{props.value} MW</Text>
                                    <Text fontSize={14} fontWeight="bold" color={estilo[props.estado][6]}>status: {props.status}</Text>
                                </Circle>
                            </Circle>
                        </Circle>
                    </Circle>
                </Box>
                <Box w="100%" h="22%" alignItems="center" justifyContent="flex-start" bg={estilo[props.estado][5]}>
                    <Circle w="150px" h="40px" bg={estilo[props.estado][7]} shadow={2}>
                        <Text fontSize={12} color="#7A7272">última atualização</Text>
                        <Text fontSize={12} color="#4F4E4E">26/06/2022 20:00</Text>
                    </Circle>
                </Box>
            </Box>
        )
}