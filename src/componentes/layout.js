import React from 'react';
import { Box, NativeBaseProvider } from 'native-base';
import { percentual } from '../funcoes/percentual';
import { operacoes } from "dev-myfunctions"


const BoxLayout = props => {
    const percentage_height = operacoes.percentual(props.altura,865)
    return (
      <Box h={percentage_height} {...props}/>
    );
  };
  export default (props) => {
    return (<BoxLayout {...props} />);
  };
  