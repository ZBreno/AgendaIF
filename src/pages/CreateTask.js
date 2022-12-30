import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import CardTask from '../components/CardTask';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';

export default function CreateTask() {
  const category = ["Prova", "CA", "Aula"]
  const [title, setTitle] = useState('')
  const [task, setTask] = useState([])

  const save = async () => {
    try {
      const listOfTask = [...task]

      const json = {
     
        title: title,
        isCheck: false,

      }

      listOfTask.push(json)
      await AsyncStorage.setItem("@Task", JSON.stringify(listOfTask))
      setTask(listOfTask)
  
      
    } catch (err) {
      alert(err)
    }
  }

  
  
  const load = async () => {
    try {

      const response = await AsyncStorage.getItem("@Task")

      if (response !== null) {

        const obj = JSON.parse(response)
        setTask(obj)

      }
     
    }
    catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
   
    load()
  }, [])

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>

        <Text
          style={{ color: "#1DB863", fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 50, }}
        >

          Cadastro de tarefas

        </Text>

        <TextInput
          style={styles.textInput}
          placeholder='Título'
          onChangeText={(title) => setTitle(title)}

        />

        <TextInput
          style={styles.textInput}
          placeholder='Descrição'

        />
        <View style={styles.containerDropDown}>
          <SelectDropdown

            defaultButtonText='Categorias'
            renderDropdownIcon={() => <AntDesign name="caretdown" size={12} color="#B2B2B2" />}
            dropdownIconPosition='right'
            statusBarTranslucent={true}
            dropdownStyle={styles.dropDown}
            buttonStyle={styles.buttonDropDown}
            buttonTextStyle={styles.textCategory}
            data={category}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {

              return selectedItem
            }}
            rowTextForSelection={(item, index) => {

              return item
            }}

          />
        </View>

        <TextInput
          style={styles.textInput}
          placeholder='Data'

        />

        <TouchableOpacity style={styles.button} onPress={save}>

          <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Cadastrar</Text>

        </TouchableOpacity>
        
       
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerDropDown: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#B2B2B2',
    borderRadius: 5,

  },
  buttonDropDown: {
    backgroundColor: '#fff',
    width: 310,

  },

  dropDown: {
    backgroundColor: '#fff',
    borderRadius: 10,

  },
  textCategory: {
    textAlign: 'left',
    color: '#B2B2B2',
    fontSize: 14,
    marginLeft: -5,

  },
  textInput: {
    padding: 10,
    borderColor: '#B2B2B2',
    borderWidth: 1,
    width: 313,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1DB863',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  }
});
