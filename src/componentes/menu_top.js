import React from "react";
import {Center, View, Text, HStack, Avatar, Menu, Container,Image, Pressable, HamburgerIcon, Icon, Heading,Input, VStack, Box, Checkbox, Button, Divider, Link} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles, cores, iconStyle } from '../funcoes/styles'

function MenuTop(props) {
    return  <HStack w="89%" alignItems="center" justifyContent='center' style={styles.backgroundColor}>
                <Box w="20%" style={styles.backgroundColor} alignItems="flex-start">
                  <Avatar bg="#000" source={require('./../../assets/avatar.png')}></Avatar>
                </Box>
                <Box w="60%" style={styles.backgroundColor} alignItems="flex-start">
                  <Text style={styles.menuText}>Bom dia!</Text>
                  <Text style={styles.menuText}>Gelson F. de Oliveira</Text>
                </Box>
                <Box w="20%" style={styles.backgroundColor} alignItems="flex-end" justifyContent='flex-end'>
                  <MaterialIcons name="logout" size = {iconStyle.size } color={iconStyle.color} onPress={() => props.navigation.navigate('Login')}/>
                </Box>
            </HStack>
  }
export default MenuTop