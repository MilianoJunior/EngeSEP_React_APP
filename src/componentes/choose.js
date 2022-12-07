import React from "react";
import {Center, View, Text,Icon, Container,Image, Heading,Input,IconButton,Box, Select, HStack, CheckIcon, FormControl} from 'native-base';
import {color} from '../funcoes/styles'
import { help_native, dir, explore, flexbox} from "dev-myfunctions"
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

function ChooseMonth(props) {
  console.log('Escolha mês')
  const [service, setService] = React.useState("");
  return (<Box w="50%" h="100%" display='flex' flexDirection='row' mt='0' alignItems="center" justifyContent="center" bg={color['backcolor']}>
            {/* <Box w="50%" h="100%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" bg={color['backcolor']}> */}
                <FormControl mb="1">
                {/* <FormControl.Label>Início</FormControl.Label> */}
                <Input variant="underlined" type={'date'} w="100%" py="1" 
                        InputRightElement={<IconButton size='md' colorScheme='trueGray' variant="ghost" _icon={{as:MaterialIcons, name:'calendar-today'}} />} 
                        placeholder="dd/mm/aaaa" />
                </FormControl>
                {/* <Select selectedValue={service} minWidth="140" m='1' height={35} accessibilityLabel="Choose Service" placeholder="Mês" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="janeiro" value="ux" />
                        <Select.Item label="fevereiro" value="web" />
                        <Select.Item label="março" value="cross" />
                        <Select.Item label="abril" value="ui" />
                        <Select.Item label="maio" value="backend" />
                        <Select.Item label="junho" value="backend" />
                        <Select.Item label="julho" value="backend" />
                        <Select.Item label="agosto" value="backend" />
                        <Select.Item label="setembro" value="backend" />
                        <Select.Item label="outubro" value="backend" />
                        <Select.Item label="novembro" value="backend" />
                        <Select.Item label="dezembro" value="backend" />
                    </Select> */}
            {/* </Box> */}
            {/* <Box w="50%" h="100%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" bg={color['backcolor']}>
                <Select selectedValue={service} minWidth="140" m='1' height={35} accessibilityLabel="Choose Service" placeholder="Ano" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="2022" value="ux" />
                    <Select.Item label="2020" value="web" />
                    <Select.Item label="2019" value="cross" />
                    <Select.Item label="2018" value="ui" />
                    <Select.Item label="2017" value="backend" />
                    </Select>
            </Box> */}
      </Box>)
  }

export {ChooseMonth}