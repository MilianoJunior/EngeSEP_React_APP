import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import {View, Text, Input, ScrollView, FlatList, VStack, HStack, Pressable, Button, IconButton,Icon, Box, Modal, FormControl} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
// import { Pressable } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";



function MyDatePicker() {
  const handleMes = (mes) => {
    meses.map((item)=>{
      if (item.actived) {item.actived = false}
      if (item.mes == mes){item.actived = true}
    })
    // console.log('handleMes: ',mes)
    return meses
  };
  const handleAno = (ano) => {
    // console.log("Ano: ", ano);
    ano.map((item)=>{
      if (item.actived) {item.actived = false}
      if (item.ano == ano){item.actived = true}
    })
    return ano
  };
  const meses = [ {
                    mes: 'Janeiro',
                    actived: false,
                  },
                  {
                    mes: 'Fevereiro',
                    actived: false,
                  },
                  {
                    mes: 'Março',
                    actived: false,
                  },
                  {
                    mes: 'Abril',
                    actived: false,
                  },
                  {
                    mes: 'Maio',
                    actived: false,
                  },
                  {
                    mes: 'Junho',
                    actived: false,
                  },
                  {
                    mes: 'Julho',
                    actived: false,
                  },
                  {
                    mes: 'Agosto',
                    actived: false,
                  },
                  {
                    mes: 'Setembro',
                    actived: false,
                  },
                  {
                    mes: 'Outubro',
                    actived: false,
                  },
                  {
                    mes: 'Novembro',
                    actived: false,
                  },
                  {
                    mes: 'Dezembro',
                    actived: false,
                  }]
  const anos = [ { 
                  ano: 2019,
                  actived:false,
                 },
                 { 
                  ano: 2020,
                  actived:false,
                 },
                 { 
                  ano: 2021,
                  actived:false,
                 },
                 { 
                  ano: 2022,
                  actived:false,
                 },
                ]

  // const [activedMeses, setMeses] = useState(meses);
  const [Mes, setMes] = useState('');
  const [Ano, setAno] = useState('');
  return (
    <Box w='95%' h='100%' display='flex' flexDirection='column'  justifyContent='center' alignItems='center' >
        <Box w='100%' h='30%'  justifyContent='center' alignItems='center'>
          <Text fontSize="sm" color='white' bold >Seleção : {Mes}/{Ano}</Text>
        </Box>
        <Box w='100%' h='70%'  justifyContent='flex-start' alignItems='center'>
          <HStack space={0} borderBottomRadius={15} borderTopRadius={15} justifyContent="space-between" alignItems='center' bg='#181A20'>
            <Box w='40%' h='50%'  borderBottomRadius={30} borderTopRadius={30} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
              <ScrollView>
                {meses.map((item)=>{
                  return <Pressable key={item.mes} onPress={() => setMes(item.mes)} rounded="8" overflow="hidden" pl="2">
                            <Box  borderBottomWidth="1" h='38'
                                 borderColor='#35383F' borderBottomRadius={5} borderTopRadius={5} justifyContent='center' alignItems='center'>
                              <Text color={item.actived ?'info.600' :'white'}>{item.mes}</Text>
                            </Box>
                          </Pressable>
                })}
              </ScrollView>
              <VStack alignItems="center">
                <Icon as={MaterialIcons} name="keyboard-arrow-up" size="sm" />
                <Icon as={MaterialIcons} name="keyboard-arrow-down" size="sm" />
              </VStack>
            </Box>
            <Box w='30%' h='50%' borderBottomRadius={30} borderTopRadius={30} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
              <ScrollView >
                {anos.map((item)=>{
                    return <Pressable key={item.ano} onPress={() => setAno(item.ano)}>
                              <Box  borderBottomWidth="1" h='38'  borderColor='#35383F' borderBottomRadius={5} borderTopRadius={5} justifyContent='center' alignItems='center'>
                                  <Text color={item.actived ?'info.600' :'white'}>{item.ano}</Text>
                              </Box>
                            </Pressable>
                  })}
              </ScrollView>
              <VStack alignItems="center">
                <Icon as={MaterialIcons} name="keyboard-arrow-up" size="sm" />
                <Icon as={MaterialIcons} name="keyboard-arrow-down" size="sm" />
              </VStack>
            </Box>
            <Box w='30%' h='100%' borderBottomRadius={30} borderTopRadius={30}  justifyContent='center' alignItems='center' pr="2">
              <Button size="sm" variant="outline" endIcon={<Icon as={MaterialIcons} name="cloud-download" size="sm" />} >PDF</Button>
            </Box>
          </HStack>
        </Box>
    </Box>
  )
}

export {MyDatePicker}




// import React, { useState } from 'react'
// import DateTimePicker from '@react-native-community/datetimepicker';
// import {View, Text, Input, ScrollView, FlatList, VStack, HStack, Pressable, Button, IconButton,Icon, Box, Modal, FormControl} from 'native-base';
// import { MaterialIcons } from '@expo/vector-icons';
// // import { Pressable } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";



