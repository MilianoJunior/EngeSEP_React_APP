import React from "react";
import {Center, Image} from 'native-base';



function Logo(props) {
    // var pasta = {require('./../foo.png')}
    // console.log(pasta)
    return (<Center>
            <Image source={require('./../../assets/logo.png')}  resizeMode="cover" alt="EngeSEP Logo" style={{ width: 170, height: 224 }}{...props} />
           </Center>);
  }

export default Logo

/*
Contra cheque
<Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text" size="xl" {...props} />

*/