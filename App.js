import React,{useState,useEffect} from 'react';
import {Text, Button, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppAtividades() {
  const [nome,setNome] = useState('')
  const [cadastro,setCadastro] = useState('')

 useEffect(() => {

   async function recuperar(){
      await AsyncStorage.getItem('@nome').then((valor) => {
        setCadastro(valor)
      }) 
   }
   
   recuperar()

 }, [])

  async function cadastrarNome(){
     await AsyncStorage.setItem('@nome', nome)
    setCadastro(nome)
  }

 return (
   <View>
    

    <TextInput 
    value={nome}
    style={{borderWidth: 2, borderColor:"black", width: 200}}
    onChangeText={(texto) => setNome(texto)}

    />
     <Button title='gravar nome' onPress={() => cadastrarNome()}/>
     <Text style={{fontSize: 20}}>{cadastro}</Text>
  
    </View>
  );
}