// function MyDatePicker() {
//   // const [date, setDate] = useState(new Date())
//   // const [open, setOpen] = useState(false)
//   const openModal = placement => {
//     setOpen(true);
//     setPlacement(placement);
//   };
  // const showDatePicker = () => {
  //   console.log('1 show', isDatePickerVisible)
  //   setDatePickerVisibility(true)
  // };
  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };
  // const handleConfirm = (date) => {
  //   console.log("A date has been picked: ", date);
  //   hideDatePicker();
  // };
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const meses = [ {
//                     mes: 'Janeiro',
//                     actived: true,
//                   },
//                   {
//                     mes: 'Fevereiro',
//                     actived: false,
//                   },
//                   {
//                     mes: 'Março',
//                     actived: false,
//                   },
//                   {
//                     mes: 'Abril',
//                     actived: false,
//                   },
//                   {
//                     mes: 'Maio',
//                     actived: false,
//                   },
//                   {
//                     mes: 'Junho',
//                     actived: false,
//                   },
//                   {
//                     mes: 'Julho',
//                     actived: false,
//                   },
//                   {
//                     mes: 'agosto',
//                     actived: false,
//                   }]
//   const anos = [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021, 2022]

//   const [showModal, setShowModal] = useState(false);
//   return (
//     <Box w='100%' h='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
//       <VStack space={1} w='80%' alignItems="center">
//         <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//           <Modal.Content maxWidth="450" maxH="312">
//             <Modal.Body h='100' bg='#181A20'>
//               <HStack space={1} justifyContent="center" bg='#181A20'>
//                 <ScrollView >
//                   <FlatList data={meses} bg='#181A20' renderItem={({item})=> 
//                     <Pressable onPress={() => console.log("mes",item)}>
//                             <Box borderBottomWidth="1" h='35'  bg='#181A20' borderColor='#35383F' justifyContent='center' alignItems='center'>
//                               <Text color='white'>{item.mes}</Text>
//                             </Box>
//                     </Pressable>}>
//                   </FlatList>
//                 </ScrollView>
//                 <ScrollView >
//                   <FlatList data={anos} bg='amber.100'renderItem={({item})=> 
//                     <Pressable onPress={() => console.log("ano",item)}>
//                             <Box borderBottomWidth="1" h='35'  bg='#181A20' borderColor='#35383F' justifyContent='center' alignItems='center'>
//                               <Text color='white'>{item}</Text>
//                             </Box>
//                     </Pressable>}>
//                   </FlatList>
//                 </ScrollView>
//                 <Box bg='#181A20' justifyContent='center' alignItems='center'>
//                   <Button  size='md' colorScheme="blueGray" onPress={() => {
//                     setShowModal(false);}}>Selecionar
//                   </Button>
//                 </Box>
//               </HStack>
//             </Modal.Body>
//             {/* <Modal.Footer h='50%' bg='#181A20' >
//               <Box w='100%' h='100%' bg='#181A20' justifyContent='center' alignItems='center'>
//                 <Button  size='lg' w='100%' colorScheme="blueGray" onPress={() => {
//                   setShowModal(false);}}>Selecionar
//                 </Button>
//               </Box>
//             </Modal.Footer> */}
//           </Modal.Content>
//         </Modal>
//         {/* <DateTimePickerModal 
//             isVisible={isDatePickerVisible}
//             mode="time"
//             timePickerModeAndroid="spinner"
//             onConfirm={handleConfirm}
//             onCancel={hideDatePicker}/> */}
//         <HStack space={1} justifyContent="center" bg='#181A20'>
//           <ScrollView >
//             <FlatList data={meses} bg='#181A20' renderItem={({item})=> 
//               <Pressable onPress={() => console.log("mes",item)}>
//                       <Box borderBottomWidth="1" h='35'  bg='#181A20' borderColor='#35383F' justifyContent='center' alignItems='center'>
//                         <Text color='white'>{item.mes}</Text>
//                       </Box>
//               </Pressable>}>
//             </FlatList>
//           </ScrollView>
//           <ScrollView >
//             <FlatList data={anos} bg='amber.100'renderItem={({item})=> 
//               <Pressable onPress={() => console.log("ano",item)}>
//                       <Box borderBottomWidth="1" h='35'  bg='#181A20' borderColor='#35383F' justifyContent='center' alignItems='center'>
//                         <Text color='white'>{item}</Text>
//                       </Box>
//               </Pressable>}>
//             </FlatList>
//           </ScrollView>
//           <Box bg='#181A20' justifyContent='center' alignItems='center'>
//             <Button  size='md' colorScheme="blueGray" onPress={() => {
//               setShowModal(false);}}>Selecionar
//             </Button>
//           </Box>
//         </HStack>
//         {/* <Button.Group isAttached colorScheme="blue" mx={{
//                         base: "auto",
//                         md: 0
//                       }} size="sm">
//           <Button 
//             size="sm" 
//             variant={"solid"}
//             onPress={() => setShowModal(true)} >Selecionar mês: 06/22 </Button>
//           <Button variant="outline" endIcon={<Icon as={MaterialIcons} name="cloud-download" size="sm" />} >Salvar</Button>
//         </Button.Group> */}
//       </VStack>
//     </Box>
//   )
// }

// export {MyDatePicker}