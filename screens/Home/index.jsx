import { StatusBar } from 'expo-status-bar';
import styles from "./styles"
import {  Alert,  FlatList,  Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../componentes/Participantes';
import { useState } from 'react';

export function Home() {

  const [participants, setParticipants] = useState([])

  const [name, setName] = useState('')

  function handleParticipantAdd() {
    console.log('Adicionando participante')
    setParticipants([...participants, name])
    setName('')
    console.log(participants)
  }

  function handleParticipantRemove(participant) {
    Alert.alert("Removendo...", 
    "Deseja realmente remover o participante?", 
    [
      {text: "Sim", onPress: () => removeParticipant(participant)},
      {text: "Não", style: 'cancel'}
    ])
  }

  function removeParticipant(participant) {
    setParticipants( prevState => prevState.filter(state => state != participant) )
  }

    return (
    <View style={styles.container}>
      <Text style={styles.groupName}>Lista de Compras</Text>
      <Text style={styles.groupDate}>Sexta, 14 de novembro de 2023</Text>

      <View style={styles.form}>
      <TextInput style={styles.input}
        onChangeText={setName}
        value={name}
      />
      </View>
      
      <View style={styles.button}>
      <TouchableOpacity style={styles.button}
        onPress={handleParticipantAdd}>
        <Text style={styles.textButton}>ADICIONAR</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.groupName}>Produtos</Text>
    
    {/*
    {
       participants.map(participant => (
        <Participant name={participant} 
        onRemove={handleParticipantRemove} />
       ))
    } */}


    <FlatList
      data={participants}
      keyExtractor={participant => participant}
      renderItem={ ({item}) =>  (
        <Participant name= {item} 
            key= {item}
            onRemove={() => handleParticipantRemove (item)}/>
        )} 
      ListEmptyComponent={() => 
      <Text style={styles.listEmpty}>Sem produtos informados!</Text>
      }
    />

    </View>
    )
}