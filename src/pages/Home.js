import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import CreateTask from './CreateTask';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.containerHeader}>



        <Image
          style={styles.image}
          source={require('../assets/LogoIF.png')}
        />
        <Text style={styles.text}>Agenda {"\n"}IFRN</Text>

      </View>

      <View>

        <TextInput
          style={styles.TextInput}
          placeholder="Login"

        />

        <TextInput
          style={styles.TextInput}
          placeholder="Senha"

        />


        <TouchableOpacity onPress={() => navigation.navigate('createTask')} style={styles.button}>

          <Text style={styles.textButton}>Entrar</Text>

        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DB863',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 36,
    marginVertical: 20,
  },
  TextInput: {
    borderRadius: 5,
    width: 254,
    backgroundColor: 'white',
    padding: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#666666',
    padding: 15,
    marginTop: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  }
});
