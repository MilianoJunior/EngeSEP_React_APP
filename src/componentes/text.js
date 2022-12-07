import React from "react";
import {Center, View, Text, HStack, Avatar, Menu, Container,Image, Pressable, HamburgerIcon, Icon, Heading,Input, VStack, Box, Checkbox, Button, Divider, Link} from 'native-base';


function Texto(props) {
  const colorText = "white"
  const types = {
                  title(){ return {fontSize:"32", color:colorText, fontWeight:'bold', textAlign:"center"}},
                  medium(){ return {fontSize:"16", color:colorText,fontWeight:'medium'}},
                  small(){ return {fontSize:"24", color:colorText,fontWeight:'medium'}},
                  name(){ return {fontSize:"17", color:colorText,fontWeight:'bold'}},
    }
    const propsText = types[props.textType]
    const args = propsText()
    return  <Text {...args} >{props.texto}</Text>
  }

export default Texto
