import React from "react";
import {View, VStack, Box, Heading, Text} from 'native-base';
import MenuTop from '../../componentes/menu_top'
import { help_native, dir, explore, flexbox} from "dev-myfunctions"
import { Gauge } from '../../componentes/gauge'
import {MenuBottom } from '../../componentes/menu_bottom'
import Swiper from 'react-native-swiper'
import {color, styles} from '../../funcoes/styles'

function Home(props) {
    return (<View style={styles.container}>
                <Box w="100%" h="15.3%" style={styles.backgroundColor} display='flex' flexDirection='row' alignItems="center" justifyContent="center">
                    <MenuTop {...props}/>
                </Box>
                <Box w="100%" h="84.7%" display="flex" flexDirection="column" style={styles.backgroundColor}>
                  <Box w="100%" h="20%" alignItems="center" px="2" justifyContent="flex-start" style={styles.backgroundColor}>
                    <Heading style={styles.titulo}>CGH FAE</Heading>
                    <VStack w="89%" alignItems="flex-start"  space={1} >
                        <Text style={styles.descricaoText} >Localização: Campos Novos, SC.</Text>
                        <Text style={styles.descricaoText} >Potência Instalada: 1,8 MW.</Text>
                    </VStack>
                  </Box>
                  <Box w="100%" h="80%"  alignItems="center"  justifyContent="center" bg={color['backcolor']}>
                    <Box w="100%" h="85%" alignItems="center"  style={styles.backgroundColor}>
                      <Swiper  dotColor='#fff' activeDotColor='#000' showsButtons={false}>
                        <Box w="100%" h="100%" alignItems="center" justifyContent='center' style={styles.backgroundColor}>
                          <Gauge style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }} estado='color_a' nome='UG-01' value={100} status='ativa' />
                        </Box>
                        <Box w="100%" h="100%" alignItems="center" justifyContent='center'  bg="#181A20">
                          <Gauge style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }} estado='color_b' nome='UG-02' value={85} status='ativa' />
                        </Box>
                      </Swiper>
                    </Box>
                    <Box w="100%" h="15%" alignItems="center" position='absolute' left={0} bottom={0}>
                      <MenuBottom {...props} />
                    </Box>
                  </Box>
                </Box>
            </View>)
  }
export {Home}