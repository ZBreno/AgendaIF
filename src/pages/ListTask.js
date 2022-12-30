import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CardTask from '../components/CardTask';


export default function ListTask() {
  
  const [task, setTask] = useState([])

  const IsChecked = async (index) => {
    try { 
      const listOfTask = [...task]
      listOfTask[index].isCheck = !listOfTask[index].isCheck
      await AsyncStorage.setItem("@Task", JSON.stringify(listOfTask))
      setTask(listOfTask)
      
    
    } catch (err) {
      alert(err)
    }
  }
  const remove = async (index) => {
    try {
      const listOfTask = [...task]
     

      listOfTask.splice(index, 1)
      
      await AsyncStorage.setItem("@Task", JSON.stringify(listOfTask))
      setTask(listOfTask)
   
    }
    catch(err) {
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
      <StatusBar style="auto" translucent={true}/>

      <View style={styles.containerHeader}>

        <View>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 24,}}>Agenda.IFRN</Text>
        </View>
        <View>
          <Text style={{fontWeight: '400', color: 'white'}}>Você tem {task.length} <Text style={{fontWeight: 'bold'}}>tarefas</Text></Text>
        </View>
        
      </View>

      <FlatList
        data={task}
        keyExtractor={task => task.title}
        renderItem={({ item, index }) =>
        <CardTask item={item} isChecked={IsChecked} index={index} remove={remove}/>
        }

      />
      



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "100%",
    backgroundColor: '#1DB863',
    height: 150,
    marginBottom: 30,
    alignItems: 'center',
    

  },
});
