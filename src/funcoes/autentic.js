import React, { useEffect } from 'react';
import { View, AsyncStorage, ActivityIndicator } from 'react-native';
import { useToast,Alert, Center, HStack, Text, VStack, IconButton,Box,CloseIcon } from 'native-base';
import { DB } from './dbconexao';
import axios from 'axios';

const valida = (tipo, valida) =>{
    const msgs = {
      'user': 'Digite um email válido',
      'password': 'Digite uma senha',
    }
    if (valida == null){
      return false
    }
    return true
}

const conexao = (user, password, setMsg, setLogin, navigation) =>{
  let headers = {
    'Content-Type': "application/json"
  }
  let url = "http://192.168.0.132:80/api/autentic";
  console.log('URL: ', url)
  let body = {
    email: user,
    senha: password
  }
  axios.post(url, body).then(function (response){
    let data = response.data
    const resposta = {
      code : response.status,
      data : data
    }
    console.log('Then: ', resposta)
    setLogin(false)
    navigation.navigate('Home')

  }).catch(function (error) {
    setMsg(error.response.data.data)
    setLogin(true)
  });

}
function AuthLogin(navigation, setLogin, setMsg, user, password) {
  if (valida('user', user) && valida('password', password)){
    // conexao(user, password, setMsg, setLogin, navigation)
    if (user == 'gelsonoliveiracco@engesep.com' && password == '12345678'){
      setLogin(false)
      navigation.navigate('Home')
    }else{
      setMsg('Credênciais invalidas!')
      setLogin(true)
    }
  }else{
    setMsg('preencha todos os campos')
    setLogin(true)
  }
};

export { AuthLogin}


// const usuario = {
//   'id':['int NOT NULL AUTO_INCREMENT PRIMARY KEY',''],//
//   'nome': ['VARCHAR(100) NOT NULL','Gelson Fernandes de Oliveira'],//
//   'telefone': ['VARCHAR(100) NOT NULL','(49) 99999-9999'],
//   'nascimento': ['VARCHAR(100) NOT NULL','01/01/1986'],
//   'email': ['VARCHAR(100) UNIQUE NOT NULL','gelsonoliveira@engesep.com.br'],
//   'senha': ['INT NOT NULL','123456'],
//   'imagem': ['VARCHAR(100) NOT NULL','default'],
//   'usina':['VARCHAR(100) NOT NULL',''],
//   'ultimo_acesso':['VARCHAR(100) NOT NULL',''],
//   'numero_acessos':['VARCHAR(100) NOT NULL',''],
//   'acessos_consecutivos': ['INT NOT NULL',''],
//   'create_date': ['TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP',''],
// } 