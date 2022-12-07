import React from "react";
import {Center, View, Text, HStack, Avatar, Menu, Container,Image, Pressable, HamburgerIcon, Icon, Heading,Input, VStack, Box, Checkbox, Button, Divider, Link} from 'native-base';

import Texto from './text'
function Describe(props) {
    const name = props.name + " : "
    const value = props.value
    return  <HStack w="100%" alignItems="center" space={0}>
                <Texto textType='medium' texto={name}/>
                <Texto textType='name' texto={value}/>
            </HStack>
  }

export default Describe