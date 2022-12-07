
// import mysql from 'mysql';
// import inquirer from 'inquirer';
 // "rn-nodeify": "github:tradle/rn-nodeify",
//  dados de acesso:
// host: br236.hostgator.com.br
// login: usuário do cpanel
// senha: senha do cpanel
// porta: 2222

// pode selecionar o php 8.0 seguidno FAQ ttps://suporte.hostgator.com.br/hc/pt-br/articles/360006664913-Como-alterar-a-vers%C3%A3o-do-PHP- e https://suporte.hostgator.com.br/hc/pt-br/articles/360006664913#.htaccess
// curl -s "https://laravel.build/example-app?with=mysql" | bash
// ssh -p 2222 usuário_do_cpanel@servidor
class DB {
    constructor(nome) {
      this.nome = nome;
      this.ip ='192.185.217.21';
      this.port = '3306'
      this.username = 'gelso267_miliano'
      this.password = 'jr88869892'
      this.database = 'gelso267_CGH_FAE'
      this.table = 'dados'
    }
  
    conectar() {
        console.log('Criando uma conexão')
        // const connection = mysql.createConnection({
        //     host: this.ip,
        //     user: this.username,
        //     password: this.password
        //   }, {multipleStatements: true});
        // connection.connect((error) => {
        //     if (error) {
        //       console.log('Executando error')
        //       console.log(error);
        //     } else {
        //       console.log('Connected to SQL');
        //       inquire();
        //     }
        //   });
      
    }
  }

  export {DB}

//   Axios.post("http://localhost:4000/register", headers: {
//     'Content-Type': 'application/json',
//    }, {
//  data: {
//     username: usernameReg, 
//     email:emailReg, 
//     password: passwordReg
//  }
// }).then((response) => {
//     console.log(response)
// }).catch(err => console.log(err))
// import React, { Component } from 'react';
// import { Dimensions } from 'react-native';
// import {View, Text, VStack, Box} from 'native-base';


// export default class DB{
//     constructor(nome) {
//         this.nome = nome;
//       }

//     state = {

//     layout = () => {
//                      console.log('---------------')
//                      console.log('width geral: ' + this.state.size.widthDevice)
//                      console.log('height geral: '+ this.state.size.heightDevice)
//     }
//     createdb = () => {
//         const command = ''
//     }
//     createtable = (name, dados) =>{
//         console.log('CREATE TABLE',name,'(')
//         for (const [key, value] of Object.entries(dados)) {
//           console.log(`${key}: ${value}`);
//         }
//       } 
//     render(){
//         return (<View display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
//                     <Box w='100%' h='10%' bg='#19191B' display='flex' flexDirection='row'  justifyContent='center' alignItems='center'>
//                         <Text bg='gray.300' color='#fff' m='1' p='2'>Menu 1</Text>
//                         <Text bg='gray.700' color='#fff' m='1' p='2'>Menu 2</Text>
//                         <Text color='#fff' fontSize={9}>
//                             W: {this.state.size.widthDevice * this.state.layout.widthMenu},
//                             H: {this.state.size.heightDevice * this.state.layout.heightMenu}
//                         </Text>
//                     </Box>
//                     <Box w='100%' h='80%' bg='#61646B' display='flex' flexDirection='column' justifyContent='center'  alignItems='center'>
//                        <Text color='#fff'>Body</Text>
//                        <Text color='#fff' fontSize={9}>
//                            W: {this.state.size.widthDevice * this.state.layout.widthBody},
//                            H: {this.state.size.heightDevice * this.state.layout.heightBody}
//                        </Text>
//                     </Box>
//                     <Box w='100%' h='10%' bg='#AFB1B6' display='flex' flexDirection='row' justifyContent='center'  alignItems='center'>
//                        <Text color='#fff'>footer</Text>
//                        <Text color='#fff' fontSize={9}>
//                            W: {this.state.size.widthDevice * this.state.layout.widthFooter},
//                            H: {this.state.size.heightDevice * this.state.layout.heightFooter}
//                        </Text>
//                        {this.layout()}
//                     </Box>
//                 </View>)}
//     }