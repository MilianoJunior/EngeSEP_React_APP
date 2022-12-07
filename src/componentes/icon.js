import React from "react";
import {Center, View, Text,Icon, Container,Image, Heading,Input, } from 'native-base';

function Input(props) {
    // var pasta = {require('./../foo.png')}
    // console.log(pasta)
    return (<Center>
                <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054" {...props} />
            <Image source={require('./../../assets/logo.png')}  resizeMode="cover" alt="EngeSEP Logo" style={{ width: 170, height: 224 }} />
           </Center>);
  }

export default Logo