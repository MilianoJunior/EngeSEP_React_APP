import React from "react";
import { StyleSheet} from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup, VictoryLabel, VictoryAxis,  } from "victory-native";
import {Center, Menu, Circle, View, HStack, Text, Container,Image, Icon, Heading,Input, VStack, Box, Checkbox, Divider, Link} from 'native-base';
import {color} from '../funcoes/styles'
import { Dimensions } from 'react-native';

class Charts extends React.Component {
  gerar_cor = () => { 
    return '#' + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');
  }
  trans_medids = (objetos) =>{
    Object.keys(objetos).forEach(element => {
      if (element instanceof Object){
        console.log(Object.keys(element))
        console.log(this.gerar_cor())
      }else{
        console.log('Não é objeto: ' + element)
        console.log(this.gerar_cor())
        console.log('-------------')
      }
      
    });
  }
  render() {
    console.log(color['chart']['backcolor'])
    return (
      <View style={styles.container} backgroundColor={color['chart']['backcolor']}>
        <Box w='80%' h='20%'  pt="4" bg={color['chart']['backcolor']}>
          <Box w='100%' h='60%' bg={color['chart']['backcolor']} display='flex' flexDirection='row' justifyContent='center' alignItems="flex-end" >
            <Text fontSize={24} fontWeight='bold' fontFamily='body' color='#fff' >Geração de energia</Text>
          </Box>
          <Box w='100%' h='40%' display='flex' flexDirection='row' justifyContent='center' alignItems="center" bg={color['chart']['backcolor']}>
            <Circle size="10px" bg={color['UG-01']['primary']} m='2'></Circle>
            <Text fontSize={12} fontFamily='body' color={color['chart']['text']}>UG-01(MW)</Text>
            <Circle size="10px" bg={color['UG-02']['primary']} m='2'></Circle>
            <Text fontSize={12} fontFamily='body' color={color['chart']['text']}>UG-02(MW)</Text>
          </Box>
        </Box>
        <Box w='100%' h='80%' display='flex' flexDirection='row' justifyContent='center' alignItems="center"  bg={color['chart']['backcolor']}>
          <VictoryChart 
                        height={350}
                        style={{
                          background: { fill: color['chart']['backcolor'] },
                        }}
                        animate={{
                          duration: 2000,
                          onLoad: { duration: 1000 }
                        }}>
            <VictoryGroup offset={12}
              style={{
                data: {
                  fillOpacity: 0.9,
                },
                
              }}
            >
              <VictoryBar
                data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 },{ x: 4, y: 4 },{ x: 5, y: 7 },{ x: 6, y: 9 }]}
                categories={{ x: ["Jan", "Fev", "Mar","Abril","Maio","Junho"] }}
                cornerRadius={{ topLeft: 5 , topRight: 5}}
                style={{
                  data: {
                    fill: color['UG-01']['primary'],
                    width: 10
                  }
                }}
              />
              <VictoryBar
                data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 },{ x: 4, y: 7 },{ x: 5, y: 4 },{ x: 6, y: 2 }]}
                categories={{ x: ["Jan", "Fev", "Mar","Abril","Maio","Junho"] }}
                cornerRadius={{ topLeft: 5 , topRight: 5}}
                style={{
                  data: {
                    fill: color['UG-02']['primary'],
                    width: 10
                  }
                }}
              />
            </VictoryGroup>
            <VictoryAxis crossAxis={true} style={{ axis: {stroke: color['chart']['backcolor'] }, tickLabels: { fill: color['chart']['text'] } }} />
            <VictoryAxis dependentAxis={true} style={{ axis: {stroke: color['chart']['backcolor'] }, tickLabels: { fill: color['chart']['text'] } }} />
          </VictoryChart>
        </Box>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    width:'100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color['chart']['backcolor'] 
  }
});

export {Charts}
