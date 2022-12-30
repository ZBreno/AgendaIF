import React from 'react';


import HomeScreen from '../pages/Home';
import CreateTask from '../pages/CreateTask';
import ListTask from '../pages/ListTask';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="createTask" component={RoutesTabBar} options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RoutesTabBar() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="CreateTask" component={CreateTask} options={{
        tabBarIcon: ({ color }) => <FontAwesome5 name="tasks" size={24} color="black" />, tabBarLabel: 'Registrar Tarefa', title:() => {return null},
        unmountOnBlur: true,
     

      }} />
      <Tab.Screen name="ListTask" component={ListTask} options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="add-task" size={24} color="black" />, tabBarLabel: 'Listar Tarefa', title:() => {return null},
        headerShown: false,
        unmountOnBlur: true,

      }} />
    </Tab.Navigator>

  );
}


