import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CardTask(props) {
  
  const updateStatus = () => {
    props.isChecked(props.index)
  }

  const removeTask = () => {
    props.remove(props.index)
  }
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerTask}>
        <View style={styles.containerCheck}>
          <Checkbox
            status={props.item.isCheck ? 'checked' : 'unchecked'}
            color='#1DB863'
            onPress={updateStatus}
            
          />
          <Text> {props.item.title} </Text>
        </View>
        <View>
          <TouchableOpacity onPress={removeTask} style={{ marginRight: 10 }}>
            <Image
              source={require('../assets/trash.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  containerTask: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 330,
    borderWidth: 0.3,
    borderRadius: 5,
    borderColor: '#C4C4C4',

    marginBottom: 10,


  },
  containerCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
